// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var result;
  var index = 0;

  if (json[0] === '[' && json[json.length - 1] === ']') {
    result = parseArray(json.substr(1, json.length - 2));
  } else if (json[0] === '{' && json[json.length - 1] === '}') {
    result = parseObject(json.substr(1, json.length - 2));
    
  } else if (json[0] === '"') {
    result = parseString(json);
  }
  return result;
};

var parseArray = function (json) {
  var arr = [];
  while (json.length !== 0) {
    if (json[0] === '"') {
      var endIndex = json.indexOf('"', 1);
      //store string in array
      arr.push(parseString(json.substring(0, endIndex + 1)));
      json = json.substr(endIndex + 1);
    }
    if (json[0] === ',') {
      json = json.substr(2);
    }
  }
  return arr;
};
var parseObject = function(json) {
  var obj = {};
  var key;
  //fill the object with stuff;
  //debugger;
  //while (json.length !== 0) {
    if (json[0] === '"') {
      var index = json.indexOf('"', 1);
      //json = ""foo": """
      key = json.slice(1, index);
      json = json.substr(index + 1);
    }
    //get the value after the colon
    if (json[0] === ':') {
      json = json.substr(2);
      parseJSON(json);
    }
    if (key !== undefined) {
      obj[key] = parseJSON(json);//thing after color
    }
    // if (json[0] === ',') {
    //   json = json.substr(2);    
    // }
  //}
  return obj;
};
var parseString = function(json) {
  var endIndex = json.indexOf('"', 1);
  return json.substring(1, endIndex);
};




  // '[{"a":{"e":"b"}, {"c":"d"}]'

  // {"a":{"e":"b"}}, {"c":"d"}


  // {"a":{"e":"b"}}
  
 // "a":{"e":"b"}

   // {"e":"b"}

  //"e":"b"