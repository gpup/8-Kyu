//solving via iteration 

var replaceDots = function(str) {
    let answer = "";
    for (let i = 0; i < str.length; i++) {
      answer += (str[i] !== ".") ? str[i] : "-";
    }
    return answer;
  }