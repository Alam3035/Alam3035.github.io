$(window).scroll(function() {
    if ($(window).scrollTop() >= 400) {
        $('.navbar').css('background', '#5398c6');
    } else {
        $('.navbar').css('background', 'transparent');
    }
});

var scroll = new SmoothScroll('a[href*="#"]');

window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 1000,
    origin: 'top',
    distance: '200px'
});
sr.reveal('.Content', {
    duration: 1000,
    origin: 'bottom',
    distance: '200px'
});
sr.reveal('.Content-3', {
    duration: 1000,
    origin: 'top',
    distance: '200px'
});
sr.reveal('.introduct', {
    duration: 1000,
    origin: 'top',
    distance: '200px'
});
sr.reveal('.Coming-soon', {
    duration: 1500,
    origin: 'bottom',
    distance: '200px'
});
sr.reveal('.para-graph', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px'
});
sr.reveal('.row', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px'
});
sr.reveal('.main-title', {
    duration: 1500,
    origin: 'top',
    distance: '200px'
});
sr.reveal('.para', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px'
});