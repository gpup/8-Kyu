// A very long if else iteration

function expressionMatter(a, b, c) {
  
    if(a==1 && b==1 && c==1){
      return 3;
    }
    
    if(a!=1 && b!=1 && c!=1){
      return a*b*c;
    }
    if(a==1 && b!=1 && c!=1){
      return (a+b)*c
    }
     if(a!=1 && b!=1 && c==1){
      return a*(b+c);
    }
   
    if(a!=1 && b==1 && c==1){
      return a*2;
    }
   
    if(a==1 && b==1 && c!=1){
      return c*2;
    }
   
    if(a==1 && b!=1 && c==1){
      if(a==c){
        return a+b+c;
      }
      if(a>c){
        return a*(b+c);
      }
      if(a<c){
        return (a+b)*c;
      }
    }
    
    if(a!=1 && b==1 && c!=1){
      if(a==c){
        return (a+b)*c;
      }
      if(a>c){
        return a*(b+c);
      }
      if(a<c){
        return (a+b)*c;
      }
      
    }
    
  }
  