document.getElementById("addButton").addEventListener("click", async function(event) {
    event.preventDefault();

    const formElements = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        publication_date: document.getElementById("publication_date").value,
        genre: document.getElementById("genre").value.split(",").map(g => g.trim()),
        image_url: document.getElementById("image_url").value,
        info_url: document.getElementById("info_url").value,
        video: document.getElementById("video").value
    };

    const newManga = {
        id: String(Date.now()),
        ...formElements
    };

    try {
        const response = await fetch("http://localhost:3000/mangas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newManga)
        });

        if (response.ok) {
            alert("Manga ajouté avec succès!");
            document.getElementById("mangaForm").reset();
            window.location.href = "../manga.html";
        } else {
            throw new Error("Erreur lors de l'ajout du manga.");
        }
    } catch (error) {
        console.error(error);
        alert("Une erreur est survenue, veuillez réessayer.");
    }
});
