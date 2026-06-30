const loginButton = document.getElementById("loginButton");

if (loginButton) {
    if (localStorage.getItem("loggedIn") === "true") {
        loginButton.textContent = "Logout";
    } else {
        loginButton.textContent = "Login";
    }

    loginButton.addEventListener("click", function () {
        if (localStorage.getItem("loggedIn") === "true") {
            localStorage.setItem("loggedIn", "false");
            window.location.reload();

        } else {
            window.location.href = "Login_Screen.html";
        }
    });
}


const buttons = document.querySelectorAll(".favorite-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const card = this.parentElement;
        const title = card.querySelector("h3").textContent;
        const image = card.querySelector("img").src;
        const favorites = document.getElementById("favorites-list");
        const favorite = document.createElement("div");
        favorite.className = "favorite-item";
       
        const img = document.createElement("img");
        img.src = image;
        img.alt = title;

        const span = document.createElement("span");
        span.className = "favorite-title";
        span.textContent = title;

        const removeButton = document.createElement("button");
        removeButton.className = "remove-btn";
        removeButton.textContent = "✕";

        removeButton.addEventListener("click", function () {
            favorite.remove();
        });

        favorite.appendChild(img);
        favorite.appendChild(span);
        favorite.appendChild(removeButton);
        favorites.appendChild(favorite);
    });
});