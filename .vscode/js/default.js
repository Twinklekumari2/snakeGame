//default parameter ==> in any case we forgot to pass the parameter inside the function call then the function use default value that we inserted during the creating the function ...
//also if we dont pass the default value also the parameters inside the function call then the undefined keyword comes as the output

function countNum(number = 1){      // = ke baad default value
    console.log("yo counting: ",number);
}
countNum();  //yaha pe value pass nhi ki hamne
countNum(9);
function sayMagicalWords(name = "sahid",nickname = "janni"){
    console.log("i love you",name,(nickname));
}
sayMagicalWords();

//object as default value

function counting(value = {age:15,height:25}){
    console.log("hello jee",value);
    
}
counting();

// array as default value
function count1(value = [12,34,54,98]){
    console.log("yo yo",value);
}
count1();

// default as null and undefined
//in case of null , null value will be printed , as null value is stored in the value inside the function 
//but in case of undefined , default value will be used as undefined is not store inside the value

function solve( value="sahid"){
    console.log("hello jee ->",value);
}
solve(null);   //iss case mei value ke ander null value store ho jayegi
solve(undefined);   //iss case mei undefined store nhi hoge value mei , isiliye default value use hui..


// default as function

function greet( value = "sahid" ){
    console.log("hello world",value);
}
function counting( value = greet() ){
    console.log("yo counting");
}
counting();

