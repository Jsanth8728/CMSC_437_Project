const buttons = document.querySelectorAll(".favorite-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {

        const card = this.parentElement;

        const title = card.querySelector("h3").textContent;
        const image = card.querySelector("img").src;

        const favorites = document.getElementById("favorites-list");

        //check for duplicates
        const existingFavorites = favorites.querySelectorAll(".favorite-title");

        for (const favoriteTitle of existingFavorites) {
            if (favoriteTitle.textContent === title) {
                alert("This item is already in your favorites.");
                return;
            }
        }

        // Create favorite container
        const favorite = document.createElement("div");
        favorite.className = "favorite-item";

        // Create image
        const img = document.createElement("img");
        img.src = image;
        img.alt = title;

        // Create title
        const span = document.createElement("span");
        span.className = "favorite-title";
        span.textContent = title;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.className = "remove-btn";
        removeButton.textContent = "✕";

        // Remove favorite when X is clicked
        removeButton.addEventListener("click", function () {
            favorite.remove();
        });

        // Add everything to the favorite
        favorite.appendChild(img);
        favorite.appendChild(span);
        favorite.appendChild(removeButton);

        // Add favorite to the list
        favorites.appendChild(favorite);
    });
});