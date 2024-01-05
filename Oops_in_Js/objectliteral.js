//object literals
const user={
    username:"Akshay",
    logincount:4,
    getDetails  : function(){
        console.log(this.username);
        console.log(this.logincount);
        console.log(this);

    },

    //creating function without using function keyword
    getName(){
        console.log(this.username);
    }
}
const user1={
    username:"Akshay",
    logincount:4,
    //creating function without using function keyword
    getName(){
        console.log(this.username);
    },

    getloginCount(){
        console.log(this.logincount);
    }
}


user1.getName()//Akshay
user1.getloginCount()//4

