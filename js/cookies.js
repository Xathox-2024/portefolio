document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");

    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "block";
    }

    acceptButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });

    declineButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "false");
        cookieBanner.style.display = "none";
    });
});
