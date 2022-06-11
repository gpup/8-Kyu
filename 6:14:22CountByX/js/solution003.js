//Here's another solution, kind of nifty 

function countBy(x, n) {
    var z = [];
    while (z.length < n) z.push(x * (z.length + 1));
    return z;
  }
  