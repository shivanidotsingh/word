const wordElement = document.getElementById('word');
        const definitionElement = document.getElementById('definition');
        const nextButton = document.getElementById('nextButton');
        const toggleBtn = document.getElementById('toggleBtn');
        const singleView = document.getElementById('singleView');
        const gridView = document.getElementById('gridView');
        const wordGrid = document.getElementById('wordGrid');
        const body = document.body;

        const colorCombos = [
          { bg: "#CBA0AA", text: "#FAE397" },
          { bg: "#B6CAC0", text: "#C02A1B" },  
          { bg: "#F9F7E8", text: "#62BFAD" },
          { bg: "#6C5B7B", text: "#C06C84" },
          { bg: "#355C7D", text: "#F67280" },
          { bg: "#F3C9DD", text: "#72AEC5" },
          { bg: "#119DA4", text: "#FFC857" },
          { bg: "#20AD65", text: "#FEC8BE" },
          { bg: "#9C9CDD", text: "#CAE9BF" },
          { bg: "#B2B2B2", text: "#E9FF27" },
          { bg: "#8AA9C6", text: "#D1BDFF" },
          { bg: "#393E41", text: "#E94F37" }
        ];

        let isGridView = false;

        function displayRandomWord() {
            const randomIndex = Math.floor(Math.random() * wordsData.length);
            const randomWord = wordsData[randomIndex];

            wordElement.textContent = randomWord.word;
            definitionElement.textContent = randomWord.definition;

            const color = colorCombos[Math.floor(Math.random() * colorCombos.length)];
            document.body.style.backgroundColor = color.bg;
            document.body.style.color = color.text;
        }

        function toggleView() {
            if (isGridView) {
                // Switch to single view
                gridView.style.display = 'none';
                singleView.style.display = 'block';
                toggleBtn.textContent = '=';
                isGridView = false;
                displayRandomWord();
            } else {
                // Switch to grid view
                singleView.style.display = 'none';
                gridView.style.display = 'block';
                toggleBtn.textContent = '≠';
                isGridView = true;
                
                // Generate grid with random colors
                wordGrid.innerHTML = wordsData.map(item => {
                    const color = colorCombos[Math.floor(Math.random() * colorCombos.length)];
                    return `<div class="word-card" 
                                style="background-color: ${color.bg}; color: ${color.text};"
                                data-word="${item.word}" 
                                data-definition="${item.definition}">
                                <div class="card-word">${item.word}</div>
                                <div class="card-definition">${item.definition}</div>
                            </div>`;
                }).join('');
            }
        }

        function selectWordFromGrid(word, definition) {
            wordElement.textContent = word;
            definitionElement.textContent = definition;
            
            // Switch back to single view
            gridView.style.display = 'none';
            singleView.style.display = 'block';
            toggleBtn.textContent = '=';
            isGridView = false;
            
            // Set random color
            const color = colorCombos[Math.floor(Math.random() * colorCombos.length)];
            document.body.style.backgroundColor = color.bg;
            document.body.style.color = color.text;
        }

        // Event listeners
        nextButton.addEventListener('click', displayRandomWord);
        toggleBtn.addEventListener('click', toggleView);

        wordGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.word-card');
            if (card) {
                const word = card.getAttribute('data-word');
                const definition = card.getAttribute('data-definition');
                selectWordFromGrid(word, definition);
            }
        });

        // Display the first word on page load
        displayRandomWord();
