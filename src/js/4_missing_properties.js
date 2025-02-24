console.log("4_missing_properties.js - Accès à une propriété inexistante");

/**
 * Nous avons ici un objet représentant une personne.
 */
const person = { name: "John", age: 30 };

// J'essaie d'accéder à la propriété email de l'objet person.
console.log(person.email ?? "Email non disponible");
