const quarterOf = (month) => {
    //P - january = 1, february = 2, etc..
    //R - first = january, february, march, second = april, may, june etc
    //E - 1 => first, 4 => second
    //P - if the parameter is equal to defined group, return that 
    if(month <= 3){
      return 1
    }else if(month <= 6){
      return 2
    }else if(month <= 9){
      return 3
    }else{
      return 4
    }
  }