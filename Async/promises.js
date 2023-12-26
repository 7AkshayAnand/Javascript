// creation of promise
// const promiseOne=new Promise(function(resolve,reject){
//     //do an async task
//     // db calls , cryptography realted ,  network related

//     setTimeout(function(){
//        console.log('async task is complete');
//        resolve()
//        return "done"
//     },1000)
// })


// consumption of promiseOne

// promiseOne.then(function(){
//     console.log('promise consumed');
   
// })


// creation and consumption in same line  when reslove() gets called then only the then() method will execute that is it basically depicts that
// the async work has been completed that is resolved.
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Asncy 2 resolved...");
// })

// passing something to then using resolve and recieving inside callback function of then(function(x))
// consider a situation where our timeout funciton takes data from network and then it passes to the then() using resolve()
// const promiseThree=new Promise(function(resolve,reject){
//   setTimeout(function(){

//     resolve({username:"Chaii",email:"chaii@.com"})
//   },1000)

// })

// promiseThree.then(function(user){
//   console.log(user);
// })

// const promiseFour=new Promise(function(resolve,reject){

//      setTimeout(function(){
//       let error=false
//       if(!error){
//            console.log('inside if');
//           resolve({username:"Akshay",pwd:"123"})

//       }else{
//         reject('ERROR: Something went wrong : ')
//       }
//      },1000)

// })



// const  nm=promiseFour.then((user)=>{
//    console.log(user);
//    return user.username
  
// }).then((username)=>{
//     console.log('name is ',username);
// }).catch(function(err){
//   console.log(err);
// }).finally(function(){
//   console.log("ho gya bhaii kaam tera");
// })


//working with async and await 
// const promiseFive=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let error=true
//     if(!error){
//       resolve({userName:"Akshay" , pwd:"121"})

//     }else{
//       reject('ERROR : JS went wrong')
//     }
//   },1000)
// })

// async function consumePromiseFive(){

//   try{
//     const response= await promiseFive
//     console.log(response);
//   }catch(x){
//        console.log('error is ',x);
//   }
 
// }

// consumePromiseFive()

// async function getData(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(455)

//     },3000)
//   })
// }


// async function fun(){
//  const data=await getData()
//  console.log('data is ',data);
//  console.log('after await ');
// }

// fun()

