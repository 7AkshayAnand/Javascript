const course={
   coursename:"js in hindi",
   price:"999",
   Teacher:"Hitesh"

}

console.log(course.Teacher);

//new syntax of accessing the item of Object
//it is basically called Object Destructuring

const {coursename,price,Teacher}=course
console.log(coursename,price,Teacher);

//API 
// {
//     "name":"Akshay",
//     "cname":"Jsin hindi",
//     "price":555
// }


