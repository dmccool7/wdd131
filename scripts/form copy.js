
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

const selectProduct = document.getElementById("product-name");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectProduct.appendChild(option);
});

// document.addEventListener("DOMContentLoaded", () => {
//     if (window.location.pathname.includes("review.html")) {
//         let count = localStorage.getItem("reviewCount") || 0;
//         count++;
//         localStorage.setItem("reviewCount", count);

//         const countDisplay = document.getElementById("review-count");
//         if (countDisplay) {
//             countDisplay.textContent = count;
//         }
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    // Show current year and last modified date
    const year = document.getElementById("currentyear");
    if (year) year.textContent = new Date().getFullYear();

    const modified = document.getElementById("lastModified");
    if (modified) modified.textContent = "Last Modified: " + document.lastModified;

    // Review counter logic (only runs on review.html)
    if (window.location.pathname.includes("review.html")) {
        let count = localStorage.getItem("reviewCount") || 0;
        count++;
        localStorage.setItem("reviewCount", count);

        const countDisplay = document.getElementById("review-count");
        if (countDisplay) {
            countDisplay.textContent = count;
        } else {
            console.warn("Element with id 'review-count' not found.");
        }
    }
});