const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superma", "flash","batman"]

const newHeros = marvel_heros.concat(dc_heros)
console.log(newHeros);

const new_Heros = [...marvel_heros, ...dc_heros] 
console.log(new_Heros);

const another_array =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array =another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Rajesh"));
console.log(Array.from("Rajesh"));
console.log(Array.from({name: "Rajesh"}))

let score1 =100
let score2 =100
let score3 =100

console.log(Array.of(score1, score2, score3));

