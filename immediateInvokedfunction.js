//Immediately invoked function expresssion IFFE
//due to problem of global scope we use IFEE function
//always use ; after to tell that function defination ends here

(function chaii(){
    console.log('db connected');
})();



//using arrows function
(()=>{
    console.log('iffe function as arrows');
})();


//passed argument inside iffe function
((name)=>{
    console.log(`iffe function as arrows ${name}`);
})("Akshay")
