document
  .getElementById("registerForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); 


    const username = document.getElementById("newUsername").value.trim();
    const userpassword = document.getElementById("newPassword").value.trim();

    
    if (!username || !userpassword) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
    
    const forMaj = /[A-Z]/.test(userpassword);
    const caractereSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(userpassword);
    const number = /\d/.test(userpassword);
    const min8 = userpassword.length >= 8;

    if (!min8 || !forMaj || !caractereSpecial || !number) {
      alert(
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial."
      );
      return;
    }

    
    const users = await fetchUsers();
    if (!users) {
      return;
    }

    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      alert("Cet identifiant est déjà utilisé. Veuillez en choisir un autre.");
      return;
    }

    const formData = {
      username: username,
      userpassword: userpassword,
      type: "user", 
    };

    
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

  const userExists = users.some((user) => user.username === username);
  if (userExists) {
    feedback.textContent = "Cet identifiant est déjà utilisé.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Identifiant disponible.";
    feedback.style.color = "green";
  }
});


document.getElementById("newPassword").addEventListener("keyup", () => {
  const password = document.getElementById("newPassword").value;
  const feedback = document.getElementById("password-feedback");

  const forMaj = /[A-Z]/.test(password);
  const caractereSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const number = /\d/.test(password);
  const min8 = password.length >= 8;

  
  if (!min8) {
    feedback.textContent =
      "Le mot de passe doit contenir au moins 8 caractères.";
    feedback.style.color = "red";
  } else if (!forMaj) {
    feedback.textContent =
      "Le mot de passe doit contenir au moins une majuscule.";
    feedback.style.color = "red";
  } else if (!caractereSpecial) {
    feedback.textContent =
      "Le mot de passe doit contenir au moins un caractère spécial.";
    feedback.style.color = "red";
  } else if (!number) {
    feedback.textContent = "Le mot de passe doit contenir au moins un chiffre.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Mot de passe valide.";
    feedback.style.color = "green";
  }
});


const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/users");

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des utilisateurs.");
    }

    return await response.json(); 
  } catch (err) {
    console.error("Erreur lors de la récupération des utilisateurs :", err);
    return null;
  }
};


const registerUser = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), 
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'enregistrement de l'utilisateur.");
    }

    alert("Utilisateur enregistré avec succès !");
    document.getElementById("registerForm").reset();
  } catch (error) {
    console.error("Erreur :", error);
    alert("Une erreur est survenue lors de la requête.");
  }
};
