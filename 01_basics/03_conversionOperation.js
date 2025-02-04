let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueIsNumber = Number(score)  
console.log(typeof valueIsNumber);


//"33" => 33
//"33abc" => NaN
//true=> 1; false=> 0
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


//1 => true; 0=>false
//"" => false
//"rajesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ****************operations ******************

let value = 3 
let negValue = -value       //output is -3
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);        // otpt=8
console.log(2%3);
console.log(2/3);
 
let str1 = "Rajesh"
let str2 = " Sharma"
let str3 = str1 + str2
console.log(str3);        // otpt is Rajesh Sharma

console.log("1" + 2);        //output is 12
console.log(1 + "2");        //output is 12
console.log("1" + 2 + 2);    // output is 122
console.log(1 + 2 + "2");    // output is 32


// console.log(true);        // output is true
// console.log(+true);       // output is 1
// console.log(true+);       //give error
// console.log(+"");         // output is  0 

let gameCounter=100
gameCounter++;               //101
console.log(gameCounter);





