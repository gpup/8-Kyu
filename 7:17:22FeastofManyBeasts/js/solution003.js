//could have easily written it like this. Didn't have to .split()

function feast(beast, dish) {
   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
  }