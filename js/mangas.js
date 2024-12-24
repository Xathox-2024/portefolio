// Fonction pour générer le HTML de chaque manga
function mangas(element) {
  return `
        <div class="cadre">
          <h2 class="titre">${element.title}</h2>
          <p class="author">Auteur : ${element.author}</p>
          <p class="date">Date de publication : ${element.publication_date}</p>
          <p class="genre">Genre : ${element.genre}</p>
          <img class="imgs" src="${element.image_url}" alt="Image du manga">
          <a href="${element.info_url}" target="_blank" id="button-container"><button id="button-container" class="but">Sélectionner</button></a>
        </div>
      `;
}

// Fonction pour afficher les mangas
function displayMangas(mangasList) {
  const main = document.querySelector("main");
  main.innerHTML = '';  // Réinitialise l'affichage avant de recharger les mangas filtrés
  mangasList.forEach((element) => {
    main.innerHTML += mangas(element);
  });
}

// Fonction pour filtrer les mangas en fonction de la recherche
function filterMangas() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  // Filtrage des mangas qui correspondent au titre recherché
  const filteredMangas = window.mangasData.filter(manga => manga.title.toLowerCase().includes(searchInput));
  displayMangas(filteredMangas);  // Affiche les mangas filtrés
}

// Fonction pour récupérer les mangas depuis l'API et afficher la liste
async function fetchMangas() {
  try {
    const response = await fetch("http://localhost:3000/mangas");
    const data = await response.json();

    data.sort((a, z) => a.title.localeCompare(z.title)); // Trie alphabétique

    console.log(data);

    window.mangasData = data;  // Sauvegarde les données globalement pour le filtrage
    displayMangas(data);  // Affiche la liste complète au départ
  } catch (error) {
    console.error("Erreur lors du chargement des données :", error);
  }
}

// Appel de la fonction pour récupérer et afficher les mangas
fetchMangas();



// il faut faire la commande =>  npx json-server db.json


