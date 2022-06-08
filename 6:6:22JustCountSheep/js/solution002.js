//I guess i just don't fully understand the string manipulation happneing here. i really need to figure out += operator

let countSheep = function (num){
    let murmur = "";
    for(let i = 1; i <= num; i++){
         murmur += `${i} sheep...`;
    }
    return murmur
  }