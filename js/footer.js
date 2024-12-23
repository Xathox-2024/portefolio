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