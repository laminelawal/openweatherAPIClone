function showDrop(){
    let dropdownlist = document.getElementById("dropdownlist");
    dropdownlist.classList.toggle("show");
}
//GENERAL UP BUTTON RULES
window.addEventListener("scroll",()=>{
    const goUpBtn = document.querySelector(".generalUpButton");
    if(this.scrollY >= 400){
        goUpBtn.style.opacity = "1";
      //  console.log("FUNZIONA")
    }else{
        goUpBtn.style.opacity = "0";
    }
})
// SCROLL TO UP
function goUp(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
///////
window.onscroll = ()=>{
    let brand = document.querySelector(".brand-scroll");
    if(this.scrollY >= 425){
        brand.classList.add("brand-animation")
    }else{
        brand.classList.remove("brand-animation")
    }
};
//HOUR DETTAILS
function updateTime(){
    var date = new Date();
    let h = (date.getHours() < 10? "0":"") + date.getHours();
    let mn = (date.getMinutes() < 10? "0":"") + date.getMinutes();
    let session = document.querySelector(".session");
    // let hourText = ;
    if(h >= 12){
        session.innerHTML = " PM";
    }else{
        session.innerHTML = " AM";
    }
    let hour = document.querySelector("span .hour");
    hour.innerHTML= `${h}:${mn}`;
    if(h > 12){
        h = h - 12;
    }
}
setInterval(updateTime, 1000)
// MOTH AND DAY DETAILS
let data = new Date();
const months = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov",  "dic"];
let moth = months[data.getMonth()];
let day = data.getDate();
let mouthday = document.getElementById("mouth-day");
mouthday.innerHTML =`${moth} ${day},`;