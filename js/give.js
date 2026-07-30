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

    // 2. Giving Transfer Notification Form Handler
    const givingForm = document.getElementById("giving-notification-form");
    if (givingForm) {
        givingForm.addEventListener("submit", (e) => {
            e.preventDefault();

            let toast = document.querySelector(".toast-notification");
            if (!toast) {
                toast = document.createElement("div");
                toast.className = "toast-notification";
                document.body.appendChild(toast);
            }

            toast.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                <div>
                    <strong>Giving Notification Submitted!</strong>
                    <p>Thank you for your generosity. May God bless and open heaven's windows over you!</p>
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
