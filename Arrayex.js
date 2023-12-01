  const myarr=[1,2,4,5,6]
  const newarr1=[1,2,"Akshay",true]
  
  console.log(newarr1);//[ 1, 2, 'Akshay', true ]
// const myheroes=["Akshay","Anand","Mausam","Sumit"]

// const myarr2=new Array(1,2,3,4)

// console.log(myarr[1]);

//Methods of Array
//push : used to add element
// myarr.push(7)
// console.log(myarr);
//pop removes last element from the array
// myarr.pop()
// console.log(myarr);

//unshift add an element at first position and shift removes element from the first position

// myarr.unshift(11)
// console.log(myarr);

// myarr.shift()
// console.log(myarr);
// console.log(myarr.indexOf(5));
//returns true if element present else returns false
// console.log(myarr.includes(3));

//The join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition you can specify the separator:

const newArr=myarr.join()
console.log("type of this arrys is "+typeof newArr +" and value is "+newArr);

//slice,splice
//  console.log("A",myarr);

//  const myn1=myarr.slice(1,3)
//  console.log(myn1);
//  console.log("B",myarr);

//  const myn2=myarr.splice(1,3)
//  console.log(myn2);
//  console.log("C",myarr);

const marver_heroes=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// dc[3]="akshay"
// //console.log(dc);

// marver_heroes.push(dc)

// console.log(marver_heroes);

// const allhero=marver_heroes.concat(dc)
// console.log(allhero);

//using spread operator
// const allnewheroes=[...marver_heroes,...dc]
// console.log(allnewheroes);

// const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const myreal_array=anotherarray.flat(2)

// console.log(myreal_array);

//converting anydatatype to the array
console.log(Array.isArray("Hitesh"))

console.log(Array.from("Hitesh"))

console.log(Array.from({name:"Anand"}));//interesting as we have to specify whether we want key or value as an array
//creating array from multiple data
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));


















