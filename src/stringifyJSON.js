// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (obj === null || typeof obj !== 'object') {
    return '' + obj;
  }

  if(Array.isArray(obj)) {
    if (!obj.length) {
      return '[]';
    }
    var elements = [];
    for(var i = 0; i < obj.length; i++){
      elements.push(stringifyJSON(obj[i]));
    }
    return '[' + elements.join(',') + ']';
  } else {
    var counter = 0;
    for (var key in obj) {
      counter++;
    }
    if (counter === 0) {
      return '{}';
    }
    var elements = [];
    for(var key in obj){
      let formattedKey = stringifyJSON(key);
      let value = stringifyJSON(obj[key]);
      elements.push(formattedKey + ':' + value);    
    }
    return '{' + elements.join(',') + '}';
  }
};
