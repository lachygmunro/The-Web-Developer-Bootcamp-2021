//getElementById

const banner = document.getElementById('banner');
//console.dir('banner');

const toc = document.getElementById('toc');
//console.dir('toc');

//Coding Exercise 51: getElementById Practice
const image = document.getElementById('unicorn');
const heading = document.getElementById('mainheading');



//getElementsByTagName
const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


//getElementsByClassName
const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}



const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}