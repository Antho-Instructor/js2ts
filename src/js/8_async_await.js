console.log("8_async_await.js - Mauvaise gestion des async/await");

/**
 * Nous avons ici une fonction asynchrone qui retourne une chaîne de caractères.
 */
async function getData() {
	return "Hello";
}

// La fonction getData() est appelée.
getData().then((data) => console.log(data.toUpperCase()));
