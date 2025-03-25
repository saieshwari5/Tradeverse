// Define routes
const routes = {
    "/dashboard": "pages/dashboard.html",
    "/portfolio": "pages/Portfolio.html",
    "/orders": "pages/OrderPage.html",
    "/profile": "pages/Profile.html",
    "/leaderboard": "pages/LeaderboardPage.html",
};

// Load sidebar and header
document.getElementById("sidebar").innerHTML = `<object type="text/html" data="components/Sidebar.html"></object>`;
document.getElementById("header").innerHTML = `<object type="text/html" data="components/header.html"></object>`;

// Function to load content dynamically
function loadPage() {
    const path = window.location.hash.replace("#", "") || "/dashboard";
    const page = routes[path] || "pages/dashboard.html";
    fetch(page)
        .then(response => response.text())
        .then(html => document.getElementById("content").innerHTML = html)
        .catch(() => document.getElementById("content").innerHTML = "<p>Page not found</p>");
}

// Listen for hash changes
window.addEventListener("hashchange", loadPage);
window.addEventListener("load", loadPage);
