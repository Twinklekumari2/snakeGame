const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// 1 hour -- 30deg
// 1 minute -- 6 deg
// 1 second -- 6deg

function clock(){
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour.style.transform = ` rotateZ(${hr*30 + min/2}deg)`;
    minute.style.transform = `rotateZ(${min*6}deg)`;
    second.style.transform = `rotateZ(${sec*6}deg)`;
}

setInterval(clock,1000);
