
//Tried mutliple variations of this but did not pass test

function century(year) {
    if(year >= 1 && < 101){
      return 1;
    }else if(year >= 1601 && < 1701){
      return 17;
    }else if(year >= 1701 && < 1801){
      return 18;
    }else if(year >= 1801 && < 1901){
      return 19;
    }else if(year >= 1901 && < 2001){
      return 20;
    }
  };

//Apparently this is the way

const century = year => Math.ceil(year/100)