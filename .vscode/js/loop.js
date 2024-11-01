let i=1;
while(i<5){
    console.log("inside the loop");
    if(i==3){    
        i++;    //yaha pe update islie kiya taki agar condition ho toh i ki value increment ho sake
      continue;   //varna continue ki wajah se baar baar else condition skip ho jati aur saath i++ wali bhi..(infinite loop )
    }
    else{
        console.log("hi");
    }
    i++;
}
//strings
let firstname="twinkle";
let lastname ="kumari";
console.log(typeof(firstname));   //type batyaega
let name=`twinkle
kumari this 
is my 
first string:)`;
console.log(name);    //isme hamne backtick lagaya hai isme aise show ho rha hai..
console.log(typeof(name));
let bachcha=new String("jaanniii");   //String keyword..
console.log(bachcha);
console.log(typeof(bachcha));