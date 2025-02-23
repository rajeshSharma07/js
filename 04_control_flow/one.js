// // if

// // const isuserloggedIn = true
// // const temprature = 41
// // if (temprature===40){
// // console.log("less than 50");
// // }else{
// //     console.log("temprature is greater than 50");
// // }
// // console.log("excute");


// const score = 200
// if (score >100){
//     const power = "fly"
//     console.log('user power:', power);
// }

// console.log('user power:',power);


// const balance = 1000
// if (balance <500){
//     console.log("test");
//     console.log("test2");
// }else if(balance<750){
//     console.log("less than 750");
// }else{
//     console.log("it is one thousend");
// }


const userLoggedIn = true
const debitCard = true
const loggedInEmail= true
const loggedInFromGoogle = false
if (userLoggedIn && debitCard){
    console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInEmail){
    console.log("user logged in")
}