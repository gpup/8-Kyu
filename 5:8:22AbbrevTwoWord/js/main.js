
//Not sure I understand the array [1] here, but oh well

function abbrevName(name){
    //split then grab first elements of each array add . and capitalize
    let nameAbbrev = name.split(" ");
    return nameAbbrev[0][0] + "." + nameAbbrev[1][0].toUpperCase();
  }

//Here are some other ways to solve this one

//I like this one a lot more
function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}


