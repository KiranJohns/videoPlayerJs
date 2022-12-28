const btnE1=document.querySelector(".btn")
const closeIconE1=document.querySelector(".close-icon")
const trailerE1=document.querySelector(".trailer-cont")
const videoE1=document.querySelector("video")

btnE1.addEventListener("click",()=>{
    trailerE1.classList.remove("active");
})

closeIconE1.addEventListener("click",()=>{
    trailerE1.classList.add("active");
    videoE1.pause();
    videoE1.currentTime=0;
})