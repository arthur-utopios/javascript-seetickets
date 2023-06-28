setTimeout(() => console.log("Yo"), 2000);

console.log("Toto");

// Fonction renvoie une promesse
function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.head.append(script);
    script.onload = () => resolve({ fichier: src, message: "ok" });
    script.onerror = () => reject(new Error("Echec de chargement de " + src));
  });
}
const promesse1 = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/script.js/2.0.2/script.min.js"
);

promesse1
  .then((res) => res.message)
  .then((ok) => console.log(ok.length))
  .catch((err) => console.log(err.message))
  .finally(() => console.log("Opération terminée"));

fetch("https://jsonplaceholder.typicode.com/todos/5000")
.then(response => response.json())
.then(todo => console.log(todo.id))
.catch(er => console.log(er))

// Fonction asynchrone
async function getTodos() {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos");
    let todos = result.json()
    return todos;
}

let myArray = getTodos();

myArray.then((arr) => arr.forEach(el => console.log(el)));