//seems redundant and clunky, but an if statement for both arguements should work

function lovefunc(flower1, flower2){
    if(flower1 % 2 == 0 && flower2 % 2 !== 0){
      return true
    }else if(flower1 % 2 !== 0 && flower2 % 2 == 0){
      return true 
    }else
      return false
  }