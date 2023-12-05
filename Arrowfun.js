//this : it refers to the current context
// const user={
//     username:"hitesh",
//     price:99,

//     welcomeMessage: function(){
immediateInvokedfunction//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//console.log(this);//{}

// in node environment global object in empty {} but if you run console.log(this) on browser then you will get "window" as an output


//function using arrow function
const chaii=()=>{
    console.log("I am called");
}

chaii()
//below is syntax of arrow function
//const anyname=()=>{}

const addtwo=(n1,n2)=>{
    return n1+n2
}

console.log(addtwo(4,3))
//using implicit return that  is if we use curly braces then we have to write return keyword explicity 

const addno=(n1,n2)=>(n1+n2)
console.log(addno(5,6));


//returning objects 

const obj1=()=>({username:"akshay",age:22})
console.log(obj1());//{ username: 'akshay', age: 22 }



