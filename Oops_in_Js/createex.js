let Person={
    name:"Akshay",
    age:23,

    talk:function(){
        console.log('talking...');
    }
}
console.log(Person);
let akki=Object.create(Person)

akki.walk=function(){
    console.log('walking...');
}



akki.walk()
console.log(akki);