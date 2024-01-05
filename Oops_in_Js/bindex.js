//bind method
let printName= function(hometown,State){
    console.log(this.firstname+" "+this.Lastname+" ,"+hometown+" ,"+State);
}
let name={
    firstname:"Akshay",
    Lastname:"Anand"
    
}
let printMyname=printName.bind(name,"Bihar","Purnea")
//bind will create a copy of printName() and bind this to name object and return a function, and this returned function can be called back later

printMyname()//Akshay Anand ,Bihar ,Purnea