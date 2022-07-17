//First logic attempt not working

function feast(beast, dish) {
    let beastName = beast.split('');
    let dishName = dish.split('');
    if(beastName[0] === dishName[0] && beastName[beastName.lenght -1] === dishName[dishName.length -1]){
      return true;
    }else{
      return false;
    }
  }