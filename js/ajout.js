document.getElementById('addButton').addEventListener('click', async () => {
    // Récupération des données du formulaire
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publicationDate = document.getElementById('publication_date').value;
    const genre = document.getElementById('genre').value;
    const imageUrl = document.getElementById('image_url').value;

    // Validation des champs
    if (!title || !author || !publicationDate || !genre || !imageUrl) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Création de l'objet manga
    const newManga = {
        title: title,
        author: author,
        publication_date: parseInt(publicationDate),
        genre: genre.split(',').map(g => g.trim()),
        image_url: imageUrl
    };

    try {
        // Envoi de la requête POST vers l'API JSON Server
        const response = await fetch('http://localhost:3000/mangas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newManga)
        });

        if (response.ok) {
            // Redirection vers index.html en cas de succès
            alert('Manga ajouté avec succès !');
            window.location.href = 'manga.html';
        } else {
            throw new Error('Erreur lors de l\'ajout du manga.');
        }
    } catch (error) {
        console.error(error);
        alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
});
