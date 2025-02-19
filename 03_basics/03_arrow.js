const  user= {
    username: "Rajesh",
    price: 999,

    welcomeMessage: function(){
        console.log('${this.username} , welcome to website');
    }
}
// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
//console.log(this);


// function chai(){
//     let username = "rajesh"
//  console.log(this.username);
// }
// chai()


//*****************arrow function*******************//


const chai = () => {
let username = "Rajesh"
//console.log(this.username);
console.log(this);
}
//chai()


// const addTwo = (num1,num2) => {
//     return  num1 + num2
// }

//const addTwo = (num1,num2) => num1 + num2
//const addTwo = (num1,num2) => (num1 + num2)

//const addTwo = (num1,num2) => num1 + num2
const addTwo = (num1, num2) => ({username: "Rajesh"})

console.log(addTwo(3,5));