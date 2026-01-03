const form = document.getElementById("form");
const output = document.getElementById("output");
const outputText = document.getElementById("output-txt");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const dobValue = document.getElementById("number").value;
  const dob = new Date(dobValue);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if ((monthDiff < 0)|| (monthDiff === 0 && today.getDate() < dob.getDate())){
    age--;
  }

  outputText.textContent = `Your age is ${age} years`;
  output.classList.remove("hidden");
});
