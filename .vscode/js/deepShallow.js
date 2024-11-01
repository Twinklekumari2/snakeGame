let original = {
    name : "twinkle",
    details : {age : 25,city : "meerut"}
};

//deep copy mei nested value ko change karne ke vaad bhi original objects mei change nhi hoga.
//JSON is used to convert the object into string...

let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.details.age = 34;
console.log(deepCopy.details.age);
console.log(original.details.age);

//shallowcopy mei nested ke ander value change karne ke baad bhi original object mei change ho jayega.
//Object.assign is used to copies the value from one or more object to a target object.(used for shallow copy or to merge two objects)

let shallowCopy = Object.assign({},original);
shallowCopy.details.city = "delhi";
console.log(original.details.city);
console.log(shallowCopy.details.city);

