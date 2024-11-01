let a=8;
let b=9;
//arithmetic operation
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(b%a);

//logical operator
console.log(8!=7);
console.log('6'==6);  //ye(==) bas value compare karta hai..)
console.log('7'===7);   //ye (===) value ke saath sath datatype bhi match karta hai..)
let ans=(false||"twinkle");   
let result=(true && 4);
console.log(ans);
console.log(result);

//bitwise operator

console.log(5&6);    // and (0 & 1 = 0 and 1 & 1 = 1)
console.log(5|6);    //or (0 | 1 = 1 and 0 | 0 = 0)
console.log(~(0));      //NOT (at bitwise level 0 <-> 1)
console.log(4^4);   //XOR (exclusivse or) same number ho toh 0 ,alag alag ho toh 1..
console.log(12>>2);   //BITWISE RIGHT
console.log(22&(-42)); 
console.log((-18)&27);
