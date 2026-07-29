// ==========================================
// RCCG TRINITY SANCTUARY — THEME CONTROLLER
// ==========================================

(function () {
    const STORAGE_KEY = "trinity-theme";

    // 1. Immediately apply saved or system preference to prevent light theme flash
    function getPreferredTheme() {
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        if (savedTheme === "dark" || savedTheme === "light") {
            return savedTheme;
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        updateToggleButtonUI(theme);
    }

    const currentTheme = getPreferredTheme();
    document.documentElement.setAttribute("data-theme", currentTheme);

    // 2. Helper to update button icon and ARIA state
    function updateToggleButtonUI(theme) {
        const toggleButtons = document.querySelectorAll("#theme-toggle, .theme-toggle");
        toggleButtons.forEach(btn => {
            const icon = btn.querySelector("i");
            if (theme === "dark") {
                btn.setAttribute("aria-label", "Switch to Light Theme");
                btn.setAttribute("title", "Switch to Light Theme");
                if (icon) {
                    icon.className = "fa-solid fa-sun";
                }
            } else {
                btn.setAttribute("aria-label", "Switch to Dark Theme");
                btn.setAttribute("title", "Switch to Dark Theme");
                if (icon) {
                    icon.className = "fa-solid fa-moon";
                }
            }
        });
    }

    // 3. Expose global toggle function for UI button clicks
    window.toggleTrinityTheme = function () {
        const activeTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        localStorage.setItem(STORAGE_KEY, activeTheme);
        applyTheme(activeTheme);
    };

    // 4. Initialize button events once DOM is loaded
    document.addEventListener("DOMContentLoaded", () => {
        const activeTheme = getPreferredTheme();
        updateToggleButtonUI(activeTheme);

        document.addEventListener("click", (e) => {
            const toggleBtn = e.target.closest("#theme-toggle, .theme-toggle");
            if (toggleBtn) {
                e.preventDefault();
                window.toggleTrinityTheme();
            }
        });
    });
})();
