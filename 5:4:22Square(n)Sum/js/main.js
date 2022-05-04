
//This did not work. Couldn't really figure out how to 

function squareSum(numbers) {
    for (let i=0; i<numbers.length; i++) {
      return numbers**
    }
  }

  //This works

function squareSum(numbers) {
  let result = 0;
  for(let i = 0; i < numbers.length; i++){
    result += (numbers[i]*numbers[i]);
  }
    return result;
}

//This also works

function squareSum(numbers) {
    let result = 0;
    for(let i = 0; i < numbers.length; i++){
      result += (numbers[i]*numbers[i]);
    }
      return result;
  }

  //Was so close on this one. Basically had the same answer but forgot to add the "2" after the Math.pow short hand "**"