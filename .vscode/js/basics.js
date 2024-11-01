//to print anything in js
console.log("namaste duniya");
//let is keyword (js is dynamic language so we dont need to specify the datatype)
let number=9;
number="twinkle";
console.log(number);
//concatenation ( + )
function greet(name,wish){
    console.log("hello good morning " + name + " " + wish);
}
greet("sahid","i love you :)");
let marks=89;    //hamne value define hi nhi kiya kabhi-->undefined:)
console.log(marks);
let value=null;  //hamne null value define kiya hai
console.log(value);
let mark=49592970239874379881092389274875643892390895676294987683;   //big int
console.log(mark);
if(marks>80 && marks<=100){
    console.log("grade A");
}
else{
    console.log("grade B");
}
switch(marks){
    case 60 : console.log("marks is sixty");
    break;
    case 69 : console.log("marks is sixty-nine");
    break;
    case 75 : console.log("marks is seventy-five");
    break;
    case 89 : console.log("marks is eighty-nine");
    break;
    default : console.log("any other marks");
}
console.log(typeof(number));
//console.log(sizeof(number)); //--> js mei shyd se sare datatype ke size same hote hai
let example=Symbol("hello");
console.log(example);
let string="string";
console.log(string);

