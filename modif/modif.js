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
        document.getElementById('video').value = manga.video || ''; // Ajouter l'URL de la vidéo si elle existe

        // Si la vidéo existe, afficher l'iframe avec la vidéo YouTube
        updateVideoPreview(manga.video);
    } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
        alert("Erreur lors du chargement des informations du manga.");
    }
}

// Fonction pour extraire l'ID de la vidéo YouTube à partir de l'URL
function getYouTubeVideoId(url) {
    if (!url) return null;

    try {
        const urlObj = new URL(url);

        // Cas pour les vidéos YouTube classiques (https://www.youtube.com/watch?v=ID)
        if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
            return urlObj.searchParams.get('v');
        }
        // Cas pour les vidéos YouTube sur youtu.be (https://youtu.be/ID)
        else if (urlObj.hostname === 'youtu.be') {
            return urlObj.pathname.substring(1);
        }
    } catch (error) {
        console.error("Erreur lors de l'analyse de l'URL :", url, error);
        return null;
    }
    return null; // Retourner null si aucun ID n'est trouvé
}

// Fonction pour mettre à jour la prévisualisation de la vidéo
function updateVideoPreview(videoUrl) {
    const videoId = getYouTubeVideoId(videoUrl);
    const videoIframe = document.getElementById('videoPreview');

    if (videoId) {
        // Ajouter des paramètres pour optimiser l'intégration
        videoIframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&modestbranding=1&showinfo=0`;
        document.getElementById('videoPreviewContainer').style.display = 'block';
    } else {
        // Cacher la prévisualisation si l'URL est invalide ou la vidéo non disponible
        videoIframe.src = '';
        document.getElementById('videoPreviewContainer').style.display = 'none';
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
        info_url: document.getElementById('info_url').value,
        video: document.getElementById('video').value.trim() || null // Sauvegarder l'URL de la vidéo, ou null si vide
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

// Ajouter un événement pour mettre à jour la vidéo dans l'iframe lorsque l'URL de la vidéo change
document.getElementById('video').addEventListener('input', function () {
    const videoUrl = this.value.trim();
    updateVideoPreview(videoUrl);
});

// Initialiser la page avec les données du manga
const { id } = getQueryParams();
loadMangaData(id);

// Ajouter l'événement au bouton de sauvegarde
document.getElementById('saveButton').addEventListener('click', () => saveManga(id));
