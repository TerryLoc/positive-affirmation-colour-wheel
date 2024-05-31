'use strict';
// Add event listener to the document when it's ready
document.addEventListener('DOMContentLoaded', function () {
  // Get the start button and mood buttons
  const startBtn = document.getElementById('start-btn');
  const moodButtons = document.querySelectorAll('.mood-btn');
  const colourWheel = document.getElementById('colourWheel1');

  // Add event listener to the start button
  if (startBtn) {
    startBtn.addEventListener('click', function () {
      // Redirect to the mood page
      window.location.href = 'mood.html';
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

            // Apply the colours for the selected mood
            applyColors(colours[mood]);

            // Add the spin class to the colour wheel to animate it
            colourWheel.classList.add('spin');
            // Remove the spin class after 8 seconds
            setTimeout(() => {
              colourWheel.classList.remove('spin');
            }, 8000);
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
