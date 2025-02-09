//const tinderUser = new Object()         it is silgalton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rajesh"
tinderUser.isLoggedIn =false

console.log(tinderUser);

const regularUser ={
    email:"rajesh@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Rajesh",
            lastname:"Sharma"
        }
    }
}
console.log(regularUser.fullname.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "q", 4: "b"}

//const obj3 = Object.assign(obj1,obj2)
//console.log(obj3)

const obj3 ={...obj1, ...obj2}
console.log(obj3);


const users =[
    {
        id: 1,
        email: "rajesh@gmail.com"
    }
   
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
//console.log(Object.valuses(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnproperty('isLogged'));