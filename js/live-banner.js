// ==========================================
// RCCG TRINITY SANCTUARY — LIVE SERVICE BANNER
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    function checkLiveService() {
        const now = new Date();
        const day = now.getDay(); // 0 = Sunday, 2 = Tuesday
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const timeInMinutes = hours * 60 + minutes;

        let isLive = false;
        let serviceTitle = "";
        let liveUrl = "https://www.facebook.com/rccgtrinity/live_videos"; // Official YouTube Stream Channel

        // Sunday: 8:30 AM (510 mins) - 12:30 PM (750 mins)
        if (day === 0 && timeInMinutes >= 510 && timeInMinutes <= 750) {
            isLive = true;
            serviceTitle = "Sunday Celebration Service is LIVE NOW!";
        }

        // Tuesday: 4:30 PM (990 mins) - 7:00 PM (1140 mins)
        if (day === 2 && timeInMinutes >= 990 && timeInMinutes <= 1140) {
            isLive = true;
            serviceTitle = "Digging Deep Bible Study is LIVE NOW!";
        }

        if (isLive) {
            let banner = document.querySelector(".live-service-banner");
            if (!banner) {
                banner = document.createElement("div");
                banner.className = "live-service-banner";
                banner.innerHTML = `
                    <div class="banner-container">
                        <span class="live-pulse-dot"></span>
                        <span class="live-text"><strong>🔴 LIVE STREAM:</strong> ${serviceTitle}</span>
                        <a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-live-watch">
                            <span>Watch Live Stream</span> <i class="fa-solid fa-arrow-right"></i>
                        </a>
                        <button class="close-live-banner" aria-label="Close Banner">&times;</button>
                    </div>
                `;

                // Inject banner at top of body
                document.body.prepend(banner);

                // Close button listener
                const closeBtn = banner.querySelector(".close-live-banner");
                if (closeBtn) {
                    closeBtn.addEventListener("click", () => {
                        banner.style.display = "none";
                    });
                }
            }
        }
    }

    checkLiveService();
});
