// =============================
// Part 1: Event Handling
// =============================
let counter = 0;

const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");

increaseBtn.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

decreaseBtn.addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});

// =============================
// Part 2: Interactive Elements
// =============================

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("active");
  });
});

// =============================
// Part 3: Form Validation
// =============================
const form = document.getElementById("signup-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  // get inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // error elements
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const successMessage = document.getElementById("form-success");

  let valid = true;

  // Name Validation
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password Validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success Message
  if (valid) {
    successMessage.textContent = "🎉 Form submitted successfully!";
    form.reset();
  } else {
    successMessage.textContent = "";
  }
});
