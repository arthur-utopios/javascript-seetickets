// Déclaration d'un objet

let monObjet = new Object();

// Privilégier cette syntaxe
let mySecondObject = {};

// Déclaration des propriétés
let monChien = {
  name: "Rex",
  age: 5,
};

// Accès aux propriétés
console.log(monChien.name);

// Déclaration de méthodes
let maVoiture = {
  marque: "Renault",
  modele: "Modus",
  portes: 5,
  essence: 5.5,
  remplir(volume) {
    this.essence += volume;
  },
  rouler() {
    this.essence -= 2;
  },
};

// Utilisation de méthodes
maVoiture.rouler();

maVoiture.remplir(5);

console.log(maVoiture.essence);

let personne = {
  name: "Arthur",
  whatIsThis() {
    console.log(this);
  },
};

let personneBis = {
  name: "Arthur",
  whatIsThis: () => console.log(this)
};


// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/this
personne.whatIsThis(); // l'objet personne
personneBis.whatIsThis(); // le contexte englobant

// Fonction constructeur

function Contact(prenom, nom, telephone) {
    this.prenom = prenom;
    this.nom = nom;
    this.telephone = telephone;
}

monContact = new Contact("Arthur", "Dennetière", "0101010101");

console.log(monContact);

Contact.prototype.afficherInfo = function () {
    console.log(`prénom: ${this.prenom} | nom ${this.nom} | tel: ${this.telephone}`);
}

monContact.afficherInfo();

console.log(Contact.prototype); // Héritage par prototype
console.log(monContact.__proto__); // accès au proto par sa propriété __proto__

// Rajout d'une propriété dynamique
monContact.chips = "lays";

console.log(monContact);

let users = [
    {
        firstname: "toto",
        lastname: "tata",
        createdAt: new Date()
    }, 
    {
        firstname: "toto",
        lastname: "tata",
        createdAt: new Date()
    }, 
]

// users.forEach(user => {
//     let maString = `<h1>${user.firstname}</h1>`;
// })

// monContact.sayHello();

// appel récursif des prototypes pour trouver la méthodes
console.log(monContact.toString());

// console.dir() permet d'afficher le détail d'un objet
console.dir(Object.prototype);

console.dir(new Date());

// Parcourir les propriétés d'un objet
for(let key in monContact) {
    console.log(monContact[key]);
}

// accès aux propriétés via la notation objet[clé]
console.log(monContact["prenom"]);

monContact["     YOOOO    "] = "Hello world";

console.log(monContact["     YOOOO    "]);

// Chaînage optionnel
console.log(monContact?.bonjour);

let obj = {
  name: "toto",
  toString() {
    return this.name;
  },
  valueOf() {
    return this.name.length;
  }
}

// Surcharge des méthodes toString et valueOf héritées de Object
console.log(String(obj));

console.log(+obj);