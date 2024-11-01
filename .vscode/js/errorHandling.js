 //error handling is the concept by which we can catch any error and replace it 
 //iin error handling ...try catch finally throw are the keyword whichwe are going to use
 // in try block we write our main code of lines ...in which it is not like that all the statement would be consist of error... there is 50-50 chances that statement is error free or having error
 
 //in catch block, we are going to replace the error part, that we write in the try block
 // finally block will run regardless of catch block run or not

 try{
    let x = 12;
    console.log(x);
 }
 catch(e){
    console.log("you are inside catch block");
    console.log("your error is here",e);
    console.log("hehehehe");
 }
 finally{
    console.log("yo you are inside finally block");
 }

 try{
   let x = 5;
   console.log(x);
   // console.log(x+y);
   function sum(){
      let y = 7;
      let z= 5;
      sum = z+y;
      console.log(sum);
   }
   sum();
 }
 
 catch(err){
   console.log("you are inside catch block");
   console.log("your error is here",err);
 }