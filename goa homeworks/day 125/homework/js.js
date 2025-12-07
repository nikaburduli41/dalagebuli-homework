//1//
const p = document.createElement('p');
const textNode = document.createTextNode('This is added by JavaScript');
p.appendChild(textNode);
document.body.appendChild(p);
//2//
const h2 = document.createElement('h2');
h2.textContent = 'Welcome!';
const targetDiv = document.getElementById('targetDiv');
targetDiv.appendChild(h2);
//4//
const buttonElement = document.createElement('button');
buttonElement.textContent = 'Click Me';
targetDiv.appendChild(buttonElement);

