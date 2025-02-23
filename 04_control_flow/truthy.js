const userEmail = []
// if (userEmail){
//     console.log("got user email");

// }else{
//     console.log("don't have user email");
// }


//notes- falsy value
//0,-0, BigInt 0n, "", null, undefined, NaN  . is all are falsy value other wise are truthy value


//truthy value
// "0", 'false', " ", [], {}, function(){},



if (userEmail.length ===0){
    console.log("array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length ===0){
    console.log("Object is empty");
}


// Nullish Coalescing operator(??): null undefined

//  let vall;
//  //vall =5 ??10
//  //val1 = null ?? 10
//  val1 = undefined ?? 15
//  console.log(val1);


 // terniary operator
 //condition ? true:false

 const iceTeaPrice = 100
 iceTeaPrice <=80 ? console.log("less than 80"): console.log("more than 80")