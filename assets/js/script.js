document.addEventListener('DOMContentLoaded', function () {
  // Get the elements from the DOM
  const startBtn = document.getElementById('start-btn');
  const moodButtons = document.querySelectorAll('.mood-btn');
  const colourWheel = document.getElementById('colourWheel1');
  const onwardsBtn = document.getElementById('onwardsBtn');

  // Add event listener to the start button
  if (startBtn) {
    startBtn.addEventListener('click', function () {
      window.location.href = 'mood.html';
    });
  }

  // Redirect from the mood to affirmations container
  if (onwardsBtn) {
    onwardsBtn.addEventListener('click', function () {
      const mood = document.getElementById('container');
      const affirmation = document.getElementById('container2');

      // Hide the mood container and display the affirmation container
      mood.style.display = 'none';
      affirmation.style.display = 'flex';
    });
  }

  // Fetch affirmation when the affirmation button is clicked
  const affirmationBtn = document.getElementById('affirmationBtn');
  if (affirmationBtn) {
    affirmationBtn.addEventListener('click', fetchAffirmation);
  }

  // Return the home page when the home button is clicked
  const homeBtn = document.getElementById('homeBtn');
  if (homeBtn) {
    homeBtn.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
  }

  // Check if the colourWheel object exists and if the moodButtons array has at least one element
  if (colourWheel && moodButtons.length > 0) {
    // Loop through each button in the moodButtons array
    moodButtons.forEach((button) => {
      button.addEventListener('click', function () {
        // Fetch the colours from the JSON file
        fetch('coloursAndFeelings.json')
          .then((response) => response.json())
          .then((coloursAndFeelings) => {
            // Get the mood from the clicked button's data-mood attribute & store it in local storage
            const mood = button.getAttribute('data-mood');
            localStorage.setItem('mood', mood);

            const message = document.getElementById('colourChoice');
            message.innerHTML = '';

            // Pass the colors for the current mood to the applyColours function
            applyColours(Object.values(coloursAndFeelings[mood]));

            // Add the spin class to the colour wheel to animate it
            colourWheel.classList.add('spin');

            // Remove the spin class after 6 seconds and change the colour of the wheel to the randomly selected colour
            setTimeout(() => {
              const colorsKeys = Object.entries(coloursAndFeelings[mood]);
              const randomEntry = colorsKeys[Math.floor(Math.random() * 6)];
              //To get the random colour name and colour hex and feeling
              const randomColourName = randomEntry[0];
              const randomColour = randomEntry[1];

              // Change the background color of the colour wheel to the randomly selected color
              colourWheel.classList.remove('spin');
              colourWheel.style.background = randomColour.hex;

              //store the random color name, colour and feeling in local storage
              localStorage.setItem('colourName', randomColourName);
              localStorage.setItem('colour', randomColour.hex);
              localStorage.setItem('feeling', randomColour.feeling);

              // Calling the function to print the message
              moodColourMsg();
            }, 3000);
          });
      });
    });
  }
});

/** This function creates a conic gradient with the colors for the specified mood. Each color covers a 30-degree segment of the circle, starting from 0 degrees and ending at 360 degrees.
 */
function applyColours(colours) {
  const colourWheel = document.getElementById('colourWheel1');

  // Check if colours is an array
  if (!Array.isArray(colours)) {
    console.error('colours is not an array');
    return;
  }

  // Create the gradient string by mapping over the colors array and joining them together
  const gradient = colours
    .map(
      (color, index) => `${color.hex} ${index * 60}deg ${(index + 1) * 60}deg`
    )
    .join(',');

  // Set the background style of the colour wheel to the conic gradient
  colourWheel.style.background = `conic-gradient(${gradient})`;
}

/**
This function displays a message with the colour name, a positive word, and mood to the user.
 */
function moodColourMsg() {
  const mood = localStorage.getItem('mood');
  const colourName = localStorage.getItem('colourName');
  const colour = localStorage.getItem('colour');
  const feeling = localStorage.getItem('feeling');
  const colourChoice = document.getElementById('colourChoice');

  // Scroll to the bottom of the page
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });

  // Displayed message with CSS.
  colourChoice.innerHTML = `Feeling a bit ${mood} today? Let the colour <span style="color: ${colour}; text-shadow: 1px 1px 2px #fbf4e6; font-size: 110%">${colourName}</span> embrace your soul and elevate your spirits with the embodiment of <span style='text-shadow: 1px 1px 2px #fbf4e6; font-size: 110%'>${feeling}</span>! Click the button below for your uplifting affirmation.`;
}



// // API URL
// const category = 'happiness';
// const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

/** This function receives the parameter of the mood and then gets the url API that is inline with that information  */
function getQuotesByMood(mood) {
  // Map the mood to a category
 const moodToCategory = {
  'Angry': 'forgiveness',
  'Anxious': 'courage',
  'Empty': 'family',
  'Overwhelmed': 'inspirational',
  'Sad': 'happiness',
  'Stressed': 'humor',
};

// 
const category = moodToCategory[mood];
if (!category) {
  throw new Error(`No category found for mood: ${mood}`);
}

return `https://api.api-ninjas.com/v1/quotes?category=${category}`;
}

// Options for the fetch request
const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': 'KQg0i+HnB0+QxWeM8ljLmQ==dLi31iCPLVOfUTI4',
    'Content-Type': 'application/json',
  },
};
/**
 Fetches an affirmation from the API and displays it on the page.
 */
async function fetchAffirmation() {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const colour = localStorage.getItem('colour');
  const feeling = localStorage.getItem('feeling');


  // Get the colour from local storage
  const card = document.getElementById('innerCard');
  const lineArea = document.getElementById('lineArea');
  // Set the colour of the card to the random colour
  card.style.backgroundColor = colour;
  lineArea.style.backgroundColor = colour;


  // Get the selected colour and mood elements from the DOM
  const selectedColour = document.getElementById('selectedColour');
  const selectedFeeling = document.getElementById('selectedFeeling');

  // Display the selected mood and colour on the card
  selectedColour.innerHTML = `Colour Code: ${colour}`;
  selectedFeeling.innerHTML = `Positive Word: ${feeling}`;

  // Fetch the affirmation from the API
  try {
    // Get the URL for the selected mood
    const url = getQuotesByMood(localStorage.getItem('mood'));
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    // Display the affirmation and author to DOM
    quote.innerHTML = result[0].quote;
    author.innerHTML = result[0].author;
  } catch (error) {
    console.error(`Failed to fetch affirmation: ${error.message}`);
  }

  // Change button text to 'Screenshot' & h1 text to 'Screen Shot Your Card'
  const affirmationBtn = document.getElementById('affirmationBtn');
  const cardH1 = document.getElementById('cardH1');
  affirmationBtn.innerHTML = 'Screenshot';
  cardH1.innerHTML = 'Screen Shot Your Card';

  // Add event listener to the button
  affirmationBtn.addEventListener('click', function () {
    const card = document.getElementById('card');
    html2canvas(card).then((canvas) => {
      // Convert the canvas to a data URL
      const imgData = canvas.toDataURL('image/jpg');

      // Create a link element
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'mood-card.jpg';

      // Download the image
      link.click();
    });
    // Hide the card and display the final container
    const container2 = document.getElementById('container2');
    const container3 = document.getElementById('container3');
    container2.style.display = 'none';
    container3.style.display = 'flex';
  });
}
