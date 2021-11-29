const correctNum = document.getElementById("correctNumber");
const guessedNum = document.getElementById("guessedNumber");
const guessNumBtn = document.getElementById("runGuessedNumber");

const snowmanAnimate = document.getElementById("snowmanAnimation");
const animation = document.getElementById("animation");
const simonSaysBtn = document.getElementById("runSimonSays");

guessNumBtn.onclick = function () {
  if (correctNum.value < 1 || correctNum.value > 10) {
    alert("correctNumber needs to be between 1-10.");
    return;
  }

  if (correctNum.value === guessedNum.value) {
    alert("Congrats! You guessed the right number!");
  } else {
    alert("Nice try. Guess again.");
  }
};

simonSaysBtn.onclick = function () {
  const choices = ["spin", "disappear", "slideRight", "slideLeft"];
  const filtered = choices.includes(animation.value);

  if (!filtered) {
    alert("Not a valid choice.");
    return;
  }

  snowmanAnimate.className = `if-else--${animation.value}`;
};
