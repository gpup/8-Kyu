//This seems way too messy and long, surely there is another way but a simple if else loop should work

function basicOp(operation, value1, value2){
    if(operation === '+'){
      return value1 + value2
    }else if(operation === '-'){
      return value1 - value2
    }else if(operation === '*'){
      return value1 * value2
    }else(operation === '/')
      return value1 / value2
  }

//This also works and is cleaner. Need to look into case and switch

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

//This is apparetnly very poor practice and dangerous, but very clean for codewars sake

function basicOp(o, a, b) {
    return eval(a+o+b);
  }