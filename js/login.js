const validUsernameEnter = document.getElementById("username");
const validPasswordEnter = document.getElementById("password");

const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      throw new Error(
        `Erreur lors de la récupération des utilisateurs. Statut : ${response.status}`
      );
    }
    return await response.json();
  } catch (err) {
    console.error("Erreur lors de la récupération des utilisateurs :", err);
    alert(
      "Une erreur est survenue lors de la récupération des données. Veuillez réessayer plus tard."
    );
    return null;
  }
};

document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = validUsernameEnter.value;
    const password = validPasswordEnter.value;

    const users = await fetchUsers();
    if (!users) return;

    const user = users.find(
      (utilisateur) =>
        utilisateur.username === username &&
        utilisateur.userpassword === password
    );

    if (user) {
      localStorage.setItem("role", user.type);
      alert("Connexion réussie !");
      window.location.href = "index.html";
    } else {
      alert("Identifiant ou mot de passe incorrect !");
    }
  });

document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
    this.textContent = type === "password" ? "🙈" : "👁️";
  });
