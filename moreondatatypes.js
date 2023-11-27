//Primitive : It is basically call by value
//7 types: String,Number,Boolean,null,undefined,Symbol,BigInt 

const score=100
const scorevalue=1.3

const isloggedin=false
const temp=null
let userEmail;

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id==anotherid);


//Referenced or non primitive type : It is basically call by reference
//Array,Objects,Functions

const heroes=["Shaktiman","nagraj","doga"]
console.log(heroes);
let myobj={
    name:"Hitesh",
    age:22
}
console.log(myobj);

const myfun=function(){
   console.log("Hello world");
}
console.log(typeof id);
