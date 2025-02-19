// let a = 10
//  const b = 20 
//   var c = 30
//    console.log(a);
//    console.log(b);
//    console.log(c);

let a = 300
    if (true){
        let a = 10
        const b = 20 
         //var c = 30
         console.log("inner", a)
   }

   console.log(a);
  // console.log(b);       // it showing  a and b is not defind bu c is giving ouput 30
  // console.log(c);


  function one(){
    const username = "Rajesh"
    function two(){
         const website = "youtube"
         console.log(username);
    }
    //console.log(website);

   two()
  }
  //one()

  if (true){
    const username = "Rajesh"
    if (username == "Rajesh"){
        const website = "youtube"
        console.log(username + website);
    }
   // console.log(website);
  }                            //both commented console give no output because it is defind out of the function
  //console.log(username);


  //*************** interesting ************** */
  console.log(addone(5))
  function addone (num){
    return num +1
  }
  


  addTwo(5)
 // const addTwo = (nu any  
  const addTwo = function(num){
    return num +2
  }
  //addTwo(5)