//Just a little bit of a switcheroo

function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!"
    }else 
      return `Hello, ${name}!`
  }

//This also works

function greet(name){
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
  }