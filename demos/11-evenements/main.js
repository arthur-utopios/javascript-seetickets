let myBox = document.querySelector(".box");

myBox.addEventListener('mouseover', function(e) {
    e.preventDefault();
    myBox.classList.add("is-hover");
});

myBox.addEventListener('mouseout', function(e) {
    e.preventDefault();
    myBox.classList.remove("is-hover");
});