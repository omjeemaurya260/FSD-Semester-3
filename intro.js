
//                                     // for loop,while loop,do while loop,for in,for of,for each.
// const arr=[1,2,3,4,5,6];
// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i])
// // }


// const student={
//     name:"om",
//     section:26,
//     branch:"cse",
//     year:2026
// };
// for(let element of student){
//     console.log(element);
// }
// // console.log(student);
// // for(let i=0;i<5;i++){
// //     console.log(student);
// // }


// // let i=0;
// // while(i<=5){
// //     console.log(arr[i]);
// //     i++;
// // }


// // let i=0;
// // do{
// //     console.log(arr[i]);
// //     i++;
// // }while(i<=5);


// //for in loop index of array is print.
// // for(let i in arr){
// //     console.log(i);
// //     // console.log(arr[i]);
// // }


// //in for of loop element or actual value of array is print.
// // for(let i of arr){
// //     console.log(i);
// // }


// // arr.forEach(function(i){
// //     console.log(i);
// // });



// function result(a,b){
//     return a+b;
// }
// console.log(result(2,3));


// //anonamous function
// let result=function(a,b){
//     console.log(a+b);
// }
// result(2,3);


// //arrow function
// const res=(a,b)=>{
//     console.log(a+b);
// }
// res(2,3);


// let sq=(a)=>{
//     console.log(a*a);
// }
// sq(5);


// //call back function
// function sum(a,b,callback){
//     let result=a+b;
//     callback(result);
// }
// sum(2,13,function(result){
//     console.log(result);
// });

// //example of call back function
// function greet(name){
//     console.log("Hello "+name);
// }
// function processUserInput(callback){
//     const name="Om";
//     callback(name);
// }
// processUserInput(greet);


// function calculate(a,b,callback){
//     let result=a+b;
//     callback(result);
// }
// function display(result){
//     console.log("result",result);
// }
// calculate(10,20,display);



//multiple use callback function

// function calculate(num1, num2, operationCallback) {

//     const result = operationCallback(num1, num2);
//     console.log(`The result of the operation is: ${result}`);
// }

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }
// calculate(10, 5, add);         
// calculate(10, 5, subtract);    
// calculate(10, 5, multiply);    



// // setTimeout(function,delay);
// // functioin -> code you want to execute
// // delay-> time in milisecond
// // 1000  milisecond=1 Second
// // sample example

// console.log("one");
// console.log("two");
// console.log("three");
// setTimeout(function(){
//     console.log("hello after 5 second");
// },5000);
// console.log("four");
// console.log("five");
// console.log("six");
// console.log("seven");
// setTimeout(()=>{  //anomous function
//     console.log("hello after 3 second");
// },3000);


// function welcome(){
//     console.log("Welcome to javascript");
// }
// setTimeout(welcome,2000);


// function greet(f_name,l_name){
//     console.log("Hello "+f_name + l_name );
// }
// setTimeout(greet,5000,"om"," jee maurya");



// //passing an array to a function
// function displayNumbers(numbers){
//     console.log(numbers);
// }
// let arr=[10,20,30,40,50];
// displayNumbers(arr);


//passing an object to a function
function displayStudent(student){
    console.log(student.name);
    console.log(student.age);
}
let student={
    name:"OM ",
    age:20
};
displayStudent(student);