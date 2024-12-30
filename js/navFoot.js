document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  fetch("../navbar.html")
    .then((response) => {
      if (!response.ok) throw new Error("Erreur de chargement de la navbar.");
      return response.text();
    })
    .then((data) => {
      navbarContainer.innerHTML = data;

      const userRole = localStorage.getItem("role");
      const deconnexionContainer = document.getElementById("decoAjout");

      if (deconnexionContainer) {
        deconnexionContainer.innerHTML = `
          <button id="deconnexionBtn">Déconnexion</button>
          ${userRole === "admin" ? '<a href="ajouter/ajout.html" class="add"><button>Ajouter</button></a>' : ''}
        `;

        document.getElementById("deconnexionBtn").addEventListener("click", () => {
          localStorage.clear();
          window.location.href = "../login.html";
        });
      }
    })
    .catch((error) => {
      console.error("Erreur:", error);
      navbarContainer.innerHTML = "<p>Erreur lors du chargement de la barre de navigation.</p>";
    });

  fetchFooter();
});

function fetchFooter() {
  fetch("footer.html")
    .then((response) => {
      if (!response.ok) throw new Error("Erreur de chargement du footer.");
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((error) => console.error("Erreur:", error));
}
