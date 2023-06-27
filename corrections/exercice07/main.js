// function ask(question: string, yes: function, no: function)
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);

ask("Avez-vous pris un petit déjeuner ?", alert, alert);

ask(
  "T'es tu brossé les dents ?",
  () => alert("C'est bien"),
  () => alert("c'est pas bien")
);


function sayYes() {
    alert("Yes");
}

function sayNo() {
    alert("No");
}

ask("Yes or No", sayYes, sayYes)