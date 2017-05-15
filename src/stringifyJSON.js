// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // literal conversion to string
  var result = '';
  if (Array.isArray(obj)) {
    console.log('array');
    result += stringifyArray(obj);
  } else if (typeof obj === 'object' && obj != null) {
    //stringify object
    stringifyObject(obj);
  } else if (typeof obj === 'string') {
    //stringify string
    result = '"' + String(obj) + '"';
  } else {
    //stringify literal
    result = String(obj);
  }
  return result;
};

var stringifyArray = function(array) {
  //'[' call stringifyJSON ']';
  var result = '[';
  array.forEach(function(element) {
    result += stringifyJSON(element);
    result += ',';
  });
  if (result.length > 1) {
    result = result.slice(0, -1);
  }
  result += ']';
  
  return result;
};

var stringifyObject = function(object) {
};

