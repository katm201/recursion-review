// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //primitives
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (obj === null || typeof obj !== 'object') {
    return '' + obj;
  }
  //arrays
  if(Array.isArray(obj)) {
    if (!obj.length) {
      return '[]';
    }
    var elements = [];
    for(var i = 0; i < obj.length; i++){
      elements.push(stringifyJSON(obj[i]));
    }
    //iterate through the obj
      //elements.push(stringifyJSON(obj[i]));
    return '[' + elements.join(',') + ']';
  } else {
    //objects
    var counter = 0;
    for (var key in obj) {
      counter++;
    }
    if (counter === 0) {
      return '{}';
    }
    //iterate through the obj
      //
  }
};
