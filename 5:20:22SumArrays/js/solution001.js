// This isn't working not sure why

function sum (numbers){
    if(numbers == 0){
      return 0
    }else
    numbers.reduce((a,b)=> a + b, 0)
  }
  