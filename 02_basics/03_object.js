const mySym = Symbol("Key1")

const JsUser = {
    name:" Rajesh",
    age: 21,
    [mySym]: "myKey1",
    location: "uttar pradesh",
    email: "rajesh@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday","saturday"]
}
 //console.log(JsUser.email);
 //console.log(JsUser["email"]);
 //console.log(JsUser[mySym] );

 //Object.freeze(JsUser);    //freeze the objcet and no changes allowed
// JsUser.email ="chintu@gmail.com"
 //console.log(JsUser);

 JsUser.greetingTwo = function(){
    console.log( 'hello js user,${this.name}');
 }

 console.log(JsUser.greetingTwo());