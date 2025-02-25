const coding = ["js", "ruby", "java","python", "cpp"]

// coding.forEach(function (item){
//     console.log(item);
// })


// coding.forEach((item) =>{
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe);

coding.forEach((item, index,arr)=>{
    console.log(item,index,arr);
})



const myCodeing =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCodeing.forEach((item)=>{
    console.log(item.languageName);
})


