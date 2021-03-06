//innerText
document.querySelector('p').innerText = 'abcd' //changes text of first paragraph to abcd, can be used to display just text as user sees it.

//textContent
document.querySelector('p').textContent //displays everything, regardless of if hidden etc.

//innerHTML
document.querySelector('h1').innerHTML //displays all markup, tags etc.
document.querySelector('h1').innerHTML = <i>THIS IS A HEADING</i>  //will update the html.


//Coding Exercise 53: Pickles Exercise
document.querySelector('span').innerText = 'Disgusting';


//Attribute selection
document.querySelector('#banner').id = 'newID' //select and element and assign new id.
document.querySelector('a').href = 'newliink'
document.querySelector('a').title = 'newtitle'

//getAttribute
const firstLink = document.querySelector('a')
firstLink.href //coming from javascript
firstLink.getAttribute('href') //coming from html

//setAttribute
const firstLink = document.querySelector('a')
firstLink.setAttribute('href', 'http://www.google.com');

const input = document.querySelector('input[type="text"');
input.type = 'password' //change type to password
input.setAttribute('type', 'text'); //cahnged type back to text


//Coding Exercise 54: Manipulating Attributes Practice
const image = document.querySelector('img')
image.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
image.setAttribute('alt', 'chicken');


//Changing styles - inline styles
const h1 = document.querySelector('h1');
h1.style.fontSize = '3em' //styles are camelcase rather than with dashes in css. inline style (not great). 3em must be string


const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


window.getComputedStyle(h1).fontSize //displays computed styles for h1


//Coding Exercise 55: Magical Forest Circle Exercise
const container = document.querySelector('div');
container.style.textAlign = 'center';

const image = document.querySelector('img');
image.style.width = '150px';
image.style.borderRadius = '50%';



//Coding Exercise 56: Rainbow Text Exercise
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//YOU CODE GOES HERE:
const heading = document.querySelectorAll('span');

let i = 0;
for (let letter of heading) {
    letter.style.color = colors[i];
    i++;
}


//Manipulate classes - ClassList

const h2 = document.querySelector('h2');
h2.classList.add('purple');
h2.classList.add('border'); //add border
h2.classList.remove('border'); //remove border
h2.classList.toggle('purple'); //toggle purple on and off

//Coding Exercise 57: ClassList Practice
const list = document.querySelectorAll('li');

for (let li of list) {
    li.classList.toggle('highlight');
}


//selecting parent element. traverse upwards.
const firstBold = document.querySelector('b');
firstBold.parentElement
firstBold.parentElement.parentElement

//selecting child element/s. traverse down.
const paragraph = document.querySelector('p');
paragraph.childElementCount  //shows how many child elements there are. displayed in order as displayed in DOM
paragraph.children[0] //access child element based off index from childElementCount


//selecting sibling elements
const squareImg = document.querySelector('.square');
squareImg.nextElementSibling
squareImg.previousElementSibling



//append & appendChild
const newH3 = document.createElement('h3'); //creates new empty h3
newH3.innerText = 'I am new!' //text within h3
document.body.appendChild(newH3); //append


// Coding Exercise 58: 100 button insanity exercise
let cont = document.querySelector('div');

for (let i = 0; i < 100; i++) {
    const butt = document.createElement('button');
    butt.innerText = 'Hey!';
    cont.appendChild(butt);
}


