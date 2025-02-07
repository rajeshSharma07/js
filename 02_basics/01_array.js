const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "padman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//array methods

myArr.push(6)
console.log(myArr);
myArr.pop()            //pop the last element from the array
console.log(myArr);

myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);


console.log(myArr.indexOf(8));    //check the availability of element

const newArr = myArr.join()     //remove the [] brackets and convert in string
console.log(newArr);


//***********slice, spice ***************//
console.log("A",myArr);
const myn1 = myArr.slice(1,3)      //slice is does no include range and ont manuplate the original array.


console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)     //splice include range and manuplate the original array.
console.log(myn2);
console.log("C",myArr);

