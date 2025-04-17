document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamburger.classList.toggle("show");
});

const photoContainer = document.getElementById("photo-container");
const photos = [
    {
        description: "Mary & Dallas @ Shibuya Crossing",
        location: "Shibuya",
        image: "images/shibuya.webp"
    },
    {
        description: "Arashiyama Bamboo Forest",
        location: "Kyoto",
        image: "images/bamboo.webp"
    },
    {
        description: "Dallas & Mary in Pedal Boats @ Imperial Palace",
        location: "Tokyo",
        image: "images/boat.webp"
    },
    {
        description: "Osaka Castle",
        location: "Osaka",
        image: "images/castle.webp"
    },
    {
        description: "Mary & Dallas w/ Cherry Blossoms @ Imperial Palace",
        location: "Tokyo",
        image: "images/cherry.webp"
    },
    {
        description: "Torii Gates @ Fushimi Inari Shrine",
        location: "Kyoto",
        image: "images/gates.webp"
    },
    {
        description: "Jordan, Dallas, Mary, Jenna, & Jared w/ Owner @ Morimori",
        location: "Shinjuku",
        image: "images/mori.webp"
    },
    {
        description: "Jordan, Dallas, Mary, Jenna, & Jared @ Nintendo Store",
        location: "Shibuya",
        image: "images/nintendo.webp"
    },
    {
        description: "Shitenno-ji Temple",
        location: "Osaka",
        image: "images/osaka.webp"
    },
    {
        description: "Fluffy Pancakes @ A Happy Pancake",
        location: "Omotesando",
        image: "images/pancake.webp"
    },
    {
        description: "Ramen @ Kotan Ramen Abechika",
        location: "Osaka",
        image: "images/ramen.webp"
    },
    {
        description: "Mary & Dallas @ Tokyo LDS Temple",
        location: "Tokyo",
        image: "images/temple.webp"
    }
];

createPhotoCard(photos);

function createPhotoCard(photos) {
    document.querySelector("#photo-container").innerHTML = "";
    photos.forEach(photo => {
        let card = document.createElement("section");
        let description = document.createElement("p");
        let location = document.createElement("p");
        let image = document.createElement("img");

        description.textContent = photo.description;
        location.innerHTML = `<span class="label">Location:</span> ${photo.location}`;
        image.setAttribute("src", photo.image);
        image.setAttribute("alt", `${photo.description}`);
        image.setAttribute("loading", "lazy");

        card.appendChild(description);
        card.appendChild(location);
        card.appendChild(image);

        document.querySelector("#photo-container").appendChild(card);
    });
};