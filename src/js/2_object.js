console.log("2_object.js - Fonction qui ne retourne pas toujours une valeur");

/**
 * Nous avons ici une fonction qui prend un ID d'utilisateur et retourne un objet
 * contenant le nom de l'utilisateur.
 */
function getUser(id) {
	if (id === 1) {
		return { name: "Alice" };
	}
	return null;
}

// La fonction getUser() est appelée avec un ID d'utilisateur valide.
console.log(getUser(2)?.name ?? "Utilisateur introuvable");
