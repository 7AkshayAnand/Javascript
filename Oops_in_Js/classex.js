//ES6

// class User{
//     constructor(username,email,pwd){
//        this.username=username,
//        this.email=email,
//        this.pwd=pwd
//     }

//     encryptPassword(){
//         return `${this.pwd}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1=new User("Akshay","akki@gmail.com","123")

// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());

//Behind the Scene :  This is same work using Function constructor

// function User(username,email,pwd){
//        this.username=username,
//        this.email=email,
//        this.pwd=pwd
// }

// User.prototype.encryptPassword=function(){
//     return `${this.pwd}abc`
// }
// User.prototype.changeUserName=function(){
//     return `${this.username.toUpperCase()}`
// }

// const user2=new User("Anand","akki@gmail.com","345")

// console.log(user2.encryptPassword());
// console.log(user2.changeUserName());

function User(u1,e1,p1){
    console.log(this);
    this.username=u1,
    this.email=e1,
    this.pwd=p1
    console.log(this);
}
const user=new User("AKshay","acv","23")
console.log(user);