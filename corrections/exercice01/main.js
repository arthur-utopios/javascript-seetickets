let copies = Number(prompt("Saisir un nombre de copies: "));

let formater = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

if (copies > 0 && copies <= 10) {
  console.log(`Le prix est de: ${formater.format(copies * 0.5)}`);
} else if (copies > 10 && copies <= 20) {
  console.log(`Le prix est de: ${formater.format(copies * 0.4)}`);
} else if (copies > 20) {
  console.log(`Le prix est de: ${formater.format(copies * 0.3)}`);
} else {
  console.log("Saisie invalide");
}
