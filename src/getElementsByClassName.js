// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  node = node || document.body;

  var nodes = [];
  
  var checkClass = function(currentNode) {
    return currentNode.classList.contains(className);
  };

  if (checkClass(node)) {
    nodes.push(node);
  } 

  for (var i = 0; i < node.children.length; i++) {
    nodes = nodes.concat(getElementsByClassName(className, node.children[i]));
  }

  return nodes;
};
