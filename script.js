'use script';

var red = document.querySelector('.orange');
var yellow = document.querySelector('.amber');
var green = document.querySelector('.lime');
var blue = document.querySelector('.blue');
var image = document.querySelector('.image__change');

red.addEventListener('click', function(){
    image.src = './img/red.png';
});

yellow.addEventListener('click', function(){
    image.src = './img/yellow.png';
});

green.addEventListener('click', function(){
    image.src = './img/green.png';
});

blue.addEventListener('click', function(){
    image.src = './img/blue.png';
});