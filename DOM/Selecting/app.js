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



//querySelector
document.querySelector('h1'); //Finds first h1 element

document.querySelector('#red'); //Finds first element with ID of red

document.querySelector('.big'); //Finds first elemnent with class of big

//querySelectorAll
const links = document.querySelectorAll('p a'); //descendant selector. All anchor tags within paragraphs.

for (let link of links) {
    console.log(link.href)
}

//Coding Exercise 52: querySelector Practice
const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelector('#scales');