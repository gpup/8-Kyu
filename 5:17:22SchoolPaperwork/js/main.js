//so so fucking easy

function paperwork(n, m) {
    if(n<0 || m<0){
      return 0
    }
    return n*m
  }

//here are some other functions that would work

function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
  }