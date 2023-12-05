function sayhii(){
    console.log('Hii bros');
}
function sayHloo(){
    console.log("hlooo bros");
}

function add(n1,n2,callback){
    console.log(n1+n2);
    callback()
}


add(3,5,sayhii)

add(6,7,sayHloo)

add(7,8,()=>{
    console.log('sending callback by defining inside argument of the function');
})