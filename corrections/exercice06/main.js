for(let cpt = 1; cpt < 46; cpt++) {
    if (cpt % 3 === 0 && cpt % 5 === 0) {
        console.log("FizzBuzz");
    } else if (cpt % 3 === 0) {
        console.log("Fizz");
    } else if (cpt % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(cpt);
    }
}