function isPrimeNumber(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function generateTemplate() {
  let container = document.getElementById("container");
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < 102; i++) {
    let element = document.createElement("div");
    element.classList.add("box");
    element.innerHTML = `<p>${i}</p>`;

    // Nombre premier 
    if (isPrimeNumber(i)) {
      element.classList.add("red");
      // Nombre pair
    } else if (i % 2 === 0) {
      element.classList.add("green");
      // Nombre impair
    } else {
      element.classList.add("orange");
    }

    fragment.append(element);
  }

  container.append(fragment);
}

generateTemplate();
