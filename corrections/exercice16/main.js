let table = document.getElementById("age-table");
console.log('table ', table);

let labelTable = table.getElementsByTagName("label");
console.log('label table ', labelTable);

let labelTable2 = document.querySelectorAll("#age-table label");
console.log('label table 2 ', labelTable2);

let firstTd = table.querySelector("td");
console.log('first td ', firstTd);

let firstTd2 = document.querySelector("#age-table td");
console.log('first td 2 ', firstTd2);

let form = document.getElementsByName("search")[0];
console.log('form ',form);

let form2 = document.querySelector("form[name=search]");
console.log('form 2 ',form2);

let firstInput = form.querySelector("input");
console.log('first input ',firstInput);

let lastInput = document.querySelector('form[name=search] > input:last-child');
console.log(lastInput)