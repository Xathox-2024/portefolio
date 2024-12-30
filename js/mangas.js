let youtubePlayer;

function openVideoPopup(videoUrl) {
  const videoId = new URL(videoUrl).searchParams.get("v");
  const popupContainer = document.createElement("div");
  popupContainer.classList.add("popup-container");
  popupContainer.innerHTML = `
    <div class="popup-content">
      <button class="close-popup" onclick="closeVideoPopup()">X</button>
      <div id="youtube-player"></div>
    </div>
  `;
  document.body.appendChild(popupContainer);

  youtubePlayer = new YT.Player("youtube-player", {
    height: "390",
    width: "640",
    videoId,
    events: {
      onReady: (event) => event.target.playVideo(),
    },
  });
}

function closeVideoPopup() {
  if (youtubePlayer) youtubePlayer.stopVideo();
  document.querySelector(".popup-container")?.remove();
}

function mangas(element) {
  const userRole = localStorage.getItem("role");
  const deleteButton = userRole === "admin" ? `
    <button onclick="deleteManga('${element.id}')">Supprimer</button>
    <a href="../modif/modif.html?id=${element.id}">
      <button>Modifier</button>
    </a>
  ` : "";
  return `
    <div class="cadre" id="manga-${element.id}">
      <h2 class="titre">${element.title}</h2>
      <p class="author">Auteur : ${element.author}</p>
      <p class="date">Date de publication : ${element.publication_date}</p>
      <p class="genre">Genre : ${element.genre}</p>
      <img class="imgs" src="${element.image_url}" alt="Image du manga" onclick="openVideoPopup('${element.video}')">
      <div class="button-container">
        <a href="${element.info_url}" target="_blank">
          <button>Sélectionner</button>
        </a>
        ${deleteButton}
      </div>
    </div>
  `;
}

async function deleteManga(id) {
  if (window.confirm("Êtes-vous sûr de vouloir supprimer ce manga ?")) {
    try {
      const response = await fetch(`http://localhost:3000/mangas/${id}`, { method: "DELETE" });
      if (response.ok) {
        document.getElementById(`manga-${id}`)?.remove();
        window.mangasData = window.mangasData.filter((manga) => manga.id !== id);
        alert("Le manga a été supprimé avec succès.");
      } else {
        alert("Une erreur est survenue lors de la suppression.");
      }
    } catch {
      alert("Erreur de connexion au serveur.");
    }
  } else {
    alert("Suppression annulée.");
  }
}

function displayMangas(mangasList) {
  const main = document.querySelector("main");
  main.innerHTML = mangasList.map(mangas).join("");
}

function filterMangas() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const filteredMangas = window.mangasData.filter((manga) =>
    manga.title.toLowerCase().includes(searchInput)
  );
  displayMangas(filteredMangas);
}

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

fetchMangas();
