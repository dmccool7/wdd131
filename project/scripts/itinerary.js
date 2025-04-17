document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamburger.classList.toggle("show");
});

const itineraryItems = document.querySelectorAll(".daily section p");
const favoritesList = document.getElementById("favorites-list");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

itineraryItems.forEach(item => {
    item.addEventListener("click", () => {
        const text = item.textContent;
        if (!favorites.includes(text)) {
            favorites.push(text);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            displayFavorites();
        };
    });
});

function displayFavorites() {
    favoritesList.innerHTML = "";

    favorites.forEach(item => {
        const list = document.createElement("li");
        list.textContent = item;

        const removeButton = document.createElement("button");
        removeButton.textContent = "✖";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", () => {
            favorites = favorites.filter(fav => fav !== item);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            displayFavorites();
        });

        list.appendChild(removeButton);
        favoritesList.appendChild(list);
    });
}

displayFavorites();