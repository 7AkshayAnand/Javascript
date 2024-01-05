// "this" always talks about current execution context
//Example 1
function SetUsername(username){
    console.log("hii i am called");
    this.username=username

}
//call() passes the current execution context "this" to other function
function createUser(username,email,pwd){
    
    SetUsername.call(this,username)
    this.email=email
    this.pwd=pwd

}
const chaii=new createUser("chaii","chaii@gmail.com","123")
console.log(chaii);//{ username: 'chaii', email: 'chaii@gmail.com', pwd: '123' }

//Example 2
// let name={
//     firstname:"Akshay",
//     Lastname:"Anand"
    
// }

// let name2={
//     firstname:"Mausam",
//     Lastname:"Kumar",

// }

// let printName= function(){
//     console.log(this.firstname+" "+this.Lastname);
// }




//function borrowing
//now our this inside printName() function will points to name context
//printName.call(name)// Akshay Anand
//now our this inside printName() function will points to name2 context
//printName.call(name2) //Mausam Kumar

//we can also have the parameters to the function as well 

//Example 3: 
let name={
    firstname:"Akshay",
    Lastname:"Anand"
    
}

let name2={
    firstname:"Mausam",
    Lastname:"Kumar",

}
let printName= function(hometown,State){
    console.log(this.firstname+" "+this.Lastname+" ,"+hometown+" ,"+State);
}

printName.call(name,"Purnea","Bihar")//Akshay Anand ,Purnea ,Bihar
printName.call(name2,"Delhi","Delhi")//Mausam Kumar ,Delhi ,Delhi

//apply(): instead of directly passing the argument it just pass as an list, rest everything is same  

printName.apply(name,["Purnea","Bihar"])//Akshay Anand ,Purnea ,Bihar
printName.apply(name2,["Delhi","Delhi"])//Mausam Kumar ,Delhi ,Delhi