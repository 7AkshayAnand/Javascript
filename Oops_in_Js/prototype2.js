let myHeros=["thor","Spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
//here we are adding this function to the Object direclty which is parent of all objects so now hitesh() is availble to all objects like array,string,funcitons etc
Object.prototype.hitesh=function(){
    console.log(`Hitesh is present in all objects`);
}
heroPower.hitesh()//Hitesh is present in all objects
myHeros.hitesh()//Hitesh is present in all objects

//here we are adding Akshay() to only Array() so only it can access this function
Array.prototype.Akshay=function(){
    console.log('Akshay says hello');
}

myHeros.Akshay()//Akshay says hello
// heroPower.Akshay()//throw error as Akshay() is only present for Array 



//inheritance also known as Prototypal inheritance

const user={
    name:"ChAII",
    gmail:"abc@gmail.com"
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    //getting the properties of TeachingSupport
    __proto__:TeachingSupport
}

//now teacher can use all properties of user
Teacher.__proto__=user
//Using Teacher object we are calling name property of user object
console.log(Teacher.name)
//we are even modifying the name property
Teacher.name="Akshay"

console.log(Teacher.name);


//Modern Syntax
//we are giving all property of Teacher to TeachingSupprt 
Object.setPrototypeOf(TeachingSupport,Teacher)