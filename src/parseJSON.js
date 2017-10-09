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
    // characters.shift();
    // characters.pop();
    json = json.substring(1, json.length - 2);
    //case 1: content of object is a primitive
    // var pairs = json.split(',');
    // return pairs;    
  } else if (characters[0] === '[') {
  
    var arr = [];
    if (characters.length === 2) {
      return arr;
    }

    //characters.shift();
    //characters.pop();

  } else if (characters[0] === '') {
    // dealing with string
    if (characters.length === 2) {
      return '';
    }
    var counter = 0;
    //iterate over the characters array to find out where
    //the string ends
    
  } else {
    //primitives--anything that doesn't start
    //with [ or {
  }

  //return the obj that is built out
  //return characters;
};
