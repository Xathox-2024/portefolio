// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    const navbarContainer = document.getElementById("navbar");

    fetch("navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de chargement de la navbar.");
            }
            return response.text();
        })
        .then(data => {
            navbarContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Erreur:", error);
            navbarContainer.innerHTML = "<p>Erreur lors du chargement de la barre de navigation.</p>";
        });
});