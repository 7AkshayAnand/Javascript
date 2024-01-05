function getCheese() {

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const cheese = "🍕"
            resolve(cheese)
        }, 2000)
    })

}
function makeDough(cheese) {

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const dough = cheese + "🍩"
            // console.log('here is the dough ',dough);
            resolve(dough)
            reject("BAD cheese")
        }, 2000)
    })

}
function makePizza(dough) {

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const pizza = dough + "🧀"
            // console.log('here is the pizza ',pizza);
            resolve(pizza)
        }, 2000)
    })

}

async function orderPizza() {
    try {
        const cheese = await getCheese()
        console.log("here is the cheese", cheese);
        const dough = await makeDough(cheese)
        console.log("here is the dough", dough);
        const pizza = await makePizza(dough)
        console.log("here is the pizza", pizza);
    } catch (error) {
        console.error("error occoured");
    }

}

orderPizza()

// getCheese()
// .then((cheese)=>{
//    console.log("here is the cheeese ",cheese);
//    return  makeDough(cheese)
// })
// .then((dough)=>{
//     console.log("here is the dough ",dough);
//     return makePizza(dough)
// })
// .then((pizza)=>{
//     console.log('here is my pizza',pizza);
// })
// .catch((data)=>{
//     console.log("error occoured ",data);
// })
// .finally(()=>{
//     console.log("I will execute Always");
// })