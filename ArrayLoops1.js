// const coding=["js","ruby","perl","swift","flutter","sql"]

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })


// console.log("let us seee ",values);

// const mynums=[1,2,3,4,5,6,7,8,9,10]

// let newnum1=mynums.filter((num)=> num>5)
// console.log(newnum1);

// let newnum2=mynums.filter((num)=> {
//    return  num>5
// })
// console.log(newnum2);

const students=[
  {name:"Akshay",age:23,marks:91},
  {name:"Anand",age:33,marks:99},
  {name:"Bittu",age:12,marks:80},
  {name:"saurab",age:14,marks:79},
 
]

// const std=students.filter((st)=> st.marks>79)
// console.log(std);

const std1=students.filter((obj)=>{
     return obj.age>13 && obj.marks>=79
})
console.log(std1);