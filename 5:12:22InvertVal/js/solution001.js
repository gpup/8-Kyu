//This ain't working

function invert(array) {
    for(let invert of array){
      if(array <= 0){
        return array + array*2
      }else if(array >= 0){
        return array - array*2
      }else
        return 0
    }
  }