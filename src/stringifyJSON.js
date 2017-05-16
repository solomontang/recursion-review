// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//testing pomander
var stringifyJSON = function(obj) {
  // your code goes here
  // literal conversion to string
  var result = '';
  if (Array.isArray(obj)) {
    result += stringifyArray(obj);
  } else if (typeof obj === 'object' && obj !== null) {
    //stringify object
    result += stringifyObject(obj);
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
  var result = array.map(function(element) {
    return stringifyJSON(element);
  });
  return '[' + result + ']';
};

var stringifyObject = function(object) {
  var result = [];
  Object.keys(object).forEach(function(key) {
    if (typeof object[key] !== 'function' && object[key] !== undefined) {
      result.push(stringifyJSON(key) + ':' + stringifyJSON(object[key]));
    }
  });
  return '{' + result + '}';
};

