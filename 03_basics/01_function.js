
function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");
    console.log("E");
}
//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(4,7)
// addTwoNumbers(4,"7")
// addTwoNumbers(4,"a")
// addTwoNumbers(4,null)
//  const result  = addTwoNumbers(4,7)

function addTwoNumbers(number1,number2){
//let result = number1 + number2
return number1 + number2
}

const result  = addTwoNumbers(4,7)
console.log("Result:", result);


function loginUserMessage(username){
    return '${username} just logged in'
}
  console.log(loginUserMessage("Rajesh"));
  console.log(loginUserMessage(""));
  console.log(loginUserMessage());