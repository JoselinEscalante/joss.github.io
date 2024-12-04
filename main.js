var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ing. Entornos Virtuales y Negocios Digitales')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Community Manager Jr | Facilitadora Digital')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Sembrando una semillita de conocimiento')
    .pauseFor(2500)
    //caracteres que se borraran
    //.deleteChars(12)
    //.typeString('<strong>conocimiento en los demás</strong>')
    //.pauseFor(2500)
    .start();