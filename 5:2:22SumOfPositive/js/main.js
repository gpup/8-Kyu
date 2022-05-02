
// Apparetnly this is the solution. Couldn't figure it out

function positiveSum(arr) {
    // reduce array and check for positive at the same time maybe?
       return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
  }