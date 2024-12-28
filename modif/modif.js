// Fonction pour récupérer les paramètres de l'URL
function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      id: urlParams.get('id')
    };
  }
  
  // Fonction pour charger les informations du manga dans le formulaire
  async function loadMangaData(id) {
    try {
      const response = await fetch(`http://localhost:3000/mangas/${id}`);
      const manga = await response.json();
  
      // Remplir le formulaire avec les données du manga
      document.getElementById('title').value = manga.title;
      document.getElementById('author').value = manga.author;
      document.getElementById('publication_date').value = manga.publication_date;
      document.getElementById('genre').value = manga.genre;
      document.getElementById('image_url').value = manga.image_url;
      document.getElementById('info_url').value = manga.info_url;
    } catch (error) {
      console.error("Erreur lors du chargement des données :", error);
      alert("Erreur lors du chargement des informations du manga.");
    }
  }
  
  // Fonction pour sauvegarder les modifications
  async function saveManga(id) {
    const updatedManga = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
      publication_date: document.getElementById('publication_date').value,
      genre: document.getElementById('genre').value,
      image_url: document.getElementById('image_url').value,
      info_url: document.getElementById('info_url').value
    };
  
    try {
      const response = await fetch(`http://localhost:3000/mangas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedManga)
      });
  
      if (response.ok) {
        alert('Les informations du manga ont été mises à jour.');
        window.location.href = '../manga.html'; // Redirection vers la page principale
      } else {
        alert("Erreur lors de la mise à jour.");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
      alert("Erreur de connexion.");
    }
  }
  
  // Initialiser la page avec les données du manga
  const { id } = getQueryParams();
  loadMangaData(id);
  
  // Ajouter l'événement au bouton de sauvegarde
  document.getElementById('saveButton').addEventListener('click', () => saveManga(id));
  