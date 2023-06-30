let button = document.getElementById("btn");
let text = document.getElementById("text");
let textBis = document.getElementById("text-bis");

// element.addEventListener(typeEvenement, fonction(evenement));
button.addEventListener('click', () => text.hidden = !text.hidden);

button.addEventListener('click', () => textBis.classList.toggle('invisible'));