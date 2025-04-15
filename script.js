const wordElement = document.getElementById('word');
const definitionElement = document.getElementById('definition');
const nextButton = document.getElementById('nextButton');
const body = document.body;
const container = document.querySelector('.container');

const colorCombos = [
  { bg: "#228DC8", text: "#FC7ED7" },
  { bg: "#FBA332", text: "#FA6128" },
  { bg: "#FA6128", text: "#0B690C" },
  
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

function displayRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordsData.length);
    const randomWord = wordsData[randomIndex];

    wordElement.textContent = randomWord.word;
    definitionElement.textContent = randomWord.definition;

   const color = colorCombos[Math.floor(Math.random() * colorCombos.length)];
   document.body.style.backgroundColor = color.bg;
   document.body.style.color = color.text;

}

nextButton.addEventListener('click', displayRandomWord);

// Display the first word on page load
displayRandomWord();
