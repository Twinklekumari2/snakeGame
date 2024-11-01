//here we are going to study about the extra loops that aare used int the object array 
//forEach loop are used in the array to acces the each element in the array
//basically forEach is like a .map() built-in function

let arr = [12,34,53,56,88];
arr.forEach(( value,index ) => {
    console.log("number:",value,"index:",index);
});

let ans=arr.length;  // (string wale mei length as a function hota hai...)
console.log(ans);
let brr=["twinkle","sahid","babuu"];
console.log(brr);
arr.forEach((value,index)=>{  //forEach loop array mei use karte hai
    console.log("value:",value,"index",index);
})
let obj={
    name:"twinkle",
    class:12,
    age:25,
    friend:"zubia"
};

//forIn loop is used in obejct to access all key value pair

for(let key in obj){  //for in loop object mei use karte hai (for var_name in obj_name)
    console.log(key," ",obj[key]);
}

//forOf loop is used in object array string 

let fullname = "Twinkle";
for(let val of fullname){
    console.log(val);
}

let getSum = (arr) => {
    let len = arr.length;
    let sum = 0;
    for (let index = 0 ; index < len ; index++){
         sum = sum + arr[index];
    }
    console.log(sum);
}
getSum(arr);
// console.log(totalans);