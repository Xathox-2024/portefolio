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

async function fetchMangas() {
  try {
    const response = await fetch("http://localhost:3000/mangas");
    const data = await response.json();

    data.sort((a, z) => a.title.localeCompare(z.title)); // Trie alphabétique

    console.log(data);

    const main = document.querySelector("main");
    data.forEach((element) => {
      main.innerHTML += mangas(element);
    });
  } catch (error) {
    console.error("Erreur lors du chargement des données :", error);
  }
}

// Appel de la fonction
fetchMangas();

// il faut faire la commande =>  npx json-server db.json


