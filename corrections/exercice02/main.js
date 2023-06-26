const email = "contact@teamjs.fr";
const mdp = "leLundiAuSoleil";

let userEmail = prompt("Saisir un email: ");
let userPassword = prompt("Saisir mdp: ");

if (userEmail === email) {
  if (userPassword === mdp) {
    alert("Vous êtes connecté!");
  } else {
    alert("Mot de passe invalide");
  }
} else {
  if (userPassword === mdp) {
    alert("Email invalide");
  } else {
    alert("Email et mot de passe invalides");
  }
}
