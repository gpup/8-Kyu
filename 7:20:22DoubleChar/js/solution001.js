//Was trying to iterate with a foreach loop. also don't multiply elements by 2, just add them

function doubleChar(str) {
    return str.split('').map(e => e + e).join('');
  }
  