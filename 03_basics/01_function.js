
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

  function calculateCartPrice(...num1){
    return num1
  }
  console.log(calculateCartPrice(200,300,400))

  const user = {
    username: "Rajesh",
    price: 199
  }

  function handleobject(anyobject){
    console.log('username is ${anyobject.username} and price is ${anyobject.price}');
  }
  handleobject(user)