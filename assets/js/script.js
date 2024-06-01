'use strict';
// Add event listener to the document when it's ready
document.addEventListener('DOMContentLoaded', function () {
  // Get the start button and mood buttons
  const startBtn = document.getElementById('start-btn');
  const moodButtons = document.querySelectorAll('.mood-btn');
  const colourWheel = document.getElementById('colourWheel1');
  const onwardsBtn = document.getElementById('onwardsBtn');

  // Add event listener to the start button
  if (startBtn) {
    startBtn.addEventListener('click', function () {
      // Redirect to the mood page
      window.location.href = 'mood.html';
    });
  } else if (onwardsBtn) {
    // Add event listener to the onwards button if the start button is not available
    onwardsBtn.addEventListener('click', function () {
      // Redirect to the affirmation page
      window.location.href = 'affirmation.html';
    });
  }

  // Check if the colour wheel and mood buttons are available before adding event listeners
  if (colourWheel && moodButtons.length > 0) {
    // Add event listener to each mood button
    moodButtons.forEach((button) => {
      button.addEventListener('click', function () {
        // Fetch the colours from the JSON file
        fetch('colours.json')
          .then((response) => response.json())
          .then((colours) => {
            // Get the mood from the clicked button's data-mood attribute
            const mood = button.getAttribute('data-mood');
            //store the mood in local storage
            localStorage.setItem('mood', mood);

            // Apply the colours for the selected mood
            applyColors(colours[mood]);

            // Add the spin class to the colour wheel to animate it
            colourWheel.classList.add('spin');
            // Remove the spin class after 8 seconds and change the colour of the wheel to the randomly selected colour
            setTimeout(() => {
              // Get the keys and values of the colours for the selected mood using Object.entries
              const colorsKeys = Object.entries(colours[mood]);
              const randomEntry = colorsKeys[Math.floor(Math.random() * 6)];

              //store the random color name and color
              const randomColorName = randomEntry[0];
              const randomColor = randomEntry[1];

              // Change the background color of the colour wheel to the randomly selected color
              colourWheel.classList.remove('spin');
              colourWheel.style.background = randomColor;

              //store the random color name and color in local storage
              localStorage.setItem('colorName', randomColorName);
              localStorage.setItem('color', randomColor);

              // Call the function here
              randomMoodColour();
            }, 6000);
          })
          // Log an error if the JSON file can't be fetched
          .catch((error) =>
            console.error('Error: Can not connect to json', error)
          );
      });
    });
  }
});

/** This function creates a conic gradient with the colors for the specified mood. Each color covers a 30-degree segment of the circle, starting from 0 degrees and ending at 360 degrees.
 */
function applyColors(moodColors) {
  // Get the colour wheel element
  const colourWheel1 = document.getElementById('colourWheel1');

  // Get the colors array from the moodColors object
  const colors = Object.values(moodColors);

  // Create the gradient string by mapping over the colors array and joining them together
  const gradient = colors
    .map((color, index) => `${color} ${index * 60}deg ${(index + 1) * 60}deg`)
    .join(',');

  // Set the background style of the colour wheel to the conic gradient
  colourWheel1.style.background = `conic-gradient(${gradient})`;
}

/** This function generates and displays a message with the colour name, positive word and users mood. */
function randomMoodColour() {
  fetch('positive-words.json')
    .then((response) => response.json())
    .then((words) => {
      const mood = localStorage.getItem('mood');
      if (!mood || !words[mood]) {
        console.error(
          'Mood not found or no words available for the given mood.'
        );
        return;
      }
      // Select a random positive word from the array associated with the mood
      const positiveWords = Object.values(words[mood]);
      const positiveWord =
        positiveWords[Math.floor(Math.random() * positiveWords.length)];

      // Store the positive word in local storage (if needed)
      localStorage.setItem('positiveWord', positiveWord);

      const colorName = localStorage.getItem('colorName');
      const colourChoice = document.getElementById('colourChoice');

      // get the color from local storage
      const color = localStorage.getItem('color');
      // Displayed message with the colour name, positive word, and mood
      colourChoice.innerHTML = `Feeling a bit ${mood} today? Let the ${positiveWord} <span style="color: ${color}; text-shadow: 0 1px 2px black;">${colorName}</span> embrace your soul and elevate your spirits! Click the button below for your uplifting affirmation.`;
      // colourChoice.textContent = `Feeling a bit ${mood} today? Let the ${positiveWord} ${colorName} embrace your soul and elevate your spirits! Click the button below for your uplifting affirmation.`;
    });
}
