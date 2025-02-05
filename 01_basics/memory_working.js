// two type of memory.
//Stack(primitive datatype are stored), Heap(Non-Primitive datype are stored)

//string
let myYoutubename = "RajeshSharma"

let anothername = myYoutubename
anothername = "Vishwakarmavansi"

console.log(myYoutubename);
console.log(anothername);


//heap

let userone = {
     email: "user@google.com",
     upi: "user@ybi",

}

let usertwo= userone

usertwo.email ="rajesh@gmail.com"

console.log(userone.email);
console.log(usertwo.email);