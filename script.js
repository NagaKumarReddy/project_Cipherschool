// ===== Greet Button =====
const greetBtn = document.getElementById('greetBtn');
const greetMessage = document.getElementById('greetMessage');

const greetings = [
  "Hello! Welcome to my AWS-hosted site! 🚀",
  "Hey there! Thanks for visiting! 😊",
  "Greetings from the cloud! ☁️",
  "Hi! This page lives on Amazon S3! 🌐"
];

greetBtn.addEventListener('click', () => {
  const random = greetings[Math.floor(Math.random() * greetings.length)];
  greetMessage.textContent = random;
  greetMessage.classList.remove('hidden');
});


// ===== Click Counter =====
let count = 0;

const counterBtn = document.getElementById('counterBtn');
const countDisplay = document.getElementById('countDisplay');
const resetBtn = document.getElementById('resetBtn');

counterBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
});


// ===== Contact Form =====
const submitName = document.getElementById('submitName');
const nameInput = document.getElementById('nameInput');
const formResponse = document.getElementById('formResponse');

submitName.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name === '') {
    formResponse.textContent = "Please enter your name first!";
    formResponse.style.color = "#e05525";
  } else {
    formResponse.textContent = `Thanks, ${name}! Your message has been noted. 🎉`;
    formResponse.style.color = "#FF6B35";
    nameInput.value = '';
  }
  formResponse.classList.remove('hidden');
});
