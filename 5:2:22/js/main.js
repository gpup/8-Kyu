
// nailed it FIRST TRY

function plural(n) {
    // check if 1, if so then return false
    if(n === 1){
      return false;
    }else{
      return true;
    }
  }


  // This would also work and be much cleaner
  function plural(n) {
    return n !== 1;
  }