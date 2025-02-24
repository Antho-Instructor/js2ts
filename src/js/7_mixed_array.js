console.log("7_mixed_array.js - Mélange de types dans un tableau");

/**
 * Nous avons ici un tableau contenant des nombres et des chaînes de caractères.
 */
const numbers = [1, "two", 3];

// J'essaie de doubler chaque nombre dans le tableau numbers.
// Si un élément n'est pas un nombre, j'affiche "Erreur".
console.log(numbers.map((n) => (typeof n === "number" ? n * 2 : "Erreur")));
