let arr = [5,6,3,12,45,67,54];
let ans = arr.map((num) => {   //har ek element pe function execute karta hai
    return num%2 == 0;
});

console.log(arr);
console.log(ans);
let brr = ["sahid","twinkle","dev","vandana"];
console.log(brr);
let ansbrr = brr.map((value) => {
    return value.length;
});
console.log(ansbrr);
let anscrr = brr.map((value) => {
    return value.toUpperCase();
})
console.log(anscrr);
let ansdrr = anscrr.map((value) => {
    return value.toLowerCase();
})
console.log(ansdrr);
let anserr = brr.map((value) => {
    return "yo" + value;
});
console.log(anserr);

//filters

let arr1 = ["twinkle","sahid",4,2];
let ans1 = arr1.filter((value) => {
    if(typeof(value) != 'string'){
        return true;
    }
    else{
        return false;
    }
});

console.log(ans1);

//reduce
//in this built-in function the whole array results the output as single element 
//two new termed are introduced in Reduce :- acc and curr ::: acc is intilization and curr is current


let frr = [12,67,53,93,80,56];
let ans3 = frr.reduce((acc,curr) => {
    return acc + curr;
},0);

console.log(ans3);
console.log(frr.sort((a,b) => b-a));
let ans4 = frr.reduce((acc,curr) => {
    return acc*curr;
});

console.log(frr.indexOf(67));
console.log(ans4);
let yrr=[2,3,4,2,6];
let ansyrr=yrr.find((value)=>{
    return 1+1;
});

console.log(ansyrr);