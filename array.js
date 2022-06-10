/*
    array
    *****
        collection of "elements" called as "array"
        index starts from "0"
        []
*/
// let arr = [10, 20, "thirty", 40, " 50", 60, "70", 80, 90, 100];

// console.log(typeof arr);
// console.log(arr);
// console.log(arr["0"]);
// console.log(arr[3.0]);
// console.log(arr[3.1]);
// arr[3.5] = 45;
// arr["A"] = 110;

// console.log(arr[3.5]);
// console.log(arr["A"]);
// console.log(arr[2][0]);
// console.log(arr.length);

// let arr = [10, 20, 30, 40, 50];
// console.log(arr[0], arr[1], arr[2], arr[3], arr[4]);
// console.log(arr[-1]);
// console.log(arr[5], arr[100]);

//length
// The length property of an object which is an instance of type Array sets or returns the number of elements in that array.

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.length);
// let arr1 = [10, 20]; //
// arr1[2] = 30;
// console.log(arr1.length);
// arr1[100] = 1000;
// console.log(arr1.length);

// let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(arr2.length);
// arr2.length = 5;
// console.log(arr2[0], arr2[4], arr2[5], arr2[9]);*
//delete
//delete the particular

// If you want an array element to exist but have an undefined value, use the undefined value instead of the delete operator.
// let b;

// let arr = [10, 20, 30, 40, 50];
// arr.length = 10;
// arr[2] = undefined;
// console.log(arr);
// console.log(arr[7]);

// console.log(arr.length);
// delete arr[4];
// console.log(arr.length);
// delete arr[0];
// arr[7] = undefined;
// arr[4] = undefined;
// delete arr[7];
// console.log(arr);
// console.log(arr[4] );
// console.log(arr[0] );
// console.log(arr[8]);
// console.log(arr);

//push()
//pop()
//unshift()
//shift()
// let arr = [20, 30, 40];
// console.log(arr);
// arr.push(50);
// console.log(arr);
// arr.unshift(10);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);



// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//splice()


// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr.splice(-4, 3, 11, 12, 13);
// arr.splice(4, 3);///start from 4 and delete 3 element
// console.log(arr);
// arr.splice(-2);
// arr.splice(6, 1);
// console.log(arr);
// arr.splice(0, 1);
// console.log(arr);
// arr.splice(1, 1);
// console.log(arr);
// arr.splice(2, 3, 11, 12, 13);
// console.log(arr);
// arr.splice(1, 0, 30);
// console.log(arr);
// arr.splice(0, 1, 11, 22);
// console.log(arr);
// arr.splice(9, 0, 100);
// console.log(arr);
// arr.splice(1);
// console.log(arr.splice(1));
// console.log(arr);





//slice()

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified.

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// console.log(arr.slice(3));
// console.log(arr.slice(-2));
// console.log(arr.slice(3, -2));
// console.log(arr.slice(3, -9));
// console.log(arr.slice(2, -4));
// console.log(arr.slice(1, 5));
// console.log(arr.slice(-10, 8));
// console.log( arr.slice(-2) );
// console.log(arr);






//Deep copying vs Shallow copying

// whats is copy?
// Making a copy means that you initiate a new variable with the same value.

//  Deep copying
// a deep copy means that att of the value of the new variable are copied and disconnected from original

// shallow copying
// A shallow copy means that certain (sub-) value are still connected with the original value.



//spread operater
// arr1=[100,200,300,400]
// arr2=[500,600,700,800]
// console.log(...arr1,...arr2)
// console.log(arr1,arr2)
// console.log(...arr1,arr2)
// console.log(arr1,...arr2)
// console.log(arr1+arr2)


// arr1=[100,200,300,400]
// xerox=[...arr1]

// console.log(...xerox)
// console.log(...arr1,...xerox)
// arr1.push(500)
// xerox.push(600)
// console.log(...arr1)
// console.log(...xerox)
// xerox=[...arr1]
// arr1.pop()
// arr1.shift()
// arr1.unshift(40)
// xerox.unshift(10)
// console.log(...arr1)
// console.log(...xerox)








// function fun_one()
// {
//     console.log("hello")
// }
// function fun_two()
// {
//     let arr=[];
//     for (let i=0;i<5;i++)
//     {
//         arr.push(fun_one())
//     }
// }
// // console.log(fun_one)
// fun_two()
// //fun_one()
// console.log(fun_one())




// function fun_one(arg1,arg2,arg3)
// {
//     console.log(arg1(),arg2(),arg3())
// }
// function fun_two(){
//     return "hello";
// }
// function fun_three(){
//     return "hello-1";
// }
// function fun_four(){
//     return "hello-2";
// }
// fun_one(fun_two,fun_three,fun_four)








// Arrow function

// let fun_one = ()=> "welcome to arrow function";

// console.log(fun_one())






// let fun_one = ()=> {
//     return ()=> {
//         return "hello";
//     };
// };

// console.log(fun_one()())



// Rest function
// it is same as spread function
// its use 1 time in function



// function fun_one (...arg1)
// {
//     console.log("arg1")
// }
// fun_one()

//IIFE Function

// ((arg1,arg2,arg3)=>{
//     console.log(arg1,arg2,arg3)
// })("Nimit","nishchay","Undefined")




// ((arg1,arg2,arg3)=>{
//     console.log(arg1,arg2,arg3)
// })(
//     (()=>{
//         return "#Nimit";
//     })(),
//     (()=>{
//         return "#Nishchay";
//     })(),
//     (()=>{
//         return "#GETREADY";
//     })()
// );















