const wordElement = document.getElementById('word');
const definitionElement = document.getElementById('definition');
const usageElement = document.getElementById('usage');
const nextButton = document.getElementById('nextButton');
const body = document.body;
const container = document.querySelector('.container');

const colors = ['#F0F8FF', '#FAEBD7', '#DCDCDC', '#F5F5DC', '#FFFACD', '#F0FFF0']; // Your color palette

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function displayRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordsData.length);
    const randomWord = wordsData[randomIndex];

    wordElement.textContent = randomWord.word;
    definitionElement.textContent = randomWord.definition;
    usageElement.textContent = `Usage: ${randomWord.usage}`;

    const bgColor = getRandomColor();
    const textColor = getRandomColor(); // You might want to ensure text color contrasts with background
    body.style.backgroundColor = bgColor;
    container.style.color = textColor;
}

nextButton.addEventListener('click', displayRandomWord);

// Display the first word on page load
displayRandomWord();
