
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("review.html")) {
        let count = localStorage.getItem("reviewCount") || 0;
        count++;
        localStorage.setItem("reviewCount", count);

        const countDisplay = document.getElementById("review-count");
        if (countDisplay) {
            countDisplay.textContent = count;
        }
    }
});