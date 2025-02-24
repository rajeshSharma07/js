// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element ==5){
        console.log("5 is best number");
    }
    console.log(element);
}

// for (let index = 0; index <=10 ; index++) {
//     console.log("outer loop", index);
//     for (let j = 0; j <=10; j++) {
//         //console.log("inner loop", j ,index);
//         console.log(index + '*' + j +'=' + index*j);
//     }
  
    
// }

let myArray =["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}



//break and continue

// for (let index = 0; index <=20; index++) {
//     if(index==5){
//         console.log("detected 5");
//         break;
//     }
//     console.log("value is ",index);

    
// }




for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log("detected 5");
        continue
    }
    console.log("value is ",index);

    
}