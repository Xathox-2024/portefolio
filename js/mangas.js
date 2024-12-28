// Fonction pour générer le HTML de chaque manga avec un bouton "Supprimer"
function mangas(element) {
  return `
        <div class="cadre" id="manga-${element.id}">
          <h2 class="titre">${element.title}</h2>
          <p class="author">Auteur : ${element.author}</p>
          <p class="date">Date de publication : ${element.publication_date}</p>
          <p class="genre">Genre : ${element.genre}</p>
          <img class="imgs" src="${element.image_url}" alt="Image du manga">
          <a href="${element.info_url}" target="_blank" id="button-container">
            <button class="but">Sélectionner</button>
          </a>
          <button class="delete-button" onclick="deleteManga('${element.id}')">Supprimer</button>
          <a href="../modif/modif.html?id=${element.id}">
            <button class="edit-button">Modifier</button>
          </a>
        </div>
      `;
}

// Fonction pour supprimer un manga par son ID
async function deleteManga(id) {
  // Demande de confirmation avant suppression
  const isConfirmed = window.confirm(
    "Êtes-vous sûr de vouloir supprimer ce manga ?"
  );

  if (isConfirmed) {
    try {
      // Envoie la requête pour supprimer le manga
      const response = await fetch(`http://localhost:3000/mangas/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Supprime l'élément du DOM après la suppression du serveur
        const mangaElement = document.getElementById(`manga-${id}`);
        mangaElement.remove();

        // Optionnel : Si vous voulez mettre à jour la liste après suppression
        window.mangasData = window.mangasData.filter(
          (manga) => manga.id !== id
        );

        // Alerte de succès
        alert("Le manga a été supprimé avec succès.");
      } else {
        console.error("Erreur lors de la suppression du manga.");
        alert("Une erreur est survenue lors de la suppression.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête de suppression :", error);
      alert("Erreur de connexion au serveur.");
    }
  } else {
    alert("Suppression annulée.");
  }
}

// Fonction pour afficher les mangas
function displayMangas(mangasList) {
  const main = document.querySelector("main");
  main.innerHTML = ""; // Réinitialise l'affichage avant de recharger les mangas filtrés
  mangasList.forEach((element) => {
    main.innerHTML += mangas(element);
  });
}

// Fonction pour filtrer les mangas en fonction de la recherche
function filterMangas() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  // Filtrage des mangas qui correspondent au titre recherché
  const filteredMangas = window.mangasData.filter((manga) =>
    manga.title.toLowerCase().includes(searchInput)
  );
  displayMangas(filteredMangas); // Affiche les mangas filtrés
}

// Fonction pour récupérer les mangas depuis l'API et afficher la liste
async function fetchMangas() {
  try {
    const response = await fetch("http://localhost:3000/mangas");
    const data = await response.json();

    data.sort((a, z) => a.title.localeCompare(z.title)); // Trie alphabétique

    console.log(data);

    window.mangasData = data; // Sauvegarde les données globalement pour le filtrage
    displayMangas(data); // Affiche la liste complète au départ
  } catch (error) {
    console.error("Erreur lors du chargement des données :", error);
  }
}

// Appel de la fonction pour récupérer et afficher les mangas
fetchMangas();
