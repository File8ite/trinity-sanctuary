// ==========================================
// RCCG TRINITY SANCTUARY — GLOBAL SCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Header Scroll State
    const header = document.querySelector(".header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // 2. Floating Back To Top Button
    const backToTopBtn = document.createElement("button");
    backToTopBtn.className = "back-to-top";
    backToTopBtn.setAttribute("aria-label", "Back to top");
    backToTopBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
    document.body.appendChild(backToTopBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 350) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 3. Service Countdown Timer (Target: Next Sunday at 9:00 AM)
    const countdownDays = document.getElementById("cd-days");
    const countdownHours = document.getElementById("cd-hours");
    const countdownMins = document.getElementById("cd-mins");
    const countdownSecs = document.getElementById("cd-secs");

    if (countdownDays && countdownHours && countdownMins && countdownSecs) {
        function getNextSundayService() {
            const now = new Date();
            const nextSunday = new Date();
            nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
            nextSunday.setHours(9, 0, 0, 0);

            if (now >= nextSunday) {
                nextSunday.setDate(nextSunday.getDate() + 7);
            }
            return nextSunday;
        }

        const targetDate = getNextSundayService();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                countdownDays.innerText = "00";
                countdownHours.innerText = "00";
                countdownMins.innerText = "00";
                countdownSecs.innerText = "00";
                return;
            }

            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);

            countdownDays.innerText = d < 10 ? '0' + d : d;
            countdownHours.innerText = h < 10 ? '0' + h : h;
            countdownMins.innerText = m < 10 ? '0' + m : m;
            countdownSecs.innerText = s < 10 ? '0' + s : s;
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // 4. Contact Form WhatsApp & Toast Notification Handler
    const contactForms = document.querySelectorAll(".contact-form form:not(#giving-notification-form)");
    contactForms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameInput = form.querySelector("input[type='text']");
            const phoneInput = form.querySelector("input[type='tel']");
            const emailInput = form.querySelector("input[type='email']");
            const messageInput = form.querySelector("textarea");

            const name = nameInput ? nameInput.value : "Visitor";
            const phone = phoneInput ? phoneInput.value : "N/A";
            const email = emailInput ? emailInput.value : "N/A";
            const msg = messageInput ? messageInput.value : "";

            const waText = `*NEW CONTACT INQUIRY*\n` +
                           `*RCCG Trinity Sanctuary*\n\n` +
                           `👤 *Name:* ${name}\n` +
                           `📞 *Phone:* ${phone}\n` +
                           `📧 *Email:* ${email}\n` +
                           (msg ? `📝 *Message:* ${msg}` : ``);

            const waUrl = `https://wa.me/2348038824894?text=${encodeURIComponent(waText)}`;
            window.open(waUrl, "_blank");

            let toast = document.querySelector(".toast-notification");
            if (!toast) {
                toast = document.createElement("div");
                toast.className = "toast-notification";
                document.body.appendChild(toast);
            }

            toast.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>Redirected to WhatsApp Hotline (+234 803 882 4894). We will respond shortly.</p>
                </div>
            `;

            toast.classList.add("show");
            form.reset();

            setTimeout(() => {
                toast.classList.remove("show");
            }, 5000);
        });
    });

    // 4b. Footer Newsletter Subscription Handler (Legal Opt-In & FormSubmit)
    const newsletterForm = document.getElementById("footer-newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const emailInput = document.getElementById("newsletter-email");
            const consentCheck = document.getElementById("newsletter-consent");

            if (!emailInput || !emailInput.value.trim()) return;
            if (consentCheck && !consentCheck.checked) {
                alert("Please agree to the privacy consent checkbox to subscribe.");
                return;
            }

            const subscriberEmail = emailInput.value.trim();

            // Background submission via FormSubmit
            fetch("https://formsubmit.co/ajax/info@rccgtrinitysanctuary.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: "NEW NEWSLETTER SUBSCRIBER — RCCG Trinity Sanctuary",
                    email: subscriberEmail,
                    consent_agreed: "YES - Consented to receiving weekly updates and sermon outlines",
                    subscribed_at: new Date().toLocaleString()
                })
            }).catch(err => console.log("Background email send", err));

            // Display Toast Notification
            let toast = document.querySelector(".toast-notification");
            if (!toast) {
                toast = document.createElement("div");
                toast.className = "toast-notification";
                document.body.appendChild(toast);
            }

            toast.innerHTML = `
                <i class="fa-solid fa-envelope-circle-check"></i>
                <div>
                    <strong>Subscribed Successfully!</strong>
                    <p>Thank you! You will receive weekly sermon outlines and Trinity Sanctuary updates at ${subscriberEmail}.</p>
                </div>
            `;

            toast.classList.add("show");
            newsletterForm.reset();

            setTimeout(() => {
                toast.classList.remove("show");
            }, 6000);
        });
    }

    // 5. Video Modal Player for Sermons
    const playButtons = document.querySelectorAll(".play-button, .watch-sermon-btn");
    if (playButtons.length > 0) {
        let videoModal = document.querySelector(".video-modal");
        if (!videoModal) {
            videoModal = document.createElement("div");
            videoModal.className = "video-modal";
            videoModal.innerHTML = `
                <div class="video-modal-content">
                    <button class="close-video-modal" aria-label="Close Video">&times;</button>
                    <div class="video-container">
                        <iframe id="sermon-iframe" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            `;
            document.body.appendChild(videoModal);
        }

        const iframe = videoModal.querySelector("#sermon-iframe");
        const closeBtn = videoModal.querySelector(".close-video-modal");

        playButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                // Default inspirational church sermon stream link
                const defaultVideoUrl = "https://www.youtube.com/embed/live_stream?channel=RCCG"; 
                const videoUrl = btn.getAttribute("data-video-url") || "https://www.youtube.com/embed/WA3PF8ebi9g";
                iframe.src = videoUrl + "?autoplay=1";
                videoModal.classList.add("active");
            });
        });

        const closeVideo = () => {
            videoModal.classList.remove("active");
            iframe.src = "";
        };

        if (closeBtn) closeBtn.addEventListener("click", closeVideo);
        videoModal.addEventListener("click", (e) => {
            if (e.target === videoModal) closeVideo();
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && videoModal.classList.contains("active")) {
                closeVideo();
            }
        });
    }

});