function sayMyName(){
    console.log("twinkle kumari");
}
let timer = setTimeout(sayMyName,0);
// let firstPromise = new Promise((resolve,reject) => {
//     sayMyName();
// });

console.log("start");
let secondPromise = new Promise((resolve,reject) => {
    timer;
    resolve(1);
});
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");


// let promise1 = new Promise((resolve,reject) => {
//     let success = true;
//     if(success){
//         resolve("promise fulfilled");
//     }
//     else{
//         reject("promise rejected");
//     }
// });

// promise1.then((message) => {
//     console.log("Then ka message :" + message);
// }).catch((error) => {
//     console.log("error :" + error);
// });


// let promise2 = new Promise((resolve,reject) => {
//     timer;
// });

// promise2.then((message) => {
//     console.log("then ka pehla msg: " + message);
//     return "2nd msg";
// }).then((message) => {
//     console.log("then ka dusra msg: " + message);
//     return "3rd msg";
// }).then((message) => {
//     console.log("then ka teesra msg: " + message);
// }).catch((error) => {
//     console.log("error: " + error);
// });

//multiple promises

// let promiseA = new Promise((resolve,reject) => {
//     setTimeout(resolve,1000,"First");
// });
// let promiseB = new Promise((resolve,reject) => {
//     setTimeout(reject,2000,"Second");
// });
// let promiseC = new Promise((resolve,reject) => {
//     setTimeout(resolve,4000,"Third");
// });

// Promise.all([promiseA,promiseB,promiseC])
// .then((values) => {
//     console.log(values);
// }).catch((error) => {
//     console.log(error);
// });