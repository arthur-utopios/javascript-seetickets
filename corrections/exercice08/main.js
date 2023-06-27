function isPalindrome(mot) {
  let motInverse = "";

  // On concatène chaque lettre du mot en partant de la fin
  // ["k", "a", "y", "a", "k"]
  for (let start = mot.length; start >= 0; start--) {
    motInverse += mot.charAt(start);
  }

  return mot === motInverse;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("chips"));
console.log(isPalindrome("1221"));

const isPalindromeV2 = (mot) => {
    let motInverse = mot.split('').reverse().join('');
    return motInverse === mot;
}

console.log(isPalindromeV2("kayak"));
console.log(isPalindromeV2("banane"));
