'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.getElementById('start-btn');

  // Event listener for the start button
  startBtn.addEventListener('click', function () {
    window.location.href = 'mood.html';
  });
});

fetch('colours.json')
  .then((response) => response.json())
  .then((colours) => applyColors(colours['Sad'])); // Change the desired mood

/** This function creates a conic gradient with the colors for the specified mood. Each color covers a 30-degree segment of the circle, starting from 0 degrees and ending at 360 degrees.
 */
function applyColors(colors) {
  const colourWheel1 = document.getElementById('colourWheel1');
  const gradient = colors
    .map((color, index) => `${color} ${index * 30}deg ${(index + 1) * 30}deg`)
    .join(',');
  colourWheel1.style.background = `conic-gradient(${gradient})`;
}
