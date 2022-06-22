// synchronous 
// console.log("nimit")
// console.log("nishchay")
// console.log("vivek")


//asynchronous

// console.log("nimit")

// setTimeout(()=>{
//     console.log("nishchay");
// },2000);

// console.log("vivek")









// Call back hell


// let stocks ={
//     fruits : ["banana","grapes","apple","strawberry"],
//     liquid : ["water","coco cola"],
//     holder : ["cone", "cup","sticks"],
//     toppings :["chocolate","peanuts"]
// };
// let order = (fruit_name, call_production) => {
//       setTimeout(function () {
//         console.log(`${stocks.fruits[fruit_name]} was selected`);
//         call_production();
//       }, 2000);
//     };
// let production=()=>{
//     setTimeout(() => {
//         console.log("production has started");
//         setTimeout(() => {
//                 console.log("the fruits has been choped");
//             setTimeout(() => {
//                     console.log("Add ice cream and coco cola");
//                 setTimeout(() => {
//                         console.log("production has started");
//                     setTimeout(() => {
//                             console.log("Machine has been Boommm");
//                         setTimeout(() => {
//                                 console.log(` container  ${stocks.holder[0]} was selected`);
//                         },2000);
//                     },3000);
//                 },4330);
//             },3040);
//         },7000);
//     },1000);
// };

// order(0,production)
