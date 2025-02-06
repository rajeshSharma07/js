const name = "Rajesh"
const repoCount = 50
let ram = "chintu"
//console.log(name +" "+ repoCount + "value");


console.log('Hello my name is ${ name } and my repo count is ${ repoCount }');

const gameName =  new String('Rajesh')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

 const newString = gameName.substring(0,4)
 console.log(newString);

 const anotherString = gameName.slice(-5,1)
 console.log(anotherString);

 const newStringOne = " sheeta    "
 console.log(newStringOne);
 console.log(newStringOne.trim());


 const url = "https://rajesh.com/hitesh"
 console.log(url.replace('hitesh', 'sharma'));

 console.log(url.includes('chintu'));
 console.log(gameName.split(""));