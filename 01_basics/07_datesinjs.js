//Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString())
console.log(myDate.toTimeString());
console.log(myDate.toISOString());

let myCreatedDate = new Date("01-14-2025")
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());


let mytimeStamp = Date.now()

console.log(mytimeStamp);          // it give answer in miliseconds

console.log(Math.floor(Date.now()/1000));// converted in seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(myDate.getMonth()+1);


newDate.toLocaleString('default',{ weekday: "long"

})