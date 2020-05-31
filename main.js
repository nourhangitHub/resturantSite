function selectElement(element){
    return document.querySelector(element);
};

let meanToggle = selectElement(".mean-toggle");
let body = selectElement("body");

meanToggle.addEventListener("click", () => {body.classList.toggle('open')});

window.sr = ScrollReveal();
sr.reveal('.animate-left',{
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right',{
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-top',{
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-bottom',{
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 300
})