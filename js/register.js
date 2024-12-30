document.getElementById("registerForm").addEventListener("submit", async function (event) {
  event.preventDefault(); 

  const username = document.getElementById("newUsername").value.trim();
  const userpassword = document.getElementById("newPassword").value.trim();

  if (!username || !userpassword) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  const isValidPassword = /[A-Z]/.test(userpassword) && /[!@#$%^&*(),.?":{}|<>]/.test(userpassword) && /\d/.test(userpassword) && userpassword.length >= 8;

  if (!isValidPassword) {
    alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.");
    return;
  }

  const users = await fetchUsers();
  if (!users) return;

  const userExists = users.some(user => user.username === username);
  if (userExists) {
    alert("Cet identifiant est déjà utilisé. Veuillez en choisir un autre.");
    return;
  }

  const formData = { username, userpassword, type: "user" };
  await registerUser(formData);
});

document.getElementById("newUsername").addEventListener("keyup", async () => {
  const username = document.getElementById("newUsername").value.trim();
  const feedback = document.getElementById("username-feedback");

  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    feedback.textContent = "Seuls les lettres et chiffres sont autorisés.";
    feedback.style.color = "red";
    return;
  }

  const users = await fetchUsers();
  if (!users) {
    feedback.textContent = "Impossible de vérifier l'identifiant.";
    feedback.style.color = "red";
    return;
  }

  const userExists = users.some(user => user.username === username);
  feedback.textContent = userExists ? "Cet identifiant est déjà utilisé." : "Identifiant disponible.";
  feedback.style.color = userExists ? "red" : "green";
});

document.getElementById("newPassword").addEventListener("keyup", () => {
  const password = document.getElementById("newPassword").value;
  const feedback = document.getElementById("password-feedback");

  const isValidPassword = /[A-Z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password) && /\d/.test(password) && password.length >= 8;

  if (!isValidPassword) {
    feedback.textContent = getPasswordFeedback(password);
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Mot de passe valide.";
    feedback.style.color = "green";
  }
});

const getPasswordFeedback = (password) => {
  if (password.length < 8) return "Le mot de passe doit contenir au moins 8 caractères.";
  if (!/[A-Z]/.test(password)) return "Le mot de passe doit contenir au moins une majuscule.";
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return "Le mot de passe doit contenir au moins un caractère spécial.";
  if (!/\d/.test(password)) return "Le mot de passe doit contenir au moins un chiffre.";
  return "";
};

const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) throw new Error("Erreur lors de la récupération des utilisateurs.");
    return await response.json();
  } catch (err) {
    console.error("Erreur :", err);
    return null;
  }
};

const registerUser = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error("Erreur lors de l'enregistrement de l'utilisateur.");
    alert("Utilisateur enregistré avec succès !");
    document.getElementById("registerForm").reset();
  } catch (error) {
    console.error("Erreur :", error);
    alert("Une erreur est survenue lors de la requête.");
  }
};
