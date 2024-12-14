// const t1 = performance.now();

// for(let i = 1 ; i <=100 ; i++){
//     let para = document.createElement('p');
//     para.textContent = "this is para " + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();
// console.log("time taken by code1 " + (t2-t1));

// const t3 = performance.now();

// let mydiv = document.createElement('div');

// for(let i = 1 ; i <= 100 ; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is para" + i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// const t4 = performance.now();
// console.log("time taken by code1 " + (t4-t3));

const t1 = performance.now();

let fragment = document.createDocumentFragment();
for(let i = 1 ; i <=100 ; i++){
    let para = document.createElement('p');
    para.textContent = "this is para" + i;
    fragment.appendChild(para); //no reflow no repaint
}
document.body.appendChild(fragment);

const t2 = performance.now();

console.log("time taken by fragment code " + (t2-t1));