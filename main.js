var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('STEAM lover!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Wooo!!')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>So much fun</strong>')
    .pauseFor(2500)
    .start();