//Didn't really understand this one at all. Are these getting harder? 

function points(games) {
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      }else if (game[0] > game[2]) {
        total += 3;
      }
    });
    return total
  }