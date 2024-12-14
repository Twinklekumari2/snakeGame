// class College{
//     fees = "1.2lakh";
//     duration = "6 month";
//     semester = 1;
//     attendance = "75%";


//     friends(){
//         console.log("you can make peer group");
//     }
//     academics(){
//         console.log("it is important for your CGPA");
//     }
// }

// let clg = new College;
// console.log(clg.duration);
// console.log(clg.attendance);
// console.log(clg.friends());


// class School{
//     #percentage = "99.8%";
//     attendance = "100%";
//     subject = 6;

//     //to access private property we use getter
//     get fetchPercentage(){
//         return this.#percentage;
//     }

//     set setPercentage(val){
//         this.#percentage = val;
//     }
// }

// let schl = new School();
// console.log(schl.fetchPercentage);


// class Rectangle{

//     constructor(width,height){
//         this._height = height;
//         this._width = width;
//     }

//     set width(val){
//         if(val>0){
//             this._width = val;
//         }
//         else{
//             console.log("width must be positive");
//         }
//     }
//     set height(val){
//         if(val>0){
//             this._height = val;
//         }
//         else{
//             console.log("height must be positive");
//         }
//     }
    
//     // get fetchWidth(){
//     //     return this._width;
//     // }
//     // get fetchHeight(){
//     //     return this._height;
//     // }

//     get area(){
//         return this._width * this._height;
//     }
// }

// const rect = new Rectangle(5,1);
// rect.width = 2;
// console.log(rect.area);


class Circle {
    constructor(radius){
        this._radius = radius;
    }

    get radius(){
        return this._radius;
    }

    set radius(value){
        if(value>0){
            this._radius = value;
        }
        else{
            console.log("radius must be positive");
        }   
    }
    get area(){
        return (3.14 * this._radius * this._radius);
    }
}

let circ = new Circle(5);
circ.radius = -9;
console.log(circ.area);
