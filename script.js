/* ==========================
   SHOTX CINEMATICZ v2.0
========================== */

// Background Image Slider

const slides = document.querySelectorAll(".background-slider img");

let current = 0;

function changeSlide() {

slides[current].classList.remove("active");

current++;

if(current >= slides.length){

current = 0;

}

slides[current].classList.add("active");

}

setInterval(changeSlide, 5000);


// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

const elements=document.querySelectorAll(

".card,.banner,.hero-content,.contact-box,.buttons"

);

elements.forEach((el)=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition="1s";

observer.observe(el);

});


// Button Hover Effect

const buttons=document.querySelectorAll(".btn,.big-btn");

buttons.forEach((btn)=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// Header Shadow on Scroll

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.85)";

header.style.boxShadow="0 0 20px rgba(255,215,0,.3)";

}else{

header.style.background="rgba(0,0,0,.45)";

header.style.boxShadow="none";

}

});


// Smooth Page Load

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});
