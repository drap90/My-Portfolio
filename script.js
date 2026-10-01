// Dark mode button
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light mode";
  } else {
    themeBtn.textContent = "Dark mode";
  }
});

// Fun fact button
const factBtn = document.getElementById("fact-btn");
const funFact = document.getElementById("fun-fact");

factBtn.addEventListener("click", function () {
  funFact.classList.toggle("hidden");
});
