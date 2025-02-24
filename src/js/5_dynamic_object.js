console.log("5_dynamic_object.js - Objet dynamique mal géré");

/**
 * Nous avons ici un objet représentant un utilisateur.
 * L'objet est vide au départ et on lui ajoute une propriété name.
 */
const user = {};
user.name = "Bob";

// J'essaie d'accéder à la propriété name de l'objet user.
console.log(user.name);
