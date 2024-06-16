// Get the elements from the DOM that are needed
const startBtn = document.getElementById('start-btn');
const moodButtons = document.querySelectorAll('.mood-btn');
const colourWheel = document.getElementById('colourWheel1');
const onwardsBtn = document.getElementById('onwardsBtn');

/** The function first checks if the element exists. If it does, it adds the specified event listener to it. This is useful because trying to add an event listener to an undefined or null element would result in a JavaScript error. By checking if the element exists first, the function prevents such errors. */
function addEventListenerToElement(element, event, callback) {
  if (element) {
    element.addEventListener(event, callback);
  }
}

// Event listener for all the buttons on the site
document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners to start button
  addEventListenerToElement(
    startBtn,
    'click',
    () => (window.location.href = 'mood.html')
  );
  // Add event listener to the onwards button
  addEventListenerToElement(onwardsBtn, 'click', toggleMoodAndAffirmation);

  // Add event listener to the affirmation button
  addEventListenerToElement(
    document.getElementById('affirmationBtn'),
    'click',
    fetchAffirmation
  );
  // Add event listener to the home button
  addEventListenerToElement(
    document.getElementById('homeBtn'),
    'click',
    () => (window.location.href = 'index.html')
  );
});

// function to toggle between the mood and affirmation containers
function toggleMoodAndAffirmation() {
  const mood = document.getElementById('container');
  const affirmation = document.getElementById('container2');

  mood.style.display = 'none';
  affirmation.style.display = 'flex';
}

/**
 * Handles the mood button click event.
 * @param {HTMLElement} button - The button element that was clicked.
 * @param {HTMLElement} colourWheel - The element representing the color wheel.
 */
function handleMoodClick(button, colourWheel) {
  // Fetch the JSON file containing colors and feelings data.
  fetch('coloursAndFeelings.json')
    .then((response) => response.json()) // Parse the JSON file into a JavaScript object.
    .then((coloursAndFeelings) => {
      // Get the mood from the clicked button's data attribute.
      const mood = button.getAttribute('data-mood');

      // Store the selected mood in local storage.
      localStorage.setItem('mood', mood);

      // Clear any existing content in the message element.
      const message = document.getElementById('colourChoice');
      message.innerHTML = '';

      // Apply the colors associated with the selected mood.
      applyColours(Object.values(coloursAndFeelings[mood]));

      // Add a spinning animation to the color wheel.
      colourWheel.classList.add('spin');

      // Set a timeout to stop the spinning and select a random color.
      setTimeout(() => {
        // Get the colors and their names associated with the selected mood.
        const colorsKeys = Object.entries(coloursAndFeelings[mood]);

        // Select a random color from the list of mood colors.
        const randomEntry = colorsKeys[Math.floor(Math.random() * 6)];
        const randomColourName = randomEntry[0];
        const randomColour = randomEntry[1];

        // Remove the spinning animation from the color wheel.
        colourWheel.classList.remove('spin');

        // Set the background color of the color wheel to the randomly selected color.
        colourWheel.style.background = randomColour.hex;

        // Store the selected color name, color hex value, and associated feeling in local storage.
        localStorage.setItem('colourName', randomColourName);
        localStorage.setItem('colour', randomColour.hex);
        localStorage.setItem('feeling', randomColour.feeling);

        // Call a function to display a message about the selected mood and color.
        moodColourMsg();
      }, 3000); // Set the delay for 3 seconds to match the spinning animation duration.
    });
}

// Check if the colourWheel element exists and if there are any mood buttons.
if (colourWheel && moodButtons.length > 0) {
  // Iterate over each mood button.
  moodButtons.forEach((button) => {
    // Add a click event listener to each button.
    button.addEventListener('click', function () {
      // Call the handleMoodClick function when the button is clicked, passing the button and colourWheel as arguments.
      handleMoodClick(button, colourWheel);
    });
  });
}

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

/** This function receives the parameter of the mood and then gets the url API that is inline with that information  */
function getQuotesByMood(mood) {
  // Map the mood to a category
  const moodToCategory = {
    Angry: 'forgiveness',
    Anxious: 'courage',
    Empty: 'hope',
    Overwhelmed: 'inspirational',
    Sad: 'happiness',
    Stressed: 'humor',
  };

  // Get the category that corresponds to the given mood from the moodToCategory object
  const category = moodToCategory[mood];

  // If the mood is not found in the moodToCategory object (i.e., category is undefined), throw an error
  if (!category) {
    throw new Error(`No category found for mood: ${mood}`);
  }

  // Return the API URL, inserting the category into the URL
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
  // Get the colour and mood from local storage
  const colour = localStorage.getItem('colour');
  const feeling = localStorage.getItem('feeling');
  // Get the selected colour and mood elements from the DOM
  const selectedColour = document.getElementById('selectedColour');
  const selectedFeeling = document.getElementById('selectedFeeling');
  // Get the card and line area elements from the DOM
  const card = document.getElementById('innerCard');
  const lineArea = document.getElementById('lineArea');

  // Set the colour of the card to the random colour
  card.style.backgroundColor = colour;
  lineArea.style.backgroundColor = colour;

  // Display the selected mood and colour on the card
  selectedColour.innerHTML = `Colour Code: ${colour}`;
  selectedFeeling.innerHTML = `Positive Word: ${feeling}`;

  let result;
  // Fetch the affirmation from the API
  try {
    // Get the URL for the selected mood
    const url = getQuotesByMood(localStorage.getItem('mood'));
    const response = await fetch(url, options);

    if (!response.ok) {
      debugger;

      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      result = await response.json();
      // Display the affirmation and author to DOM
      quote.innerHTML = result[0].quote;
      author.innerHTML = result[0].author;
    }
  } catch (error) {
    // Display the affirmation and author to the console
    console.error(`Failed to fetch affirmation: ${error.message}`);
    // Backup affirmations in case the API fails
    result = backupQuotes[Math.floor(Math.random() * backupQuotes.length)];
    // Display the affirmation and author to DOM
    quote.innerHTML = result[0].quote;
    author.innerHTML = result[0].author;
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
