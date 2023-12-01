//Date

// let mydate=new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());


// console.log(typeof mydate);
// //create date by passing year month date hour minute and seconds
// let myCreatedDate=new Date(2000,1,7,7,4,12)
// console.log(myCreatedDate.toLocaleString());

//creating date using specific format as mmdddyy or yymmdd

// let dt1=new Date("2023-01-22")
// console.log(dt1.toLocaleDateString());

// let dt2=new Date("01-22-2024")
// console.log(dt2.toLocaleDateString());


//Timestamps
// let mydate=new Date("01/22/2023")
// let mytimestamp=Date.now()
// console.log(mytimestamp);
// console.log(mydate.getTime())

//change into seconds
// console.log(Math.floor(Date.now()/1000));



//Getting more information form Date Object
// let dt2=new Date()
// console.log(dt2.getDate());
// console.log(dt2.getDay());
// console.log(dt2.getFullYear());
// console.log(dt2.getHours());
// console.log(dt2.getMonth());

let dt3=new Date()
console.log(dt3.toLocaleString('default' , {
    weekday: "long"
}));





















