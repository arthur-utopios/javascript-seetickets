console.log(window.jQuery("div")); // égal à $("div")

// Ajout d'une propriété css
$("h1").css("color", "red");

// Récupération de la propriété css
console.log($("h1").css("color"));

// Vérifie si l'élément contient les enfants spécifiés
$("ul").has("li").css("font-family", "sans-serif");

// Filtre l'élément
$("ul").filter("#text-only").css("background", "red");

$("span").first().css("background", "yellow");
$("span").eq(1).css("background", "orange");
$("span").last().css("background", "red");

// Enchaîner les méthodes
$("div").find("span").eq(1).css("font-weight", "bold");

// Modification du HTML de l'élément
$("ul > li").first().html("<p>wtf</p>");

// Modification du texte de l'élément
$("ul > li").last().text("<p>incroyable</p>");

// Ajouter un enfant à la fin d'un élément HTML
$("<li>toto</li>").appendTo("ul");

// Ajoute un élément avant l'élément spécifié
$("<h1>Pré-titre</h1>").insertBefore("h1");

$("<a/>", {
  html: "This is a <strong>new</strong> link",
  class: "new",
  href: "foo.html",
}).appendTo("body");

$("<a/>")
  .addClass("new")
  .attr("href", "foo.html")
  .html("This is a new <strong>new</strong> link")
  .appendTo("body");

$("#span").parent().css({
  background: "rgb(10, 100, 100)",
  writingMode: "vertical-rl",
});

let maChaine = "        j'adore l'espace                ";

$.trim(maChaine);

console.log($.trim(maChaine));

$("ul:has(p)").on("click", function () {
  $(this).hide(500);
});

// Asynchrone en JQuery
$.ajax({
    url: 'https://cataas.com/cat?json=true',
    method: 'GET',
    dataType: 'json',
}).done((chat) => {
    let imagechat = document.createElement('img');
    imagechat.src = `https://cataas.com/${chat.url}`;
    imagechat.height = '300';
    document.body.append(imagechat);
}).fail((e) => {
    console.log(e)
}).always(() => {
    console.log("fin")
})

// Asynchrone en JS
fetch('https://cataas.com/cat?json=true')
.then((result) => result.json())
.then(chat => {
    let imagechat = document.createElement('img');
    imagechat.src = `https://cataas.com/${chat.url}`;
    imagechat.height = '300';
    document.body.append(imagechat);
})
.catch((e) => console.log(e))
.finally(() => console.log("fin"))