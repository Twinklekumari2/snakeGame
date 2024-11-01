//for simplicity --> object<==>dictionary ... arr<==>lists (as compare to python)
let arr=[1,"twinkle",3.4];
console.log(arr);
//array constructor (new keyword)
let brr = new Array(1,"twinkle",3.3);
console.log(typeof(arr));
console.log(typeof(brr));
//built-in functions (jo pehle se hi banaye huye hote hai) 
brr.push("sahid");  //we can add element at rightmost position
arr.shift();  //we can remove leftmost element from this built in function
arr.pop();   //we can delete element from rightmost position
console.log(arr);
console.log(brr);
arr.unshift("bachchuuuu"); //we can add element at leftmost position
console.log(arr);
brr.push("jaanu");  //add at rightmost position
brr.push(23);
brr.push(45);
//syntax ==> .splice(index start,no of elements which are going to be replaced, content which will be added)
brr.splice(2,3,"hypothetical duniya");  //we can change the content from this function
console.log(brr);
let crr=[1,3,4,5,6,8];
let anscrr =crr.map((Number)=>{  //map fuction se har ek element ko modify kar sakte hai
      return Number*3;
})
console.log(crr);
console.log(anscrr);
let ans = brr.filter((value)=>{   //array se sub-array nikal sakte hai
       if(typeof(value) == 'string'){
        return true;
       }
       else{
        return false;
       }
});
console.log(ans);
let drr=[5,6,3,12,45,67,3];
console.log(drr);