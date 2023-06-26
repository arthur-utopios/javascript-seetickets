const TVA = Number(prompt("Saisir tva en % : ")) / 100;
let prixHT = Number(prompt("Saisir le prix de l'article: "));
let prixTTC = prixHT * (1 + TVA);

console.log(`Montant TVA: ${prixHT * TVA}€ Prix HT: ${prixHT}€ Prix TTC: ${prixTTC}€`)