console.log("6_array_types.js - Type d'objet incorrect dans un tableau");

/**
 * Nous avons ici un tableau contenant deux objets.
 */
const users = [{ name: "Alice" }, { age: 25 }];

// J'essaie d'accéder à la propriété name du deuxième objet dans le tableau users.
reponse(users[1]?.name ?? "Nom non disponible");

enonce("src/js/array_types.js - Index incorrect dans un tableau");

/**
 * Nous avons ici un tableau contenant deux noms.
 * Nous essayons d'accéder à un élément du tableau qui n'existe pas.
 */
const names = ["Alice", "Bob"];

// J'essaie d'accéder à l'élément à l'index 5 du tableau names.
console.log(names[5] ?? "Index hors limite");
