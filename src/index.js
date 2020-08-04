'use strict';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const body = document.querySelector('body');
  const startButton = document.querySelector('[data-action="start"]');
  const stopButton = document.querySelector('[data-action="stop"]');

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let timerID = null;

  startButton.addEventListener('click', () => {
    timerID = setInterval(() => {
      const number = randomIntegerFromInterval(0, colors.length);
      console.log(number);
      body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000);
    startButton.setAttribute('disabled', 'true')
  });

  stopButton.addEventListener('click', () => {
    clearInterval(timerID);
    startButton.removeAttribute('disabled')
  });