document.addEventListener("DOMContentLoaded", function() {
    const navbarContainer = document.getElementById("navbar");

    // Charger la navbar à partir de navbar.html
    fetch("../navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de chargement de la navbar.");
            }
            return response.text();
        })
        .then(data => {
            navbarContainer.innerHTML = data;

            // Ajouter l'événement de déconnexion après le chargement de la navbar
            const deconnexionBtn = document.getElementById("deconnexionBtn");
            if (deconnexionBtn) {
                deconnexionBtn.addEventListener("click", function() {
                    // Effacer le localStorage
                    localStorage.clear();

                    // Rediriger vers login.html
                    window.location.href = '../login.html';
                });
            }
        })
        .catch(error => {
            console.error("Erreur:", error);
            navbarContainer.innerHTML = "<p>Erreur lors du chargement de la barre de navigation.</p>";
        });
});



// Fonction pour charger le contenu du footer
function loadFooter() {
    fetch("footer.html")
        .then(response => {
            if (!response.ok) throw new Error("Erreur de chargement du footer.");
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => {
            console.error("Erreur:", error);
        });
}

// Appel de la fonction pour charger le footer quand la page est prête
document.addEventListener("DOMContentLoaded", loadFooter);