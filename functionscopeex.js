

//var c=300
// let a=300

// if(true){
//     let a=10
//     const b=20
//      var c=30
//      console.log("inner a : "+a);
// }
// console.log("outer a : ",a);

//scope in browser console and this node environment is entirely different

//in case of nested function the child function can use parent function data members but parent cannot use child data
// function one(){
//     const username="Akshay"

//     function two(){
//         const website="website"
        
//         console.log(username);
//     }
//     //console.log(website);
//     two()
// }

// one()

//interesting example

function addone(num){
    return num+1
}

console.log(addone(5))
//new way of creating function
const addtwo=function(val){
    return val+2
}
console.log(addtwo(5));























