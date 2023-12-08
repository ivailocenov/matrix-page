const text = "flickering";


const fadeSlider = document.getElementById("fade");
const flickerDuration = document.getElementById("flicker-duration");


const container = document.getElementById("container");
function createP(text) {
    for (let i = 0; i < text.length; i++) {
        const p = document.createElement("p");
        p.classList.add("flicker");
        container.appendChild(p);
        p.innerHTML = text[i];
    }
}
createP(text);


let temp = 0;
const myInterval = setInterval(() => {

    const p = document.getElementsByClassName("flicker");
    // const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    const randomNumber = Math.floor(Math.random() * (p.length));

    for (let i = 0; i < p.length; i++) {
        p[i].style.transitionDuration = fadeSlider.value + "s";
    }

    temp = temp + 1;

    if (!p[randomNumber].classList.contains("on") && temp < flickerDuration.value) {
        p[randomNumber].classList.add("on");
    } else {
        if (temp < flickerDuration.value) {
            p[randomNumber].classList.remove("on");
            p[randomNumber].classList.remove("white");
        } else {
            p[randomNumber].classList.add("white");
            p[randomNumber].classList.remove("on");
        }
    }
    if (temp == flickerDuration + 500) {
        clearInterval(myInterval);
    }
    ;
}, 20);