// ==========================================
// RCCG TRINITY SANCTUARY — GIVING PAGE HANDLER
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Account Number Clipboard Copy Feature
    const copyBtn = document.getElementById("copy-acc-btn");
    const accountNumElement = document.getElementById("account-number-text");

    if (copyBtn && accountNumElement) {
        copyBtn.addEventListener("click", () => {
            const accountNumber = accountNumElement.innerText.trim() || "0692019725";

            // Clipboard API with fallback
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(accountNumber).then(() => {
                    handleCopySuccess();
                }).catch(err => {
                    fallbackCopyText(accountNumber);
                });
            } else {
                fallbackCopyText(accountNumber);
            }
        });

        function fallbackCopyText(text) {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                handleCopySuccess();
            } catch (err) {
                console.error('Fallback copy failed', err);
            }
            document.body.removeChild(textArea);
        }

        function handleCopySuccess() {
            copyBtn.classList.add("copied");
            copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;

            // Display Toast Notification
            let toast = document.querySelector(".toast-notification");
            if (!toast) {
                toast = document.createElement("div");
                toast.className = "toast-notification";
                document.body.appendChild(toast);
            }

            toast.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                <div>
                    <strong>Account Number Copied!</strong>
                    <p>Eco Bank: 0692019725 has been copied to your clipboard.</p>
                </div>
            `;
            toast.classList.add("show");

            setTimeout(() => {
                copyBtn.classList.remove("copied");
                copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy Account Number`;
            }, 3000);

            setTimeout(() => {
                toast.classList.remove("show");
            }, 4500);
        }
    }

    // 2. Giving Transfer Notification Form Handler (WhatsApp + Toast)
    const givingForm = document.getElementById("giving-notification-form");
    if (givingForm) {
        givingForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("giver-name")?.value || "";
            const phone = document.getElementById("giver-phone")?.value || "";
            const category = document.getElementById("giving-category")?.value || "";
            const amount = document.getElementById("giving-amount")?.value || "";
            const date = document.getElementById("transfer-date")?.value || "";
            const ref = document.getElementById("ref-number")?.value || "N/A";
            const note = document.getElementById("giver-note")?.value || "";

            // Format WhatsApp Message for Church Hotline (+234 803 882 4894)
            const waText = `*GIVING TRANSFER NOTIFICATION*\n` +
                           `*RCCG Trinity Sanctuary*\n\n` +
                           `👤 *Name:* ${name}\n` +
                           `📞 *Phone:* ${phone}\n` +
                           `🏷️ *Category:* ${category}\n` +
                           `💰 *Amount:* ₦${amount}\n` +
                           `🏦 *Bank:* Eco Bank (0692019725)\n` +
                           `📅 *Date:* ${date}\n` +
                           `🧾 *Ref / Teller:* ${ref}\n` +
                           (note ? `📝 *Note:* ${note}` : ``);

            const waUrl = `https://wa.me/2348038824894?text=${encodeURIComponent(waText)}`;

            // Open WhatsApp in new tab
            window.open(waUrl, "_blank");

            // Display Toast Notification
            let toast = document.querySelector(".toast-notification");
            if (!toast) {
                toast = document.createElement("div");
                toast.className = "toast-notification";
                document.body.appendChild(toast);
            }

            toast.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                <div>
                    <strong>Giving Notification Sent!</strong>
                    <p>Redirected to WhatsApp Hotline & Church Audit Office. God bless your giving!</p>
                </div>
            `;

            toast.classList.add("show");
            givingForm.reset();

            setTimeout(() => {
                toast.classList.remove("show");
            }, 5000);
        });
    }

});
