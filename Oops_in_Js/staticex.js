class User{
    constructor(username){
        this.username=username
    }
    
    logMe(){
        console.log(`UserName : ${this.username}`);
    }
   static createId(){
        return `123`
    }
}

const hitesh=new User("Hitesh")
console.log(User.createId());//123

// class Teacher extends User{
//     constructor(username,email){
//         super(username)
//         this.email=email
//     }
// }

// const t1=new Teacher("Akshay","akki@gmail.com")
// console.log(t1.logMe());

// console.log(User.createId())