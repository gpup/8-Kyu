//This one is pretty nifty

function isDivideBy(number, a, b) {
    return [a, b].every(i => number % i === 0)
  }
  