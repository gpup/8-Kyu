//This one worked, but not really sure why

function firstNonConsecutive (arr) {
    for(let i = 1; i < arr.length; i++) {
      if(arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
    return null;
  }