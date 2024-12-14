//sabse pehle target date means kon si date ki timer lagani hai 

const endDate = new Date("10 dec ,2024 12:00:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTime(){

    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    //calculating no of days hours minutes second
    const oneDaysInMillis = (24*60*60*1000);
    const oneHoursInMillis = (60*60*1000);
    const oneMinuteInMillis = (60*1000);

    const days = Math.floor((distancePending/oneDaysInMillis));
    const hours = Math.floor((distancePending%oneDaysInMillis)/oneHoursInMillis);
    const minutes = Math.floor((distancePending%oneHoursInMillis)/oneMinuteInMillis);
    const seconds = Math.floor((distancePending%oneMinuteInMillis)/(1000));

    //populate in UI

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


    const totalDistance = endDate - startDate;
    const percentage = (distanceCovered/totalDistance)*100;

    const progressBar = document.querySelector(".progress-bar");
    progressBar.style.setProperty("width",`${percentage}%`);
    // document.getElementsByClassName("progress-bar").style.width = `${percentage} + %`;

    if(distancePending < 0 ){
        clearInterval(x);
        document.getElementsByClassName("countdown")[0].innerHTML = "EXPIRED";
        document.getElementsByClassName("progress-bar")[0].style.width = "100%";

    }
},1000);