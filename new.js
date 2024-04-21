const hrel = document.getElementById("hour");
const minsel = document.getElementById("minutes");
const secsel = document.getElementById("seconds");
const ampmel = document.getElementById("ampm");
function upDateTimes(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if (h > 12) {
       h = h - 12;
       ampm = "PM";}


       h = h < 10 ? "0" + h: h;
       m = m < 10 ? "0" + m: m;
       s = s < 10 ? "0" + s: s;
      hrel.innerText = h;
      minsel.innerText = m;
      secsel.innerText = s;
      ampmel.innerText = ampm;
      
      setTimeout(() =>{
         upDateTimes()}, 1000);



}

upDateTimes();

