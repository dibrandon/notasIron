// function werewolfCheck (name) {
  
//    if (name.slice(0, 3) === "were"){ 
//    return "it is a werewolf"
//    } 
//    else if  (name.slice(0, 3) !== "were"){ 
//        return "just a regular person"
//        } 
//  }
  

// function werewolfCheck (name) {
//     const checker = name.salice(0, 4)
//       if (checker == "were"){ 
//       return "it is a werewolf"
//       } 
//       else { 
//           return "just a regular person"
//           } 
//     }
    
    // .slice() metodo utiliza el index 0 para dividir la cadena de string.

    // test 2


    // function countSmilies (message) {
    //     // Your code here
    //   let count = 0;
    //            const smiles = [':)'];
      
    //           for (let i = 0; i < message.length; i++) {
    //               if (message.includes([i]))
    //               {count++}
    //               }
    //               return count   
    //   };
      

    // function oddNumbers(number){
    //     const oddNumbers = [];
    //     for(let i=0; i<=oddNumbers; i++){
    //        if(i%2 != 0){
    //        odd.push(i)   
    //        }
    //       }
    //     }

    // function pickOdd (arr) {
    //     const oddNumbers = []; // do not remove or change this line
      
        
    //     // Your code here
    //     for (let i =0; i<=oddNumbers; i++){
    //       if( i%2 !=0){
    //         oddNumbers.push(i)
    //       }
    //     }
        
    //     return oddNumbers; // do not remove or change this line
    //   }
      
// funciono ESTA!! (why??!)

function pickOdd (arr) {
    const oddNumbers = []; // do not remove or change this line
  
    
    // Your code here
    for (let i =0; i<4; i++){
      if( i%2 !==0){
        oddNumbers.push(i)
      }
    }
    
    return oddNumbers; // do not remove or change this line
  }
  

  function countSmilies (message) {
    // Your code here
  let count = 0;
           const smiles = [':)'];
  
          for (let i = 0; i < smiles.length; i++) {
              const element = smiles[i];
              count++
              
          } 
          return count
  };

  function countSmilies (message) {
    let count = 0;
    const smilies = [':)'];
    
    for (let i = 0; i <= message.length; i++){
      for (let s = 0; s <= smilies[i]; s++) {
        if (message[i] === smilies[s]){
         count++;
        }
       
      }
    }
    return count;
  };


  function countSmileys(arr) {
    var count = 0;
  
    arr.forEach(function(cur) {
      if (cur[0] === ':' || cur[0] === ';') {
        if (cur.length === 2 && (cur[1] === ')' || cur[1] === 'D')) {
          count++;
        } else if (cur.length === 3 && (cur[1] === '-' || cur[1] === '~')) {
          if (cur[2] === ')' || cur[2] === 'D') {
            count++;
          }
        }
      }
    });
    return count;
  }

  function countSmilies (message) {
    let count = 0;
    const smiles = [':)'];
          
       for (let i = 0; i<message.length; i++) {
            if (message.includes([i])){
              count++}
           }
            return count 
    
    };

    // respuesta correcta....
     // encontrar ":)"
    function countSmilies(message) {
        let count = 0;
        for (let i = 0; i < message.length; i++) {
          const char1 = message[i];
          const char2 = message[i + 1];
          
          if (char1 === ":" && char2 === ")") {
            count++;
          };
        };
      
        return count;
      };