// Sélectionner l'image/lien
const up = document.getElementById('upButton');

// Ajouter un écouteur pour surveiller le défilement
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        // Si l'utilisateur a défilé vers le bas (plus de 300px)
        upButton.style.display = 'block'; // Afficher le bouton
    } else {
        // Si l'utilisateur est en haut de la page
        upButton.style.display = 'none'; // Cacher le bouton
    }
});