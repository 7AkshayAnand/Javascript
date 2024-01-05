class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,pwd){
        super(username)
        this.email=email,
        this.pwd=pwd
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user1=new Teacher("Akshay","akki@gmail.com","123")
user1.logMe()
user1.addCourse()