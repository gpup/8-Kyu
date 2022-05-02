
//This worked. Sometimes you just gotta read it again.

function makeNegative(num) {
    // check for neg, if true then subtract num*2
    if(num > 0){
      return num - (num*2)
    }else{
        return num
    }
  }


  //Could also be written this way

  function makeNegative(num) {
    return num > 0 ? -num : num;
  }