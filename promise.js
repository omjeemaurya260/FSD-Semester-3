
// // promises is object which is cratewd automatically this is used to handle asynchronous operations

// // let promise = new Promise((resolve, reject) => {
// //     console.log("I am a new promise");
// //    // resolve("Promise resolved");
// //     reject("Promise rejected");
// // });


// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//          //   resolve("sucessfully resolved");
//                reject("Promise rejected");
//         }, 8000);
//     });
// }
// let r= getData(10);



// const gerPromise=()=>{
//     return new Promise((resolve, reject) => {
//         console.log("I am a new promise");
//             // resolve("Promise resolved");
//             reject("Promise rejected")
//     });
// };
// let promise=gerPromise();
//     promise.then(() => {
//         console.log("Promise resolved");
//     });
// promise.catch(() => {
//         console.log("Promise rejected");
//     });



// //promise chain
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("sucessfully resolved");
//            // reject("Promise rejected");
//         }, 8000);
//     });
// }
// getData(1)
// .then((res) => {
//     return getData(2);})
// .then((res) => {
//     return getData(3);})
// .then((res) => {
//     console.log(res);
// });



// //async function 

// async function hello() {
//     console.log("Hello!!");
// }

// function Api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data fetched");
//             resolve(200);
//         }, 3000);
// });
// }
// //////awati Api() -reeor because it work only with async function
// async function getweatherData() {
//     await Api();
//     await Api();
// }
// getweatherData();


//CRUD operation using async await
const f=required("fs");
console.log("data1");
console.log("data2");
// f.writeFileSync("data.txt","Hello world");
f.writeFileSync("data.txt","Hello world 2");
//f.appendFilesync("data.txt","Hello world 3");
//f.unlinkSync("data.txt");
console.log("data3");
console.log("data4");