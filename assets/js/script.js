'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.getElementById('start-btn');

  // Event listener for the start button
  startBtn.addEventListener('click', function () {
    window.location.href = 'mood.html';
  });
});
