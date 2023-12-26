// handling fetch using async and await
// async function getAllUsers(){
//     try {
//         const response = fetch("https://api.github.com/users/hiteshchoudhary")
//         //const data=await response.json()

//         console.log(data);
//         console.log('wait for me nam re');
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers()

//handling fetch using then and catch
fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    // console.log(response);
     return response.json()
})
.then((data)=>{
     console.log(data);
})
.catch((error)=>{
    console.log(error);
})