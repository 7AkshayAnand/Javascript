
// function saymyname(){
//     console.log("This is first function");
// }

// saymyname()


// function add(x,y){
//     console.log("Addtion is ",x+y);
// }

// add(3,4)


// function add(x,y){
//    let result=x+y
//    return result
// }

// const result=add(3,4)
// console.log("returned result is : ",result);

// function loginusermessage(username){
//     return `${username} just logged in`
// }
// console.log(loginusermessage('aksay'))

//default parameters : at the calling time if we do not pass anything then default value will be taken as username
// function loginusermessage(username="userone"){
//     return `${username} just logged in`
// }
// console.log(loginusermessage())//userone just logged in
// console.log(loginusermessage("Akshay"));//Akshay just logged in


//...rest operator is like var arg method in Java
// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(500,200,300));//[ 500, 200, 300 ]

// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }

// console.log(calculateCartPrice(500,200,300,400));//[300,400] as 500 and 200 will kept into val1 and val2

//passing Object to the function

// const usernew={
//     username:"Akshay",
//     age:22

// }

function handleObject(anyObject){
    
    console.log(`userName is ${anyObject.username} and The age is : ${anyObject.age}`);
}
//handleObject(usernew)

//another way directly passing object
handleObject({
    username:"Anand",
    age:23

})

//accepting and returing Array values in Javascript
function acceptarray(arr){
    return arr[1]
}
console.log(acceptarray([1,2,3,4]))