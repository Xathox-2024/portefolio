
/*
const boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = "Supprimer";
    cadre.appendChild(boutonSupprimer);

    // Gestionnaire d'événement pour Supprimer
    boutonSupprimer.addEventListener("click", function () {
      const supprime = confirm("Voulez-vous supprimer cette carte ?");
      if (supprime) {
          
          fetch("http://localhost:3000/mangas/${manga.id}", {
              method: 'DELETE',
          })
              .then(res => res.json())
              .then(res => {
                  console.log("Utilisateur supprimé :", res);
              })
              .catch(err => console.error("Erreur lors de la suppression :", err));
      }
  });


*/


/*

fetch("http://localhost:3000/mangas",{
    method: 'DELETE',
})


  .then((response) => response.json())
  .then((data) => {
    console.log(data.id);
    
  })
  .catch((error) => {
    console.error("Erreur lors de la supp :", error);
  });

  */