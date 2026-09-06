// ==========================================
// RCCG TRINITY SANCTUARY — BIBLE & CHURCH TRIVIA ENGINE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    
    // QUESTION BANK (30+ Questions across 3 Categories)
    const TRIVIA_QUESTIONS = [
        // BIBLE HISTORY & MIRACLES
        {
            category: "Bible History",
            question: "How many books are there in the Old Testament of the Bible?",
            options: ["27", "39", "66", "46"],
            answer: 1,
            scripture: "The Old Testament contains 39 canonical books, from Genesis to Malachi."
        },
        {
            category: "Bible History",
            question: "What was the name of the place where Jesus was crucified?",
            options: ["Gethsemane", "Golgotha", "Bethany", "Nazareth"],
            answer: 1,
            scripture: "Golgotha (Matthew 27:33), which means 'The Place of a Skull'."
        },
        {
            category: "Bible Miracles",
            question: "Which prophet called down fire from heaven on Mount Carmel?",
            options: ["Elisha", "Elijah", "Isaiah", "Jeremiah"],
            answer: 1,
            scripture: "1 Kings 18:38 - Then the fire of the LORD fell and consumed the burnt sacrifice."
        },
        {
            category: "Bible History",
            question: "Who was Abraham's firstborn son?",
            options: ["Isaac", "Ishmael", "Jacob", "Esau"],
            answer: 1,
            scripture: "Genesis 16:15 - Hagar bore Abram a son, and Abram named his son Ishmael."
        },
        {
            category: "Bible History",
            question: "Which king built the First Temple of the LORD in Jerusalem?",
            options: ["King David", "King Solomon", "King Saul", "King Hezekiah"],
            answer: 1,
            scripture: "1 Kings 6:1 - Solomon began to build the house of the LORD in the fourth year of his reign."
        },
        {
            category: "Bible Miracles",
            question: "How many people were fed by Jesus with five loaves and two fish?",
            options: ["3,000 men", "4,000 men", "5,000 men", "10,000 men"],
            answer: 2,
            scripture: "Matthew 14:21 - Those who ate were about five thousand men, besides women and children."
        },
        {
            category: "Bible History",
            question: "What is the longest chapter in the entire Bible?",
            options: ["Psalm 23", "Psalm 119", "Psalm 91", "Isaiah 53"],
            answer: 1,
            scripture: "Psalm 119 has 176 verses, making it the longest chapter in the Scriptures."
        },
        {
            category: "Bible History",
            question: "On which day of creation did God create the sun, moon, and stars?",
            options: ["Day 1", "Day 3", "Day 4", "Day 6"],
            answer: 2,
            scripture: "Genesis 1:14-19 - God created the lights in the firmament on the Fourth Day."
        },
        {
            category: "Bible History",
            question: "Which Apostle was exiled to the Island of Patmos where he wrote the Book of Revelation?",
            options: ["Apostle Paul", "Apostle Peter", "Apostle John", "Apostle James"],
            answer: 2,
            scripture: "Revelation 1:9 - John was on the island called Patmos for the word of God."
        },
        {
            category: "Bible History",
            question: "Who was the youngest king in the Bible, ascending the throne at age 7?",
            options: ["Josiah", "Joash", "Manasseh", "David"],
            answer: 1,
            scripture: "2 Chronicles 24:1 - Joash was seven years old when he became king."
        },

        // RCCG & TRINITY SANCTUARY HISTORY
        {
            category: "RCCG History",
            question: "In what year was the Redeemed Christian Church of God (RCCG) founded?",
            options: ["1948", "1952", "1960", "1975"],
            answer: 1,
            scripture: "RCCG was founded in 1952 by Pa Josiah Akindayomi in Lagos, Nigeria."
        },
        {
            category: "RCCG History",
            question: "Who is the Founder and first General Superintendent of RCCG?",
            options: ["Pastor E.A. Adeboye", "Pa Josiah Akindayomi", "Pastor Ock Soo Park", "Archbishop Benson Idahosa"],
            answer: 1,
            scripture: "Rev. Josiah Olufemi Akindayomi was the divine founder of RCCG under God's covenant."
        },
        {
            category: "RCCG History",
            question: "Who is the current General Overseer (G.O.) of the RCCG Worldwide?",
            options: ["Pastor Enoch Adejare Adeboye", "Pastor Folu Adeboye", "Pastor J.O. Obayemi", "Pastor Peter Amenkhienan"],
            answer: 0,
            scripture: "Pastor E.A. Adeboye has served as General Overseer of RCCG since 1981."
        },
        {
            category: "Trinity Sanctuary",
            question: "RCCG Trinity Sanctuary serves as the Headquarters for which Continent administrative region?",
            options: ["Continent 1", "Continent 5", "Continent 11", "Continent 20"],
            answer: 2,
            scripture: "RCCG Trinity Sanctuary in Kaduna is the Continent 11 Headquarters."
        },
        {
            category: "RCCG History",
            question: "What is the official motto / mandate of the RCCG vision regarding Heaven?",
            options: ["To conquer the nations", "To make Heaven and take as many people with us", "To build temples nationwide", "To spread education"],
            answer: 1,
            scripture: "RCCG Vision 1: 'To make heaven. To take as many people with us.'"
        },

        // SCRIPTURE & FAITH FACTS
        {
            category: "Faith Facts",
            question: "What is the Fruit of the Spirit listed first in Galatians 5:22?",
            options: ["Joy", "Love", "Peace", "Faithfulness"],
            answer: 1,
            scripture: "Galatians 5:22 - 'But the fruit of the Spirit is love, joy, peace, longsuffering...'"
        },
        {
            category: "Faith Facts",
            question: "According to Hebrews 11:1, what is faith?",
            options: ["Believing without seeing", "The substance of things hoped for, the evidence of things not seen", "Strong emotion", "Knowledge of Scripture"],
            answer: 1,
            scripture: "Hebrews 11:1 - Now faith is the substance of things hoped for, the evidence of things not seen."
        },
        {
            category: "Bible History",
            question: "Which city's walls fell flat after Israel marched around it for 7 days?",
            options: ["Babylon", "Jericho", "Ai", "Nineveh"],
            answer: 1,
            scripture: "Joshua 6:20 - When the trumpet sounded and the people shouted, the wall fell down flat."
        },
        {
            category: "Bible History",
            question: "Who was swallowed by a great fish after fleeing God's command to preach to Nineveh?",
            options: ["Jonah", "Amos", "Hosea", "Micah"],
            answer: 0,
            scripture: "Jonah 1:17 - Now the LORD had prepared a great fish to swallow up Jonah."
        },
        {
            category: "Faith Facts",
            question: "What is the shortest verse in the entire Holy Bible?",
            options: ["Pray without ceasing.", "Jesus wept.", "Rejoice evermore.", "God is love."],
            answer: 1,
            scripture: "John 11:35 - 'Jesus wept.'"
        },
        {
            category: "Bible History",
            question: "How many books are in the New Testament?",
            options: ["22", "27", "39", "66"],
            answer: 1,
            scripture: "The New Testament comprises 27 books, starting from Matthew to Revelation."
        },
        {
            category: "Bible History",
            question: "Who interpreted Pharaoh's dreams of seven fat cows and seven lean cows in Egypt?",
            options: ["Daniel", "Joseph", "Moses", "Aaron"],
            answer: 1,
            scripture: "Genesis 41:25-30 - Joseph interpreted Pharaoh's dream of 7 years of abundance and 7 years of famine."
        },
        {
            category: "Faith Facts",
            question: "In Psalm 23:1, David writes: 'The LORD is my shepherd; ______'",
            options: ["I shall not fear", "I shall not want", "He leads my way", "His grace abounds"],
            answer: 1,
            scripture: "Psalm 23:1 - 'The LORD is my shepherd; I shall not want.'"
        },
        {
            category: "Bible History",
            question: "What was the name of the female judge who led Israel to victory alongside Barak?",
            options: ["Esther", "Deborah", "Ruth", "Hannah"],
            answer: 1,
            scripture: "Judges 4:4 - Now Deborah, a prophetess, the wife of Lapidoth, was judging Israel at that time."
        },
        {
            category: "Faith Facts",
            question: "Where did Jesus deliver the famous 'Sermon on the Mount'?",
            options: ["On a mountain near the Sea of Galilee", "In the Temple of Jerusalem", "In Nazareth", "On Mount Sinai"],
            answer: 0,
            scripture: "Matthew 5:1 - Seeing the multitudes, He went up on a mountain and taught them."
        }
    ];

    // GAME STATE VARIABLES
    let gameMode = "solo"; // "solo" or "group"
    let totalQuestionsCount = 10;
    let currentQuestions = [];
    let currentQIndex = 0;
    let score = 0;
    let teamAScore = 0;
    let teamBScore = 0;
    let activeTeam = "A"; // "A" or "B" for group mode
    let userAnswers = [];
    let isOptionSelected = false;

    // DOM ELEMENTS
    const setupCard = document.getElementById("trivia-setup-card");
    const arenaCard = document.getElementById("trivia-arena-card");
    const resultsCard = document.getElementById("trivia-results-card");

    const modeSoloBtn = document.getElementById("mode-solo");
    const modeGroupBtn = document.getElementById("mode-group");
    const startTriviaBtn = document.getElementById("start-trivia-btn");
    const qCountButtons = document.querySelectorAll(".qcount-btn");

    const categoryTag = document.getElementById("category-tag");
    const qCounterText = document.getElementById("q-counter-text");
    const soloScoreBadge = document.getElementById("solo-score-badge");
    const teamScoreboard = document.getElementById("team-scoreboard");
    const teamAPointsEl = document.getElementById("team-a-points");
    const teamBPointsEl = document.getElementById("team-b-points");
    const teamACard = document.getElementById("team-a-card");
    const teamBCard = document.getElementById("team-b-card");

    const progressBarFill = document.getElementById("progress-bar-fill");
    const questionTitle = document.getElementById("question-title");
    const optionsGrid = document.getElementById("options-grid");
    const explanationBox = document.getElementById("explanation-box");
    const explanationText = document.getElementById("explanation-text");
    const scriptureRefText = document.getElementById("scripture-ref-text");
    const nextQuestionBtn = document.getElementById("next-question-btn");

    const finalScoreCircle = document.getElementById("final-score-circle");
    const finalScoreTotal = document.getElementById("final-score-total");
    const finalRankBadge = document.getElementById("final-rank-badge");
    const reviewList = document.getElementById("review-list");
    const replayBtn = document.getElementById("replay-btn");

    // SETUP MODE & COUNT SELECTION
    if (modeSoloBtn && modeGroupBtn) {
        modeSoloBtn.addEventListener("click", () => {
            gameMode = "solo";
            modeSoloBtn.classList.add("selected");
            modeGroupBtn.classList.remove("selected");
        });

        modeGroupBtn.addEventListener("click", () => {
            gameMode = "group";
            modeGroupBtn.classList.add("selected");
            modeSoloBtn.classList.remove("selected");
        });
    }

    qCountButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            qCountButtons.forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            totalQuestionsCount = parseInt(btn.dataset.count) || 10;
        });
    });

    if (startTriviaBtn) {
        startTriviaBtn.addEventListener("click", startGame);
    }

    if (replayBtn) {
        replayBtn.addEventListener("click", resetToSetup);
    }

    if (nextQuestionBtn) {
        nextQuestionBtn.addEventListener("click", handleNextQuestion);
    }

    // GAME ENGINE FUNCTIONS
    function startGame() {
        // Shuffle & Slice Questions
        let shuffled = [...TRIVIA_QUESTIONS].sort(() => 0.5 - Math.random());
        currentQuestions = shuffled.slice(0, Math.min(totalQuestionsCount, TRIVIA_QUESTIONS.length));
        
        currentQIndex = 0;
        score = 0;
        teamAScore = 0;
        teamBScore = 0;
        activeTeam = "A";
        userAnswers = [];

        // UI View Switch
        setupCard.style.display = "none";
        resultsCard.style.display = "none";
        arenaCard.style.display = "block";

        if (gameMode === "group") {
            teamScoreboard.style.display = "flex";
            soloScoreBadge.style.display = "none";
            updateTeamBoardUI();
        } else {
            teamScoreboard.style.display = "none";
            soloScoreBadge.style.display = "inline-flex";
            soloScoreBadge.innerHTML = `<i class="fa-solid fa-star"></i> Score: 0`;
        }

        renderQuestion();
    }

    function renderQuestion() {
        isOptionSelected = false;
        explanationBox.style.display = "none";
        nextQuestionBtn.style.display = "none";

        const q = currentQuestions[currentQIndex];

        // Header Info
        categoryTag.innerHTML = `<i class="fa-solid fa-bookmark"></i> ${q.category}`;
        qCounterText.innerText = `Question ${currentQIndex + 1} of ${currentQuestions.length}`;
        
        // Progress Bar
        const progressPercent = ((currentQIndex) / currentQuestions.length) * 100;
        progressBarFill.style.width = `${progressPercent}%`;

        // Question Title
        questionTitle.innerText = q.question;

        // Render Options
        optionsGrid.innerHTML = "";
        const badges = ["A", "B", "C", "D"];

        q.options.forEach((optText, idx) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.innerHTML = `
                <span class="option-badge">${badges[idx]}</span>
                <span>${optText}</span>
            `;
            btn.addEventListener("click", () => selectOption(idx, btn));
            optionsGrid.appendChild(btn);
        });
    }

    function selectOption(selectedIndex, selectedBtn) {
        if (isOptionSelected) return;
        isOptionSelected = true;

        const q = currentQuestions[currentQIndex];
        const allOptionBtns = optionsGrid.querySelectorAll(".option-btn");

        allOptionBtns.forEach(btn => btn.classList.add("disabled"));

        const isCorrect = (selectedIndex === q.answer);

        if (isCorrect) {
            selectedBtn.classList.add("correct");
            if (gameMode === "group") {
                if (activeTeam === "A") teamAScore += 10;
                else teamBScore += 10;
                updateTeamBoardUI();
            } else {
                score += 10;
                soloScoreBadge.innerHTML = `<i class="fa-solid fa-star"></i> Score: ${score}`;
            }
        } else {
            selectedBtn.classList.add("incorrect");
            // Highlight correct answer
            allOptionBtns[q.answer].classList.add("correct");
        }

        // Save User Answer for Summary
        userAnswers.push({
            question: q.question,
            selectedText: q.options[selectedIndex],
            correctText: q.options[q.answer],
            isCorrect: isCorrect,
            scripture: q.scripture
        });

        // Reveal Scripture Explanation
        explanationText.innerText = q.scripture;
        explanationBox.style.display = "block";

        // Show Next Button
        if (currentQIndex < currentQuestions.length - 1) {
            nextQuestionBtn.innerHTML = `<span>Next Question</span> <i class="fa-solid fa-arrow-right"></i>`;
        } else {
            nextQuestionBtn.innerHTML = `<span>See Final Results</span> <i class="fa-solid fa-trophy"></i>`;
        }
        nextQuestionBtn.style.display = "inline-flex";
    }

    function handleNextQuestion() {
        if (gameMode === "group") {
            // Alternate team turns
            activeTeam = activeTeam === "A" ? "B" : "A";
            updateTeamBoardUI();
        }

        currentQIndex++;
        if (currentQIndex < currentQuestions.length) {
            renderQuestion();
        } else {
            renderResults();
        }
    }

    function updateTeamBoardUI() {
        teamAPointsEl.innerText = teamAScore;
        teamBPointsEl.innerText = teamBScore;

        if (activeTeam === "A") {
            teamACard.classList.add("active-team");
            teamBCard.classList.remove("active-team");
        } else {
            teamBCard.classList.add("active-team");
            teamACard.classList.remove("active-team");
        }
    }

    // WhatsApp Viral Share Handler
    const shareWaBtn = document.getElementById("share-wa-btn");
    if (shareWaBtn) {
        shareWaBtn.addEventListener("click", () => {
            let maxPossible = currentQuestions.length * 10;
            let shareText = "";

            if (gameMode === "group") {
                let winnerText = teamAScore > teamBScore ? "Team Navy Wins!" : teamAScore < teamBScore ? "Team Crimson Wins!" : "It's a Tie!";
                shareText = `🎮 *TRINITY SANCTUARY BIBLE ARCADE BATTLE*\n` +
                            `*Result:* ${winnerText} (${teamAScore} - ${teamBScore} pts)\n\n` +
                            `Can your group or home cell beat our Bible Arcade score? 📖✨\n` +
                            `Play Bible Trivia, Word Scramble & Memory Match here: https://rccgtrinitysanctuary.com/trivia.html`;
            } else {
                let percentage = Math.round((score / maxPossible) * 100);
                let rank = percentage >= 90 ? "👑 Scripture Grandmaster" : percentage >= 70 ? "🏆 Faith Champion" : percentage >= 50 ? "🌟 Word Explorer" : "📖 Seeker of Truth";
                shareText = `🎮 *MY BIBLE ARCADE SCORE: ${score}/${maxPossible} (${percentage}%)*\n` +
                            `*Rank Awarded:* ${rank}\n\n` +
                            `I just completed the Bible Arcade challenge at RCCG Trinity Sanctuary! Can you beat my score? 📖✨\n` +
                            `Play Bible Trivia, Word Scramble & Memory Match here: https://rccgtrinitysanctuary.com/trivia.html`;
            }

            const waUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
            window.open(waUrl, "_blank");
        });
    }

    function renderResults() {
        arenaCard.style.display = "none";
        resultsCard.style.display = "block";

        progressBarFill.style.width = "100%";

        let finalScoreDisplay = 0;
        let maxPossible = currentQuestions.length * 10;

        const celebrationTitle = document.getElementById("final-celebration-title");
        const celebrationSub = document.getElementById("final-celebration-sub");

        if (gameMode === "group") {
            finalScoreDisplay = Math.max(teamAScore, teamBScore);
            let winnerText = teamAScore > teamBScore ? "Team Navy Victory!" : teamAScore < teamBScore ? "Team Crimson Victory!" : "It's a Tie!";
            finalRankBadge.innerHTML = `<i class="fa-solid fa-users"></i> ${winnerText}`;
            finalScoreCircle.querySelector(".score-circle-number").innerText = `${teamAScore} - ${teamBScore}`;
            finalScoreTotal.innerText = `Team Navy vs Team Crimson`;
            if (celebrationTitle) celebrationTitle.innerText = "Group Battle Completed!";
            if (celebrationSub) celebrationSub.innerText = "Awesome teamwork reflecting on God's Word together!";
        } else {
            finalScoreDisplay = score;
            finalScoreCircle.querySelector(".score-circle-number").innerText = score;
            finalScoreTotal.innerText = `Out of ${maxPossible} pts`;

            // Calculate Solo Rank & Psychological Messaging
            let percentage = (score / maxPossible) * 100;
            let rankTitle = "Seeker of Truth";
            let rankIcon = "fa-book-open";
            let celebTitle = "Keep Digging into the Word!";
            let celebSub = "Every verse brings deeper wisdom and understanding.";

            if (percentage >= 90) {
                rankTitle = "Scripture Grandmaster";
                rankIcon = "fa-crown";
                celebTitle = "Unstoppable Bible Scholar!";
                celebSub = "Sensational knowledge of Scripture and Church history. You're a true leader of the Word!";
            } else if (percentage >= 70) {
                rankTitle = "Faith Champion";
                rankIcon = "fa-trophy";
                celebTitle = "Outstanding Faith Performance!";
                celebSub = "Solid biblical foundation! You know your Scriptures well.";
            } else if (percentage >= 50) {
                rankTitle = "Word Explorer";
                rankIcon = "fa-star";
                celebTitle = "Great Effort!";
                celebSub = "You're growing strong in faith and Biblical understanding.";
            }

            if (celebrationTitle) celebrationTitle.innerText = celebTitle;
            if (celebrationSub) celebrationSub.innerText = celebSub;

            finalRankBadge.innerHTML = `<i class="fa-solid ${rankIcon}"></i> ${rankTitle}`;
        }

        // Render Review List
        reviewList.innerHTML = "";
        userAnswers.forEach((ans, idx) => {
            const item = document.createElement("div");
            item.className = `review-item ${ans.isCorrect ? "review-correct" : "review-incorrect"}`;
            item.innerHTML = `
                <div class="review-q-title">Q${idx + 1}: ${ans.question}</div>
                <div class="review-ans-text">
                    ${ans.isCorrect ? `🟢 <strong>Correct:</strong> ${ans.selectedText}` : `🔴 <strong>Your Answer:</strong> ${ans.selectedText} | 🟢 <strong>Correct:</strong> ${ans.correctText}`}
                </div>
                <div class="scripture-ref" style="margin-top:0.4rem;">📖 ${ans.scripture}</div>
            `;
            reviewList.appendChild(item);
        });
    }

    function resetToSetup() {
        resultsCard.style.display = "none";
        arenaCard.style.display = "none";
        setupCard.style.display = "block";
    }

});
