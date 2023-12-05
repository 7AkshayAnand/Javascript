//for of loops

// const arr=[1,2,3,4,5]

// for (const value of arr) {
//      console.log(value);
// }

// for (const val of "akshay") {
//     console.log(`each character is ${val}`);
// }

//Maps

// const map=new Map()
// map.set('IN',"India")
// map.set("USA","United States of America")
// map.set("FN","France")
// //console.log(map);

// for (const [key,val] of map) {
//     console.log(key,val);
// }

// for (const key of map) {
//     console.log(key[0],key[1]);
// }

//Object
// const obj={"a":"apple","b":"ball","c":"cat","d":"dog"}

// for (const key in obj) {
//      console.log(key,obj[key]);
// }

//Arrar using for in loop
// let arr=["cpp","Java","Swing","COllection"]
// for (const key in arr) {
//     console.log(arr[key]);
// }

const coding=["js","ruby","java","python"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((item)=>{console.log("again printong ",item);})

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

//Array of objects
const mycoding=[
  {
   languageName:"Javascript",
   languageFile:"JS"

  },
  {

    languageName:"Java",
    languageFile:"Java"
  },
  {
    languageName:"Python",
    languageFile:"py"
  }

]
mycoding.forEach((obj)=>{
    console.log(obj.languageName,' -------  ',obj.languageFile);
})

for (const itm of mycoding) {
    console.log(itm.languageFile);
}
for (const key in mycoding) {
   console.log("I am a coder ",mycoding[key].languageName);
}