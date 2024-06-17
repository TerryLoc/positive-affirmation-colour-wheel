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
  // Add event listener to the onwards button to move from mood to affirmation container
  addEventListenerToElement(onwardsBtn, 'click', toggleMoodAndAffirmation);

  // Add event listener to the affirmation button
  addEventListenerToElement(
    document.getElementById('affirmationBtn'),
    'click',
    // Call the fetchAffirmation function when the button is clicked
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
  // Hide the mood container and display the affirmation container
  mood.style.display = 'none';
  affirmation.style.display = 'flex';
}

/**
 * Handles the mood button click event by fetching the color data and processing the mood click.
 * @param {HTMLElement} button - The button element that was clicked.
 * @param {HTMLElement} colourWheel - The element representing the color wheel.
 */
function handleMoodClick(button, colourWheel) {
  // Fetch the JSON file containing colors and feelings data.
  fetch('assets/json/coloursAndFeelings.json')
    .then(response => response.json()) // Parse the JSON file into a JavaScript object.
    .then(coloursAndFeelings => processMoodClick(button, colourWheel, coloursAndFeelings)); // Process the mood click with the data.
}

/**
 * Processes the mood click event by applying the corresponding colors and starting the color wheel spin.
 * @param {HTMLElement} button - The button element that was clicked.
 * @param {HTMLElement} colourWheel - The element representing the color wheel.
 * @param {Object} coloursAndFeelings - The data containing colors and feelings for each mood.
 */
function processMoodClick(button, colourWheel, coloursAndFeelings) {
  // Get the mood from the clicked button's data attribute.
  const mood = button.getAttribute('data-mood');
  
  // Store the selected mood in local storage.
  localStorage.setItem('mood', mood);
  
  // Clear any existing content in the message element.
  clearMessage();
  
  // Apply the colors associated with the selected mood.
  applyColours(Object.values(coloursAndFeelings[mood]));
  
  // Add a spinning animation to the color wheel.
  spinColourWheel(colourWheel, coloursAndFeelings[mood]);
}

/**
 * Clears the message element's inner HTML.
 */
function clearMessage() {
  const message = document.getElementById('colourChoice');
  message.innerHTML = '';
}

/**
 * Adds a spinning animation to the color wheel and selects a random color after the spin.
 * @param {HTMLElement} colourWheel - The element representing the color wheel.
 * @param {Object} moodColours - The colors associated with the selected mood.
 */
function spinColourWheel(colourWheel, moodColours) {
  colourWheel.classList.add('spin');
  setTimeout(() => {
    // Get a random color from the mood colors.
    const { randomColourName, randomColour } = getRandomColour(moodColours);
    
    // Remove the spinning animation from the color wheel.
    colourWheel.classList.remove('spin');
    
    // Set the background color of the color wheel to the randomly selected color.
    colourWheel.style.background = randomColour.hex;
    
    // Store the selected color name, color hex value, and associated feeling in local storage.
    saveSelectedColour(randomColourName, randomColour);
    
    // Call a function to display a message about the selected mood and color.
    moodColourMsg();
  }, 3000); // Set the delay for 3 seconds to match the spinning animation duration.
}

/**
 * Selects a random color from the mood colors.
 * @param {Object} moodColours - The colors associated with the selected mood.
 * @returns {Object} An object containing the random color name and the random color data.
 */
function getRandomColour(moodColours) {
  const colorsKeys = Object.entries(moodColours);
  const randomEntry = colorsKeys[Math.floor(Math.random() * colorsKeys.length)];
  return { randomColourName: randomEntry[0], randomColour: randomEntry[1] };
}

/**
 * Saves the selected color's name, hex value, and associated feeling to local storage.
 * @param {string} randomColourName - The name of the randomly selected color.
 * @param {Object} randomColour - The data of the randomly selected color.
 */
function saveSelectedColour(randomColourName, randomColour) {
  localStorage.setItem('colourName', randomColourName);
  localStorage.setItem('colour', randomColour.hex);
  localStorage.setItem('feeling', randomColour.feeling);
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

// Here we have all the functions that are needed to create the mood card after breaking it down into smaller functions

// Function to set the card colors
function setCardColours(colour) {
  const card = document.getElementById('innerCard');
  const lineArea = document.getElementById('lineArea');
  card.style.backgroundColor = colour;
  lineArea.style.backgroundColor = colour;
}

// Function to display the selected mood and color on the card
function displaySelectedMoodAndColour(colour, feeling) {
  const selectedColour = document.getElementById('selectedColour');
  const selectedFeeling = document.getElementById('selectedFeeling');
  selectedColour.innerHTML = `Colour Code: ${colour}`;
  selectedFeeling.innerHTML = `Positive Word: ${feeling}`;
}

// Function to handle successful API response
function handleApiResponse(result) {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  quote.innerHTML = result[0].quote;
  author.innerHTML = result[0].author;
}

// Function to fetch affirmation from backup quotes
async function fetchBackupAffirmation() {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const response = await fetch('assets/json/backupQuotes.json');
  const backupQuotes = await response.json();
  const result = backupQuotes[Math.floor(Math.random() * backupQuotes.length)];
  quote.innerHTML = result.quote;
  author.innerHTML = result.author;
}

// Function to change button text and header text
function updateButtonAndHeader() {
  const affirmationBtn = document.getElementById('affirmationBtn');
  const cardH1 = document.getElementById('cardH1');
  affirmationBtn.innerHTML = 'Screenshot';
  cardH1.innerHTML = 'Screen Shot Your Card';
}

// Function to add event listener for screenshot functionality
function addScreenshotListener() {
  const affirmationBtn = document.getElementById('affirmationBtn');
  affirmationBtn.addEventListener('click', function () {
    const card = document.getElementById('card');
    html2canvas(card).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpg');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'mood-card.jpg';
      link.click();
    });
    const container2 = document.getElementById('container2');
    const container3 = document.getElementById('container3');
    container2.style.display = 'none';
    container3.style.display = 'flex';
  });
}

// Main function to fetch affirmation
async function fetchAffirmation() {
  const colour = localStorage.getItem('colour');
  const feeling = localStorage.getItem('feeling');

  // Set the card colors and display the selected mood and color
  setCardColours(colour);
  displaySelectedMoodAndColour(colour, feeling);

  // Fetch the affirmation based on the mood
  let result;
  try {
    const url = getQuotesByMood(localStorage.getItem('mood'));
    const response = await fetch(url, options);
    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } 
    // Parse the response into JSON
    result = await response.json();
    handleApiResponse(result);
  } catch (error) {
    console.error(`Failed to fetch affirmation: ${error.message}`);
    await fetchBackupAffirmation();
  }
  // Update the button text and header text and add event listener for screenshot functionality
  updateButtonAndHeader();
  addScreenshotListener();
}

