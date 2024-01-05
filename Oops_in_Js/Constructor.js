//constructor function
function user(username,logincount,isloggedin){
   this.username=username;
   this.logincount=logincount;
   this.isloggedin=isloggedin;

   this.greetings=function(){
    console.log(`Welcome to  ${this.username}`);
   }
//    return this
//no need to explicity write it as it is implictly returns current instance
}
//this is a object only  and it represents current context
//in below case no new instance will be creatd for userTwo and userTwo simply overwrites the userOne
// const userOne=user('Hitesh',12,true)
// const userTwo=user('Akshay',11,false)


//to resolve above issue we have to use new keyword

const userOne=new user('Hitesh',12,true)
const userTwo=new user('Akshay',11,false)
userOne.greetings()
userTwo.greetings()
// console.log(userOne);
// console.log(userTwo);

// user { username: 'Hitesh', logincount: 12, isloggedin: true }
// user { username: 'Akshay', logincount: 11, isloggedin: false }

//new: whenever we use it an empty object will be created also known as instance
 //     now due to new keyword our constructor funciton gets called and it initialize the object by passed arguments and returns this object 


 const adder = new Function("a", "b", "return a + b");

 // Call the function
 console.log(adder(2, 6));