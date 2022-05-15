function find_average(array) {
    //get sum of array then divide by array.length  
      if(array.length === 0){
        return 0
      }
      const avg = array.reduce((a,b)=> a + b, 0) / array.length;
      return avg
    }
    
    //Second try mother fucker!!!!!!!    

    //Channa helped me with this one