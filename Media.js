const buttons = document.querySelectorAll(".favorite-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {

        const card = this.parentElement;

        const title = card.querySelector("h3").textContent;
        const image = card.querySelector("img").src;

        const favorites = document.getElementById("favorites-list");

        const favorite = document.createElement("div");
        favorite.className = "favorite-item";

        favorite.innerHTML = `
            <img src="${image}" alt="${title}">
            <span>${title}</span>
        `;

        favorites.appendChild(favorite);
    });
});