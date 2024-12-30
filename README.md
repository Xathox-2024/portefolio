ici je vais mettre mes note sur mon portfolio

1. Installer json-server

Assure-toi d'avoir Node.js installé. Ensuite, installe json-server globalement :

npm install -g json-server

2. Lancer ton db.json

Pour démarrer un serveur avec ton fichier db.json, utilise cette commande dans le terminal :

json-server --watch db.json

Cela lancera un serveur local et ton fichier sera accessible à une URL comme :
http://localhost:3000

3. Lancer automatiquement au démarrage

Pour que ton db.json se lance tout seul :
a. Crée un script Node.js pour démarrer json-server

    Crée un fichier nommé start.js dans ton projet :


    const { exec } = require('child_process');

    exec('json-server --watch db.json', (err, stdout, stderr) => {
    if (err) {
        console.error(`Erreur lors du démarrage : ${err.message}`);
        return;
    }
    if (stderr) {
        console.error(`Erreur : ${stderr}`);
        return;
    }
    console.log(`Serveur lancé :\n${stdout}`);
    });


    Installe les dépendances nécessaires :

    npm init -y


    b. Automatiser le lancement

    Ajoute un script dans le fichier package.json :


    "scripts": {
    "start": "node start.js"
    }


    Maintenant, tu peux démarrer ton serveur avec :

    npm start