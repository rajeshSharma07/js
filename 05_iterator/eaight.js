const mynums = [1,2,3,4]

 const mytotal =mynums.reduce(function(acc,currentvalue){
    console.log('acc'+acc+'and currentvalue'+currentvalue);
    return acc+currentvalue
 },0)
 console.log(mytotal);




 const shoppingcart = [
    {
        itemname:"js course",
        price:2999
    },
    {
    itemname: "java course",
    price: 3000
    },
    {
        itemname:"data science course",
        price:4000

    }
 ]
  const pricetopay = shoppingcart.reduce((acc,item)=> acc+item.price,0)
  console.log(pricetopay);