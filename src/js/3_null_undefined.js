console.log("3_null_undefined.js - Fonction qui retourne null sans l'indiquer");

/**
 * Nous avons ici une fonction qui ne retourne pas toujours une valeur.
 */
function findData() {
	return null;
}

// La fonction findData() est appelée.
console.log(findData()?.value ?? "Aucune valeur trouvée");
