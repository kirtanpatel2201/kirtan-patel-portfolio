const text = "Specializing in secure software systems, cryptography, and resilient architecture design.";

const typingElement = document.querySelector(".typing-text");

let index = 0;

function typeText(){
if(index < text.length){
typingElement.textContent += text.charAt(index);
index++;
setTimeout(typeText,10);
}
}

window.addEventListener("load",typeText);


/* SCROLL REVEAL */

function revealSections(){

const reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;

let revealPoint=120;

if(elementTop < windowHeight - revealPoint){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll",revealSections);