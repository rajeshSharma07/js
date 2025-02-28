// const coding = ["js", "ruby", "java","python", "cpp"]
//  const values = coding.forEach((item) =>{
//     console.log(values);
//     //return item;
//  })
//  //console.log(value);



  const mynums = [1,2,3,4,5,6,7,8,9,10]
//  let newnums =mynums.filter((num) => num>4)
//  console.log(newnums);



 const newnums = []

  mynums.forEach ((num)=>{
   if (num > 4){
     newnums.push(num)
   }
  });
  console.log(newnums);