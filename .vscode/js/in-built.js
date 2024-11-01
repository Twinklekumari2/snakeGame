//math in built function

console.log("twinkle sahid");
console.log(Math.max(23,45,32,67,54,78,9,8));

console.log(Math.min(23,45,32,67,54,78,9,4));

console.log(Math.pow(2,4));

console.log(Math.abs(-87));

console.log(Math.sqrt(8638));

console.log(Math.floor(4.3));

console.log(Math.ceil(9.8));

console.log(Math.sin(3445));

console.log(Math.tan(987));

console.log(Math.random());
console.log(Math.trunc(-34.876));
console.log(Math.sqrt(82378));


//date in built function

let current = new Date();  //constructor
console.log(current);

let date = new Date('april 02 2006 07:00'); 
console.log(date);

//month is zero based indexing like jan->0 , feb->1 ,mar->2 ....,dec->11

let newDate = new Date(2006 , 3 , 2, 8);  //year month(n-1) date
console.log(newDate);

console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getDay());

console.log(newDate.getTime());
console.log(newDate.setMonth(5));