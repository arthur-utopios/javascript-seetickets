let compteur = {
  valeur: 0,
  incrementer() {
    this.valeur++;
    this.afficherValeur();
  },
  decrementer() {
    this.valeur--;
    this.afficherValeur();
  },
  afficherValeur() {
    document.getElementById("compteur").innerText = this.valeur;
  },
};

moins.addEventListener('click', function() {
    compteur.decrementer();
});

plus.addEventListener('click', function() {
    compteur.incrementer();
});