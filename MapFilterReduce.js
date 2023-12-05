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

// const students=[
//   {name:"Akshay",age:23,marks:91},
//   {name:"Anand",age:33,marks:99},
//   {name:"Bittu",age:12,marks:80},
//   {name:"saurab",age:14,marks:79},
 
// ]

// const std=students.filter((st)=> st.marks>79)
// console.log(std);
//in below we have opened the scope by using {} so we have to implicitly write the return keyword and this rule is applicable to nearly everywhere
// const std1=students.filter((obj)=>{
//      return obj.age>13 && obj.marks>=79
// })
// console.log(std1);

//map
const myNumber=[1,2,3,4,5,6,7,8,9,10]

let val=myNumber.map((num)=>num+10)
console.log("mapped with 10 is : "+val);


//chaining that is calling one method after ananother
const newNum=myNumber.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=41)



console.log(newNum);

//reduce

const arr1=[1,2,3,4,5]
//let acc=0
const reducedValue=arr1.reduce(function(acc,curval){
  console.log(`accumulator value is ${acc} and current value is  ${curval}`);
  return acc+curval
},0)
// after comma the zero(0) is defined as initial value for the accumulator
console.log("reduced value is : ",reducedValue);


//other syntax
let ans=arr1.reduce((acc,cur)=>acc+cur,0)
console.log('the answer is : ',ans);


const shoppingCart=[
  {
    itemName:"js course",
    price:2999
  },
  {
    itemName:"mobile dev",
    price:3999
  },
  {
    itemName:"web dev",
    price:2999
  }



]
let totalprice=shoppingCart.reduce((acc,cur)=>acc+cur.price,0)
console.log('Total price is : '+totalprice);