//Damn this is pretty clean

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
  };
  
//I wrote it like this and it passed. 

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(distanceToPump/mpg <= fuelLeft){
        return true;
    }else
    return false;
  };