// const company = {
//     name: "ABC",
//     pay: function () {
//       console.log("Paying");
//     },
//   };
//   let intern = Object.create(company)
//   //creating intern object from company object
//   console.log(intern);

// //   intern.prototype.work=function(){
// //     console.log('working');
// //   }
  
//   console.log( intern.company);

  var personPrototype = {
    greet: function() {
      console.log("Hello, I'm " + this.name);
    }
  };
  
  // Create a new object 'john' with 'personPrototype' as its prototype
    
  var john= Object.create(personPrototype, {
    name: { value: "Jane" },
    age: { value: 25 }
  });

  john.greet()// Hello I'm Jane