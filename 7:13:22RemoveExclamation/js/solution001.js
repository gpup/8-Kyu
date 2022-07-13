//This is what i came up with 

function removeExclamationMarks(s) {
    return s.split('').filter(v => v !='!').join('');
  }