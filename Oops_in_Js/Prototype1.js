function multipleBy5(num){
    return num*5
}

console.log(multipleBy5(4));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
//using new we have to tell that we have added new functions to createUser()
const chaii=new createUser('chaii',20)


chaii.printMe()//score is 20
chaii.increment()
chaii.printMe()//score is 21

/*
USE of new keyword

A new object is created : THe new keyword initiates the creation of new javascript object

A prototype is linked : The newly created object gets linked to the prototype property of constructor function.
This means that it has access to the properties and methods defined on the constructors prototype

The constructor is called : The construtor function is called with the specified arguments and this is bound to the newly created object.

The new object is returned: After the constructor function has been called and newly created object is returned




*/