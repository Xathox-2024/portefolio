const Div = document.createElement("div");
Div.id = "up";
document.body.appendChild(Div);

const navbarDiv = document.createElement("div");
navbarDiv.id = "navbar";
document.body.appendChild(navbarDiv);

const heroHeader = document.createElement("header");
heroHeader.className = "hero";
document.body.appendChild(heroHeader);

const proposSection = document.createElement("section");
proposSection.id = "propos";
proposSection.className = "section";
document.body.appendChild(proposSection);

const mainElement = document.createElement("main");
document.body.appendChild(mainElement);

const pokSection = document.createElement("section");
pokSection.id = "pok";
pokSection.className = "section";
document.body.appendChild(pokSection);

const contactSection = document.createElement("section");
contactSection.id = "contact";
contactSection.className = "section contact";
document.body.appendChild(contactSection);

const cvLink = document.createElement("a");
cvLink.className = "cv";
cvLink.href = "cv/cv tom.rar";
cvLink.download = true;
cvLink.textContent = "Télécharger mon CV";
document.body.appendChild(cvLink);

const footerContainer = document.createElement("div");
footerContainer.id = "footer-container";
document.body.appendChild(footerContainer);
