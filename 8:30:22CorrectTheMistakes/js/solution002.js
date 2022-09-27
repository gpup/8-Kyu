//Not working and I don't know why

function correct(s){
    s = s.split('');
    for(let i = 0; i < s.length; i++){
      if(s[i] === 5){
        return s[i] === 'S';
      }else if(s[i] === 0){
        return s[i] === 'O';
      }else if(s[i] === 1){
        return s[i] === 'I'
      }
    }
    return s.join('');
  }