//Was on the right track, but needed some help with the logic on this one

function firstNonConsecutive (arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i + 1] - arr[i] !== 1) {
        return arr[i + 1];
      }
    }
    return null;
  }

//Still not passing all tests though