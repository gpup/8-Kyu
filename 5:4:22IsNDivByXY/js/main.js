
//This one is v simple

function isDivisible(n, x, y){
    if(n % x === 0 && n % y === 0){
      return true;
    }else{
      return false;
    }
  };

  //Need to start practicing writing these with arrow functions

//Like this

function isDivisible(n, x, y) {
    return n%x==0 && n%y==0
  }

//Or this

isDivisible = (n, x, y) => n%x==0 && n%y==0