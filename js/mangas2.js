// Création des éléments HTML
const upDiv = document.createElement('div');
upDiv.id = 'up';

const navbarDiv = document.createElement('div');
navbarDiv.id = 'navbar';

const mangasList = document.createElement('main');
mangasList.id = 'mangas-list';

const upButton = document.createElement('a');
upButton.href = '#up';
upButton.id = 'upButton';
const upImage = document.createElement('img');
upImage.className = 'up';
upImage.src = 'images/up.png'; // Remplace par ton image
upImage.alt = '404';
upButton.appendChild(upImage);

const footerContainer = document.createElement('div');
footerContainer.id = 'footer-container';

// Ajout des éléments au body
document.body.appendChild(upDiv);
document.body.appendChild(navbarDiv);
document.body.appendChild(mangasList);
document.body.appendChild(upButton);
document.body.appendChild(footerContainer);