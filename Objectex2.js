//creates a singleton object
const tinderUser=new Object()

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isloggedin=false
//Object class methods
console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
//hasOwnProperty("propertyname"): checks whether objects contain this property or not
console.log(tinderUser.hasOwnProperty('isloggedin'));

//console.log(tinderUser);

//Objects inside objects
//below we have regualruser object then we have fullname object then we have userfullname object
// const regularuser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Hitesh",
//             lastname:"Choudhary"
//         }
//     }
// }

// console.log(regularuser.fullname.userfullname.firstname);



const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

//combining obj1 and obj2
//Object.assign(): it is a static method that copies all enumeble or object and finally returns it 
// const obj3=Object.assign(obj1,obj2)
// console.log(obj3);
// that is it copies all values to the first object
// console.log(obj3===obj1);

//using spread operator
const obj3={...obj1,...obj2}
console.log(obj3);
















