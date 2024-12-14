//OBJECT ==> dynamic in nature

// spread clone (in this type of clone we use three dots to clone any object)

let obj ={
    name : "twinkle",
    age : 12,
    height : 23
}
let obj1 = {...obj};
obj1.age = 43;   //changing obj1 element --> tabhi dono alag alag object hai
console.log("clone",obj1);
console.log("original",obj);

//assign method ==> destination = Object.assign({},source) through this type of cloning we can add more than two objects in the final colne

let src = {
    name  : "vidhi",
    class : 12,
    subject : "PCM"
}
let src2 = {
    value : 34,
    branch : "CSE"
}
let dest = Object.assign({},src,src2);
console.log("clone",dest);
console.log("original",src);

//iteration method

let src3 = {
    age : 13,
    weight : 34

}
let dest2 = {};
for(let key in src3){
    console.log(key,src3[key]);

    let newKEY = key;
    let newVAlue = src3[key];
    //insert newKey and value in dest and create a clone
    dest2[newKEY] = newVAlue;
}
dest2 = Object.assign({},src3);
console.log(dest2);

//normal clone  --> isse clone ke badle copy hota hai...

let a = {
    name:"shona",
    age:23,
    height:122
}
a.height = 334;
let b = a;
console.log(a);
console.log(b);