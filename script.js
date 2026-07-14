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


/* SCROLL REVEAL (IntersectionObserver) */

const revealOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: unobserve if you only want it to animate once
            // observer.unobserve(entry.target); 
        }
    });
}, revealOptions);

document.querySelectorAll('.reveal').forEach(section => {
    observer.observe(section);
});