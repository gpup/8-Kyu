//Ok this one took a while and when I solved it i'm not really sure why it worked

function enough(cap, on, wait) {
    let potential = cap - on
    if(potential >= wait){
      return 0;
    }else if(potential <= wait){
      return wait - potential;
    }
  }