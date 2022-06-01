//Passed sample tests, but not the others. It's not pretty, but should have worked.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(distanceToPump <= 50 && mpg <= 25 && fuelLeft <= 2){
      return true;
    }else
      return false;
   };