// Need to add .apply to the bag of tricks. Also remember that the syntax, in this context, starts with null as an argument 

const min = function(list) {
    
    return Math.min.apply(null, list);
}

const max = function(list) {
    
    return Math.max.apply(null, list);
}