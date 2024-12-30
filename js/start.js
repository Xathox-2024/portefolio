const { exec } = require('child_process');

exec('npx json-server --watch db.json --port 3000', (err, stdout, stderr) => {
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
