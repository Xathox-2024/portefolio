let youtubePlayer;

// Fonction pour ouvrir une popup avec la vidéo YouTube
function openVideoPopup(videoUrl) {
  const videoId = new URL(videoUrl).searchParams.get("v"); // Extrait l'ID de la vidéo
  const popupContainer = document.createElement("div");
  popupContainer.classList.add("popup-container");

  const popupContent = `
    <div class="popup-content">
      <button class="close-popup" onclick="closeVideoPopup()">X</button>
      <div id="youtube-player"></div>
    </div>
  `;

  popupContainer.innerHTML = popupContent;
  document.body.appendChild(popupContainer);

  // Crée un lecteur YouTube intégré
  youtubePlayer = new YT.Player("youtube-player", {
    height: "390",
    width: "640",
    videoId: videoId,
    events: {
      onReady: (event) => event.target.playVideo(),
    },
  });
}

// Fonction pour fermer la popup et arrêter la vidéo
function closeVideoPopup() {
  if (youtubePlayer) {
    youtubePlayer.stopVideo();
  }
  const popupContainer = document.querySelector(".popup-container");
  if (popupContainer) {
    popupContainer.remove();
  }
}

// Fonction pour générer le HTML de chaque manga avec un bouton "Supprimer" et "Modifier"
function mangas(element) {
  const userRole = localStorage.getItem("role"); // Récupère le rôle de l'utilisateur
  let buttons = `
    <div class="cadre" id="manga-${element.id}">
      <h2 class="titre">${element.title}</h2>
      <p class="author">Auteur : ${element.author}</p>
      <p class="date">Date de publication : ${element.publication_date}</p>
      <p class="genre">Genre : ${element.genre}</p>
      <img class="imgs" src="${element.image_url}" alt="Image du manga" onclick="openVideoPopup('${element.video}')">
      <div class="button-container">
        <a href="${element.info_url}" target="_blank" id="button-container">
          <button>Sélectionner</button>
        </a>
  `;

  if (userRole === "admin") {
    buttons += `
      <button onclick="deleteManga('${element.id}')">Supprimer</button>
      <a href="../modif/modif.html?id=${element.id}">
        <button>Modifier</button>
      </a>
    `;
  }

  buttons += `
      </div>
    </div>
  `;
  
  return buttons;
}

// Fonction pour supprimer un manga par son ID
async function deleteManga(id) {
  const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer ce manga ?");
  if (isConfirmed) {
    try {
      const response = await fetch(`http://localhost:3000/mangas/${id}`, { method: "DELETE" });
      if (response.ok) {
        const mangaElement = document.getElementById(`manga-${id}`);
        mangaElement.remove();
        window.mangasData = window.mangasData.filter((manga) => manga.id !== id);
        alert("Le manga a été supprimé avec succès.");
      } else {
        alert("Une erreur est survenue lors de la suppression.");
      }
    } catch (error) {
      alert("Erreur de connexion au serveur.");
    }
  } else {
    alert("Suppression annulée.");
  }
}

// Fonction pour afficher les mangas
function displayMangas(mangasList) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  mangasList.forEach((element) => {
    main.innerHTML += mangas(element);
  });
}

// Fonction pour filtrer les mangas en fonction de la recherche
function filterMangas() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const filteredMangas = window.mangasData.filter((manga) =>
    manga.title.toLowerCase().includes(searchInput)
  );
  displayMangas(filteredMangas);
}

// Fonction pour récupérer les mangas depuis l'API et afficher la liste
async function fetchMangas() {
  try {
    const response = await fetch("http://localhost:3000/mangas");
    const data = await response.json();
    data.sort((a, z) => a.title.localeCompare(z.title));
    window.mangasData = data;
    displayMangas(data);
  } catch (error) {
    console.error("Erreur lors du chargement des données :", error);
  }
}

// Appel de la fonction pour récupérer et afficher les mangas
fetchMangas();
