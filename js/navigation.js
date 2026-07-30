function updateNavigation() {
    const header = document.getElementById("header");
    if (!header) return;

    header.innerHTML = `
<div class="top-bar">
    <div class="container top-bar-container">
        <div class="top-info">
            <span><i class="fa-solid fa-location-dot"></i> Kaduna North, Kaduna State</span>
            <span><i class="fa-solid fa-phone"></i> +234 803 882 4894</span>
            <span><i class="fa-solid fa-clock"></i> Sunday: 9:00 AM</span>
        </div>
        <div class="top-social">
            <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        </div>
    </div>
</div>
<nav class="navbar">
    <div class="container navbar-container">
        <a href="index.html" class="logo">
            <img src="assets/images/rccg-logo.jpeg" alt="RCCG Logo" class="logo-image">
            <div class="logo-text">
                <span class="church-name">Trinity Sanctuary</span>
                <span class="church-badge">Continent 11 HQ</span>
            </div>
        </a>

        <ul class="nav-menu" id="nav-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="leadership.html">Leadership</a></li>
            <li><a href="ministries.html">Ministries</a></li>
            <li><a href="sermons.html">Sermons</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="give.html">Give</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>

        <div class="nav-actions">
            <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme" title="Toggle theme">
                <i class="fa-solid fa-moon"></i>
            </button>
            <a href="contact.html" class="btn btn-primary nav-btn">
                <span>Plan Your Visit</span> <i class="fa-solid fa-arrow-right"></i>
            </a>
            <button class="menu-toggle" id="menu-toggle" aria-label="Open Menu">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </div>
</nav>
`;

    // Active page detection logic
    let rawPath = window.location.pathname.toLowerCase();
    let currentPage = rawPath.substring(rawPath.lastIndexOf('/') + 1);
    if (!currentPage || currentPage === "" || currentPage === "/") {
        currentPage = "index.html";
    }

    const navLinks = header.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
        const href = (link.getAttribute("href") || "").toLowerCase();
        const cleanHref = href.replace(".html", "").replace("./", "");
        const cleanCurrent = currentPage.replace(".html", "");

        if (href === currentPage || cleanHref === cleanCurrent || (cleanCurrent === "" && cleanHref === "index")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Mobile menu toggle logic
    const menuToggle = header.querySelector("#menu-toggle");
    const navMenu = header.querySelector("#nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            const icon = menuToggle.querySelector("i");
            if (icon) {
                if (isOpen) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            });
        });
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateNavigation);
} else {
    updateNavigation();
}