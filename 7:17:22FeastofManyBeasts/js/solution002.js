//Tried .pop() insted of .length -1 and it worked 

function feast(beast, dish) {
    let beastName = beast.split('');
    let dishName = dish.split('');
    if(beastName[0] === dishName[0] && beastName.pop() === dishName.pop()){
      return true;
    }else{
      return false;
    }
  }