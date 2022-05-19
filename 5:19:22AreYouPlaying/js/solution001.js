//This ain't working, I think I need to split and stuff

function areYouPlayingBanjo(name) {
    //Does the name start with r? return the affirmative message
    if(name[1] === "r" || "R"){
      return `${name} plays banjo`
    }else
    //if it does not start with r, return the negative message
    return `${name} does not play banjo`
  }