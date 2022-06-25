// Promises
// the promise is object represents the eventual competion (or failure) of an asynchronous operation and its resulting vaule.

// let promise1 = new Promise((resolve,reject)=>{

//     resolve("tomarrow we will discuss async and await");
//     // reject("can't do that not clear promises");
// });
// console.log(promise1);
// console.log(typeof promise1)
// promise1.then(
//     (posRes)=>{
//         console.log(posRes)
//     },
//     (errRes)=>{
//         console.log(errRes)
//     });

// let stocks ={
//     Fruits : ["banana","grapes","apple","strawberry"],
//     liquid : ["water","coco cola"],
//     holder : ["cone", "cup","sticks"],
//     toppings :["chocolate","peanuts"]
// };
// let is_shop_open=true;
// let order = ( time, work ) => {

//     return new Promise( ( resolve, reject )=>{
  
//       if( is_shop_open ){
  
//         setTimeout(()=>{
//           resolve( work() )
//          }, time)
  
//       }
  
//       else{
//         reject( console.log("Our shop is closed") )
//       }
  
//     })
//   }

//   order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// .then(()=>{
//   return order(0000,()=>console.log('production has started'))
// })
// .then(()=>{
//   return order(2000, ()=>console.log("Fruit has been chopped"))
// })

// .then(()=>{
//   return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
// })

// .then(()=>{
//   return order(1000, ()=>console.log("start the machine"))
// })

// .then(()=>{
//   return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
// })

// .then(()=>{
//   return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
// })

// .then(()=>{
//   return order(2000, ()=>console.log("Serve Ice Cream"))
// })



// let nimit = ( time, done ) => {
//       return new Promise( ( resolve, reject )=>{
//       setTimeout(()=>{resolve(done())},time)
// })
//     }
//   nimit(2000,()=>console.log(`1`))
//   .then(()=> nimit(2000,()=>console.log("2")))
//   .then(()=> nimit(1500,()=>{console.log("3")}))
//   .then(()=> nimit(1000,()=>{console.log("4")}))
//   .then(()=> nimit(2000,()=>console.log("5")));








