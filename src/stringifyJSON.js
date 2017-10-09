// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (obj === null || typeof obj !== 'object') {
    return '' + obj;
  }

  var elements = [];
  if(Array.isArray(obj)) {
    if (!obj.length) {
      return '[]';
    }
    for(var i = 0; i < obj.length; i++){
      elements.push(stringifyJSON(obj[i]));
    }
    return '[' + elements.join(',') + ']';
  } else {
    var counter = 0;
    var stringifiable = true;
    for (var key in obj) {
      counter++;
      if ((obj[key] !== null) 
        && (obj[key] === undefined 
        || obj[key].constructor === Function)) {
        stringifiable = false;
      }
    }
    if (counter === 0 || !stringifiable) {
      return '{}';
    }
    for(var key in obj){
      let formattedKey = stringifyJSON(key);
      let value = stringifyJSON(obj[key]);
      elements.push(formattedKey + ':' + value);    
    }
    return '{' + elements.join(',') + '}';
  }
};
