//classes ==>blueprint or planning
//object==>instances and implementation

class Human{
    //properties
    age;   //public ==> kahi bhi access kar sakte hai..
    #weight=59;   //private(#) ==> matlab ki ye bas class ander hi access ho sakta hai..
    height="160cm";

    //behaviour
    walking(){
        console.log("i am walking ",this.#weight); //current object ko access karne ke liye
    }
    running(){
        console.log("i am running");
    }

    //getetr and setter ==>class ke ander hi lagate hai taki private value ko access kar sake...
    //get and set is also a function type bs aage get & set keyword lagana hota hai
    //get is used to access or return the private value

    get fetchWeight(){
        return this.#weight;
    }

    //set is used to set or modifying the value of private value

    set modifyingWeight(val){
        this.#weight = val;
    }

    //constructor
    constructor(newAge,newWeight,newHeight){
        this.age = newAge;
        this.#weight = newWeight;  //we can access object value by this keyword..(private)
        this.height = newHeight;
    }
}

//syntax for creating object ==> let obj_name = new class_name
let obj = new Human(50,65,"180cm");   //passing value for constructor 
console.log(obj.age);
console.log(obj.fetchWeight);   //getter as weight is prvate
console.log(obj.height);

obj.walking();

let obj1 = new Human;
obj1.running();
// console.log(obj1.#weight);  //syntax error
console.log("sahid");
