// ==========================================
// RCCG TRINITY SANCTUARY — FELLOWSHIP GAMES HUB ENGINE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    
    // VIEW CONTAINERS
    const gamesHubView = document.getElementById("games-hub-view");
    const gameArenaView = document.getElementById("game-arena-view");
    const btnBackHub = document.getElementById("btn-back-hub");

    // GAME VIEWS
    const viewTrivia = document.getElementById("view-trivia");
    const viewScramble = document.getElementById("view-scramble");
    const viewMemory = document.getElementById("view-memory");

    // TABS
    const tabTriviaBtn = document.getElementById("tab-trivia");
    const tabScrambleBtn = document.getElementById("tab-scramble");
    const tabMemoryBtn = document.getElementById("tab-memory");

    // BENTO LAUNCH BUTTONS
    const btnLaunchTrivia = document.getElementById("btn-launch-trivia");
    const btnLaunchScramble = document.getElementById("btn-launch-scramble");
    const btnLaunchMemory = document.getElementById("btn-launch-memory");

    // ROUTER FUNCTIONS
    function launchGame(gameType) {
        if (gamesHubView) gamesHubView.style.display = "none";
        if (gameArenaView) gameArenaView.style.display = "block";

        window.scrollTo({ top: 0, behavior: "smooth" });

        // Hide all sub-game views
        [viewTrivia, viewScramble, viewMemory].forEach(v => { if (v) v.style.display = "none"; });
        [tabTriviaBtn, tabScrambleBtn, tabMemoryBtn].forEach(b => b?.classList.remove("active"));

        if (gameType === "trivia") {
            if (viewTrivia) viewTrivia.style.display = "block";
            tabTriviaBtn?.classList.add("active");
        } else if (gameType === "scramble") {
            if (viewScramble) viewScramble.style.display = "block";
            tabScrambleBtn?.classList.add("active");
            initScrambleGame();
        } else if (gameType === "memory") {
            if (viewMemory) viewMemory.style.display = "block";
            tabMemoryBtn?.classList.add("active");
            initMemoryGame();
        }
    }

    function exitToHub() {
        clearInterval(scrambleTimer);
        if (gameArenaView) gameArenaView.style.display = "none";
        if (gamesHubView) gamesHubView.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // EVENT LISTENERS FOR LAUNCH & BACK
    if (btnLaunchTrivia) btnLaunchTrivia.addEventListener("click", () => launchGame("trivia"));
    if (btnLaunchScramble) btnLaunchScramble.addEventListener("click", () => launchGame("scramble"));
    if (btnLaunchMemory) btnLaunchMemory.addEventListener("click", () => launchGame("memory"));

    if (btnBackHub) btnBackHub.addEventListener("click", exitToHub);

    // TAB SWITCHING INSIDE ARENA
    if (tabTriviaBtn) tabTriviaBtn.addEventListener("click", () => launchGame("trivia"));
    if (tabScrambleBtn) tabScrambleBtn.addEventListener("click", () => launchGame("scramble"));
    if (tabMemoryBtn) tabMemoryBtn.addEventListener("click", () => launchGame("memory"));

    // ==========================================
    // 2. SCRIPTURE WORD SCRAMBLE ENGINE
    // ==========================================
    const SCRAMBLE_WORDS = [
        { word: "GENESIS", hint: "First book of the Holy Bible" },
        { word: "REVELATION", hint: "Final apocalyptic book of the New Testament" },
        { word: "SOLOMON", hint: "King known for divine wisdom and building the First Temple" },
        { word: "JERICHO", hint: "City whose walls fell flat after Israel marched 7 days" },
        { word: "ABRAHAM", hint: "Father of many nations and father of Isaac" },
        { word: "GOLGOTHA", hint: "The Place of a Skull where Christ was crucified" },
        { word: "MATTHEW", hint: "First Gospel book of the New Testament" },
        { word: "DEBORAH", hint: "Female judge and prophetess who led Israel to victory" },
        { word: "BETHLEHEM", hint: "City of David where Jesus Christ was born" },
        { word: "SANCTUARY", hint: "A holy place of divine presence and worship" }
    ];

    let scrambleIndex = 0;
    let scrambleScore = 0;
    let scrambleTimer = null;
    let scrambleTimeLeft = 60;

    const scrambleDisplay = document.getElementById("scramble-word-display");
    const scrambleHint = document.getElementById("scramble-hint-text");
    const scrambleInput = document.getElementById("scramble-user-input");
    const scrambleForm = document.getElementById("scramble-form");
    const scrambleScoreEl = document.getElementById("scramble-score-num");
    const scrambleTimerEl = document.getElementById("scramble-timer-num");
    const scrambleFeedback = document.getElementById("scramble-feedback");

    function initScrambleGame() {
        scrambleIndex = 0;
        scrambleScore = 0;
        scrambleTimeLeft = 60;
        if (scrambleScoreEl) scrambleScoreEl.innerText = "0";
        if (scrambleTimerEl) scrambleTimerEl.innerText = "60s";

        clearInterval(scrambleTimer);
        scrambleTimer = setInterval(() => {
            scrambleTimeLeft--;
            if (scrambleTimerEl) scrambleTimerEl.innerText = `${scrambleTimeLeft}s`;
            if (scrambleTimeLeft <= 0) {
                clearInterval(scrambleTimer);
                if (scrambleFeedback) {
                    scrambleFeedback.innerHTML = `<span style="color:#EF4444; font-weight:800;">⏱️ Time's Up! Final Score: ${scrambleScore} pts</span>`;
                }
            }
        }, 1000);

        loadNextScrambleWord();
    }

    function loadNextScrambleWord() {
        if (scrambleIndex >= SCRAMBLE_WORDS.length) {
            clearInterval(scrambleTimer);
            if (scrambleFeedback) {
                scrambleFeedback.innerHTML = `<span style="color:#22C55E; font-weight:800;">🏆 Fantastic! You completed all words! Final Score: ${scrambleScore} pts</span>`;
            }
            return;
        }

        const currentObj = SCRAMBLE_WORDS[scrambleIndex];
        const jumbled = currentObj.word.split('').sort(() => 0.5 - Math.random()).join(' ');

        if (scrambleDisplay) scrambleDisplay.innerText = jumbled;
        if (scrambleHint) scrambleHint.innerHTML = `<i class="fa-solid fa-lightbulb"></i> Hint: ${currentObj.hint}`;
        if (scrambleInput) {
            scrambleInput.value = "";
            scrambleInput.focus();
        }
        if (scrambleFeedback) scrambleFeedback.innerText = "";
    }

    if (scrambleForm) {
        scrambleForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (scrambleTimeLeft <= 0) return;

            const userGuess = (scrambleInput?.value || "").trim().toUpperCase();
            const correctWord = SCRAMBLE_WORDS[scrambleIndex].word;

            if (userGuess === correctWord) {
                scrambleScore += 10;
                if (scrambleScoreEl) scrambleScoreEl.innerText = scrambleScore;
                if (scrambleFeedback) {
                    scrambleFeedback.innerHTML = `<span style="color:#22C55E; font-weight:800;">✨ Correct! +10 pts</span>`;
                }
                scrambleIndex++;
                setTimeout(loadNextScrambleWord, 800);
            } else {
                if (scrambleFeedback) {
                    scrambleFeedback.innerHTML = `<span style="color:#EF4444; font-weight:800;">❌ Try Again!</span>`;
                }
            }
        });
    }

    // ==========================================
    // 3. MEMORY VERSE MATCH ENGINE
    // ==========================================
    const VERSE_PAIRS = [
        { id: 1, text: "The LORD is my shepherd", pairId: 1, type: "quote" },
        { id: 1, text: "I shall not want (Psalm 23:1)", pairId: 1, type: "ref" },

        { id: 2, text: "For God so loved the world", pairId: 2, type: "quote" },
        { id: 2, text: "He gave His only Son (John 3:16)", pairId: 2, type: "ref" },

        { id: 3, text: "I can do all things through Christ", pairId: 3, type: "quote" },
        { id: 3, text: "Who strengthens me (Philippians 4:13)", pairId: 3, type: "ref" },

        { id: 4, text: "In the beginning God created", pairId: 4, type: "quote" },
        { id: 4, text: "The heavens & the earth (Genesis 1:1)", pairId: 4, type: "ref" },

        { id: 5, text: "Trust in the LORD with all your heart", pairId: 5, type: "quote" },
        { id: 5, text: "Lean not on your own understanding (Proverbs 3:5)", pairId: 5, type: "ref" },

        { id: 6, text: "Jesus wept.", pairId: 6, type: "quote" },
        { id: 6, text: "Shortest verse in Scripture (John 11:35)", pairId: 6, type: "ref" }
    ];

    let flippedCards = [];
    let matchedPairsCount = 0;
    let attemptsCount = 0;
    const memoryGrid = document.getElementById("memory-cards-grid");
    const memoryScoreEl = document.getElementById("memory-matches-count");

    function initMemoryGame() {
        matchedPairsCount = 0;
        attemptsCount = 0;
        flippedCards = [];
        if (memoryScoreEl) memoryScoreEl.innerText = "0 / 6 Pairs";

        if (!memoryGrid) return;
        memoryGrid.innerHTML = "";

        // Shuffle Cards
        const cardsData = [...VERSE_PAIRS].sort(() => 0.5 - Math.random());

        cardsData.forEach((cardObj, idx) => {
            const card = document.createElement("div");
            card.className = "memory-card";
            card.dataset.pairId = cardObj.pairId;
            card.dataset.cardId = idx;

            card.innerHTML = `
                <div class="memory-card-inner">
                    <div class="memory-card-front">
                        <i class="fa-solid fa-cross"></i>
                    </div>
                    <div class="memory-card-back">
                        <span>${cardObj.text}</span>
                    </div>
                </div>
            `;

            card.addEventListener("click", () => handleCardClick(card));
            memoryGrid.appendChild(card);
        });
    }

    function handleCardClick(card) {
        if (card.classList.contains("flipped") || card.classList.contains("matched")) return;
        if (flippedCards.length >= 2) return;

        card.classList.add("flipped");
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            attemptsCount++;
            const [card1, card2] = flippedCards;

            if (card1.dataset.pairId === card2.dataset.pairId) {
                // Match Found!
                card1.classList.add("matched");
                card2.classList.add("matched");
                matchedPairsCount++;
                if (memoryScoreEl) memoryScoreEl.innerText = `${matchedPairsCount} / 6 Pairs`;

                flippedCards = [];
                if (matchedPairsCount === 6) {
                    setTimeout(() => {
                        alert(`🏆 Congratulations! You matched all Scripture Verse pairs in ${attemptsCount} attempts!`);
                    }, 400);
                }
            } else {
                // Not a Match - Flip back
                setTimeout(() => {
                    card1.classList.remove("flipped");
                    card2.classList.remove("flipped");
                    flippedCards = [];
                }, 1100);
            }
        }
    }

});
