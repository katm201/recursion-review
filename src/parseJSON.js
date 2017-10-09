// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here


  var characters = json.split('');
 
  if (characters[0] === '{') {
    var obj = {};
    if (characters.length === 2) {
      return obj;
    }

  }
  if (characters[0] === '[') {
  
    var arr = [];
    if (characters.length === 2) {
      return arr;
    }

  }
  //return the obj that is built out
};
