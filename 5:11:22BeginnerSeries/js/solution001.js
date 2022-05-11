//There are 3600 seconds in an hour

function past(h, m, s){
    return h*360000 + m*60000 + s*1000
}

//was thinking way too hard about thi one. No iterations of conditionals necessary, but let's see if they will work 