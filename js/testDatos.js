function werewolfCheck (name) {
  
   if (name.slice(0, 3) === "were"){ 
   return "it is a werewolf"
   } 
   else if  (name.slice(0, 3) !== "were"){ 
       return "just a regular person"
       } 
 }
  

function werewolfCheck (name) {
    const checker = name.salice(0, 4)
      if (checker == "were"){ 
      return "it is a werewolf"
      } 
      else { 
          return "just a regular person"
          } 
    }
    
    // .slice() metodo utiliza el index 0 para dividir la cadena de string.