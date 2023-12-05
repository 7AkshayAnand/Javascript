//console.log('Control flow starts');
//if statement
// if(condition){

// }

// const isuserloggedin=true

// if(isuserloggedin){
//     console.log('Welcome to Home Page');
// }

// if(2==='2'){
//     console.log('run');
// }


// if(2>11){
//     console.log("yes u r right");
// }else{
//     console.log('no u r wrong');
// }

// if(4>2){
//     const user="Akki"
//     console.log('u are again right');
// }

//implicit scope
//const balance=500
//if(balance>300) console.log("ameer log");

// const bal=1000
// if(bal<500){
//     console.log('balance  less than 500');
// }else if(bal<750){
//     console.log('less than 750');
// }else{
//     console.log('greater than all');
// }

// const userLoggedin=true
// const debitCard=true
// const loginfromgoogle=true
// const loginnfromemail=false

// if(userLoggedin && debitCard){
//     console.log('allow to buy course');
// }

// if(loginfromgoogle && loginnfromemail){
//     console.log('allow to log in');
// }

//switch statement

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month=1

// switch (month){
//     case 1: console.log('January');
//             break
//     case 2: console.log('Februray');
//              break;
//     case 3: console.log('March');
//              break;
//     case 4: console.log('April');
//              break;         
            

//     default:console.log('Default matched');
//              break;
// }

//false values: false, empty string,0,-0,BinInt 0n,null,undefined,NaN
//truthy values :rest all true as empty array [],"0","false"," ",{},function(){}

// const userEmail=[1,2,3]
// if(userEmail){
//     console.log("welcome to home");
// }else{
//     console.log("niklo yha se");
// }

//Nullish Coalescing Operator(??): entire story revolves around "null" and "undefined"

let val1;
val1=5 ?? 10
console.log(val1);

val1=null ?? 10
console.log(val1);

var1=undefined ??15
console.log(var1);

var2= null?? 10 ?? 20
console.log(var2);



//ternary operator
// condition?true:false

let a=10
let b=20
let res=a>b?a:b
console.log(`greater between ${a} and ${b} is : ${res}`);






















