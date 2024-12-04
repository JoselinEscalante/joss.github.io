/*TYPING TEXT CODE*/

var sliderCounter = 0
var sliderCounter = [
    "Community Manager",
    "Facilitadora Digital",
    "Creadora de Contenido",
    "Diseñadora Digital"
];

var sliderValue = document.querySelector("#sliderValue");


function slide() {
    if (sliderCounter >= sliderContent.length) {
        sliderCounter = 0
    }

    sliderValue.innerHTML = "";
    sliderValue.classList.remove("holder-animation")
    void sliderValue.offsetWidth;
    sliderValue.classList.add("holder-animation")

    for (i = 0; i < sliderContent[sliderCounter].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderCounter[sliderCounter][i];

        if (letterDiv.innerHTML == "") {
            letterDiv.innerHTML = "&nbsp";
        }
        letterDiv.classList.add("start")
        letterDiv.classList.add("animation")
        letterDiv.style.animationDelay = i / 10 + "s";
        sliderValue.appendChild(letterDiv);
    }
    sliderCounter++;

}

slide();
setInterval(slide,2000)

/*menu*/

$('.menu-btn').click(function(){
    $('.menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

const sr = ScrollReveal({
    origin: "top",
    disance: "80px",
    duration:2000,
    reset: true
});

sr.reveal(".featured-text", {});
sr.reveal(".home-img", {delay: 200});

sr.reveal("heading", {});