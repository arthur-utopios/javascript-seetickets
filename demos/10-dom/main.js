console.log(document); // DOM

// Récupérer un élément par son ID
let aPropos = document.getElementById("apropos");

console.log(aPropos);

// Sélection de l'élément par son ID
console.log(apropos);

// Sélectionner des éléments par rapport à leur balise
let sections = document.getElementsByTagName("section");

console.log(sections);

// récupérer des éléments par leur classes
let contact = document.getElementsByClassName("contact");

console.log(contact);

// Transformation d'une HTMLCollection en tableau avec le spread operator
let tab = [...sections].forEach((element) => console.log(element.innerHTML));

// Récupérer le premier élément à partir d'un sélecteur css
let firstLi = document.querySelector("navbar li");

console.log(firstLi);

// Récupérer tous les éléments à partir d'un sélecteur
let allLi = document.querySelectorAll("navbar a");

// Modifier les propriétés css de chaque element html
allLi.forEach((element) => (element.style.color = "red"));

console.log(firstLi.outerHTML);
console.log(firstLi.innerHTML);

// setTimeout(() => firstLi.innerHTML = "<p>Yoyoyo je suis rat qui fait du rap</p>", 3000);

// Récupération du premier <a>
let myAnchor = document.querySelector("a");

// Modification du texte à l'intérieur des balises
myAnchor.innerText += " - Version 2";

// Modification de l'attribut href de l'ancre
myAnchor.href = "https://www.google.com";

// Récupère la balise parent de l'ancre
console.log(myAnchor.parentNode);

console.log(myAnchor.firstChild);

// On remonte à l'élément parent puis à l'élément qui le succède
console.log(myAnchor.parentElement.nextElementSibling);

let button = document.getElementById("btn-submit");

button.addEventListener("click", function (e) {
  e.preventDefault();

  let inputs = document.getElementsByTagName("input");

  console.log(inputs);

  let div = document.createElement("div");

  [...inputs].forEach((input) => {
    console.log(input.value);
    if (input.value !== "toto@gmail.com") {
      let danger = document.createElement("p");
      danger.innerText = "mauvaise adresse mail";
      danger.style.color = "red";
      document.querySelector(".email-container").append(danger);
      setTimeout(() => danger.remove(), 3000);
      return;
    }

    div.innerHTML += `<p>${input.value}</p>`;
  });
  document.body.append(div);
});

document.querySelector(".message-container").lastElementChild.hidden = false;

// Création d'un élément texte  
let monTexte = document.createTextNode("Hello world!");

document.body.insertAdjacentHTML("beforeend", "<p> Hello world </p>");

// Accès aux classes d'une liste
button.classList.add("red");

button.classList.remove("red");

button.style.color = "red";