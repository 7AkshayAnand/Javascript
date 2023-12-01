//Singleton : when we create objects using new keyword then it will be a singleton
//when we create object direclty using literals then it is not singleton

//Singleton
//object.create()


//object literals


const mysym=Symbol("Key1")
 const juser={
     name:"Akshay",
     "fullname":"Akshay Anand",
     [mysym]:"symbol1",
     age:22,
     location:"location",
     email:"akshay@micron.com",
     isloggedin:false,
     lastlogindays:["Monday","Saturday"]

 }
//first way of accessing members
//  console.log(juser.email);
//  //second way of accessing members
//  console.log(juser["email"]);
//  console.log(juser["fullname"]);
//  console.log(juser[mysym]);
//overwriting the content of the object
//  juser.email="Akshayanand@micron.com"
//  console.log(juser.email);
//  //we can freez our object so that it will now not accept any changes
//  Object.freeze(juser)
//  juser.email="Akshay7777anand@micron.com"
//  console.log(juser.email);
//  //console.log(juser);

//adding function to the object
juser.greeeting=function(){
    console.log("Hello js user");
}
juser.greetingtwo=function(){
    console.log(`hello js user, ${this.name} and my age is ${this.age}`);
}

console.log(juser.greeeting());
console.log(juser.greetingtwo());

