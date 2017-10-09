// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // your code here
  //set default value for node
  node = node || document.body;

  var nodes = [];

  
  //create function to check if the
  //classname is correct
  

  var checkClass = function(currentNode) {
    //
  };

  //check if our current node has the correct
  //classname
    //if so, push node to nodes array

  if (checkClass(node)) {
    nodes.push(node);
  }

  //depth first search
    //iterate over all child nodes
    //recurse over each child node

  for (var i = 0; i < node.children.length; i++) {
    getElementsByClassName(className, node.children[i]);
  }
  
  return nodes;
  //return nodes array
};


//You should use document.body, element.childNodes, and element.classList