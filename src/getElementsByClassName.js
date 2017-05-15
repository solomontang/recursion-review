// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // get document body
  var body = document.body;
  // result array
  var results = [];
  // call test function 
  var getNodes = function(element) {
    //check if the classList conatains class name
    if (element.classList.contains(className)) {
      // push the result to empty array
      results.push(element);
    }
    if (element.childNodes) {
      element.childNodes.forEach(function(childElement) {
        //check if childNodes contains className
        if (childElement.classList) {
          // use recursion
          getNodes(childElement);
        }
      });
    } 
  };
  getNodes(body);
  return results;
};

