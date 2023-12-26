// function sayhii(){
//     console.log('Hii bros');
// }
// function sayHloo(){
//     console.log("hlooo bros");
// }

// function add(n1,n2,callback){
//     console.log(n1+n2);
//     callback()
// }


// add(3,5,sayhii)

// add(6,7,sayHloo)

// add(7,8,()=>{
//     console.log('sending callback by defining inside argument of the function');
// })



function add(a,b){
    console.log('the sum is  : ',(a+b));
}

function  calculate(a,b,callback){
    console.log('i am simply calling to the mulitply function');
    return callback(a,b)
}

function mulitply(a,b){
    console.log("multiplicaiton of given number is "+(a*b));
}

calculate(4,5,mulitply)
// calculate(4,5,(a,b)=>{
//     console.log('i am multiplying ',(a*b));
// })

// function fun(callback){

//     setTimeout(callme,5000);
//     console.log('till then i amwokig');
// }

// function callme(){
//     console.log('i am called after 5 secnods');
// }


// fun(callme)