document.getElementById("addButton").addEventListener("click", async function(event) {
    event.preventDefault();  // Empêche le rechargement de la page

    // Récupération des données du formulaire
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const publication_date = document.getElementById("publication_date").value;
    const genreInput = document.getElementById("genre").value;
    const image_url = document.getElementById("image_url").value;
    const info_url = document.getElementById("info_url").value;
    const video_url = document.getElementById("video").value; // Récupère l'URL de la vidéo YouTube

    // Conversion du champ genre en tableau
    const genre = genreInput.split(",").map(g => g.trim()); // On divise par les virgules et on enlève les espaces

    // Génération de l'ID numérique unique (en utilisant le timestamp actuel) et conversion en chaîne de caractères
    const id = String(Date.now());  // ID converti en chaîne de caractères

    // Création de l'objet manga à envoyer avec l'ID et la vidéo
    const newManga = {
        id: id,  // Ajout de l'ID
        title: title,
        author: author,
        publication_date: publication_date,
        genre: genre,
        image_url: image_url,
        info_url: info_url,
        video: video_url  // Ajout de l'URL de la vidéo YouTube
    };

    try {
        // Envoi de la requête POST pour ajouter le manga
        const response = await fetch("http://localhost:3000/mangas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newManga) // Conversion de l'objet en JSON
        });

        if (response.ok) {
            // Si le manga est ajouté avec succès, on peut nettoyer le formulaire ou informer l'utilisateur
            alert("Manga ajouté avec succès!");
            document.getElementById("mangaForm").reset();  // Réinitialiser le formulaire

            // Redirection vers manga.html
            window.location.href = "../manga.html";
        } else {
            console.error("Erreur lors de l'ajout du manga.");
            alert("Une erreur est survenue, veuillez réessayer.");
        }
    } catch (error) {
        console.error("Erreur de connexion :", error);
        alert("Erreur de connexion au serveur.");
    }
});
