// This worked, and i was on the right track, but needed a hint

function expressionMatter(a, b, c) {
    return Math.max(
      a + b + c,
      a * b * c,
      (a * b) + c,
      a * (b + c),
      (a + b) * c,
      a + (b * c)
    );
  }

  //Surely there is a much shorter way