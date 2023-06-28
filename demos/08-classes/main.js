class User {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.createdAt = new Date();
  }

  get name() {
    console.log("getter name");
    return this._name;
  }

  set name(name) {
    console.log("setter name");
    this._name = name;
  }
}

let myUser = new User("toto", new Date(2000, 0, 1));

console.log(myUser.dateOfBirth);

// extends pour hériter d'une classe
class Salarie extends User {
  constructor(name, dateOfBirth, salary) {
    // Appel du constructeur parent
    super(name, dateOfBirth);
    this.salary = salary;
  }

  static calculerPaye(jour, salaireDaily) {
    return jour * salaireDaily;
  }
}

salarie = new Salarie("Joe", new Date(1900, 3, 4), 2000);

console.log(salarie);
console.log(salarie.__proto__); // User {}

myUser.name = "toto";
console.log(myUser.name);
console.log(myUser._name);

console.log(Salarie.calculerPaye(20, 500));

class Chien {
  #name;

  constructor(name) {
    // permet de mettre un attribut en privé
    this.#name = name;
  }

  // méthode privée
  #aboyer() {
    return "woof woof";
  }

  sayHello() {
    console.log(this.#aboyer());
  }
}

monChien = new Chien("Rex");

console.log(monChien);

monChien.sayHello();

class FormulaireContact {
  constructor(expediteur, titre, message) {
    this.expediteur = expediteur;
    this.titre = titre;
    this.message = message;
  }

  verifierExpediteur() {
    // A implémenter
  }
}
