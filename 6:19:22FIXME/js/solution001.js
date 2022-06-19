//Without regex this is the simplest way to do it 

var replaceDots = function(str) {
    return str.split('.').join('-');
  }
