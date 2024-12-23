// Create elements dynamically in JavaScript

// Create the 'up' div
const upDiv = document.createElement('div');
upDiv.id = 'up';
document.body.appendChild(upDiv);

// Create the 'navbar' div
const navbarDiv = document.createElement('div');
navbarDiv.id = 'navbar';
document.body.appendChild(navbarDiv);

// Create the 'hero' header
const heroHeader = document.createElement('header');
heroHeader.className = 'hero';
document.body.appendChild(heroHeader);

// Create the 'propos' section
const proposSection = document.createElement('section');
proposSection.id = 'propos';
proposSection.className = 'section';
document.body.appendChild(proposSection);

// Create the main element
const mainElement = document.createElement('main');
document.body.appendChild(mainElement);

// Create the 'pok' section
const pokSection = document.createElement('section');
pokSection.id = 'pok';
pokSection.className = 'section';
document.body.appendChild(pokSection);

// Create the 'contact' section
const contactSection = document.createElement('section');
contactSection.id = 'contact';
contactSection.className = 'section contact';
document.body.appendChild(contactSection);

// Create the 'cv' link
const cvLink = document.createElement('a');
cvLink.className = 'cv';
cvLink.href = 'cv/cv tom.rar';
cvLink.download = true;
cvLink.textContent = 'Télécharger mon CV';
document.body.appendChild(cvLink);

// Create the 'footer-container' div
const footerContainer = document.createElement('div');
footerContainer.id = 'footer-container';
document.body.appendChild(footerContainer);
