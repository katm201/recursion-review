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
    //iterate through the obj
      //elements.push(stringifyJSON(obj[i]));
    return '[' + elements.join(',') + ']';
  } else {
    //
  }
};
