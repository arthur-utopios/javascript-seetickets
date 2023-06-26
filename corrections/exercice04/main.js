let a = Number(prompt("Saisir longueur de A: "));
let b = Number(prompt("Saisir longueur de B: "));

let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log(`La longueur de c est de : ${arrondir(c, 2)}cm`);

function arrondir(nombre, decimale) {
    let multiplicateur = Math.pow(10, decimale)
    return Math.round(nombre * multiplicateur) / multiplicateur;
}