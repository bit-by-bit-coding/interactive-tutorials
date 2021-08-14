//Running Code
let arrayRun = document.getElementById("runArrays");

let arrayRunCode = function () {
  let shoppingList = ["eggs", "milk", "bread", "apples"];
  alert(shoppingList);

  let oodNumbersLessThanTen = [1, 3, 5, 7, 9];
  alert(oodNumbersLessThanTen);

  let isItWorking = [true, false, true];
  alert(isItWorking);
};

arrayRun.onclick = arrayRunCode;

let indexRun = document.getElementById("indexRun");

let indexRunCode = function () {
  let perfectSquareNumbers = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
  alert(perfectSquareNumbers[5]);

  let greaterThanThree = [false, false, false, true, true];
  alert(greaterThanThree[2]);

  let colors = ["red", "organge", "yellow", "green", "blue", "purple"];
  alert(colors[0]);
};

indexRun.onclick = indexRunCode;

let changeRun = document.getElementById("changeRun");

let changeRunCode = function () {
  let sodaBrands = ["Coke", "Mountain Dew", "Fanta", "Dr Pepper"];
  alert("Before: " + sodaBrands);
  sodaBrands.push("Pepsi");
  alert("After: " + sodaBrands);

  let numberOfBeanCans = [2, 6, 3, 1, 7, 5, 8];
  alert("Before: " + numberOfBeanCans);
  numberOfBeanCans.push(4);
  alert("After: " + numberOfBeanCans);

  let bestGame = [true, false, true, true];
  alert("Before: " + bestGame);
  bestGame.push(true);
  alert("After: " + bestGame);
};

changeRun.onclick = changeRunCode;

//Indexing practice
let acAnswer = document.getElementById("acAnswer");
let acButton = document.getElementById("acButton");

let acPractice = function () {
  let acValue = acAnswer.value;

  if (acValue === "") {
    alert("This is no code here, write a number");
  } else if (acValue > 4) {
    alert("Please try a different number. This one is too big");
  } else if (acValue < 0) {
    alert("Please try a different number. This one is too small");
  } else {
    let answerCheck = [true, false, true, false, false];
    alert(answerCheck[acValue]);
  }
};

acButton.onclick = acPractice;

let ftAnswer = document.getElementById("ftAnswer");
let ftButton = document.getElementById("ftButton");

let ftPractice = function () {
  let ftValue = ftAnswer.value;

  if (ftValue === "") {
    alert("This is no code here, write a number");
  } else if (ftValue > 4) {
    alert("Please try a different number. This one is too big");
  } else if (ftValue < 0) {
    alert("Please try a different number. This one is too small");
  } else {
    let flowerTypes = ["daffodils", "daisies", "roses", "tulips", "hydrangeas"];
    alert(flowerTypes[ftValue]);
  }
};

ftButton.onclick = ftPractice;

let m3Answer = document.getElementById("m3Answer");
let m3Button = document.getElementById("m3Button");

let m3Practice = function () {
  let m3Value = m3Answer.value;

  if (m3Value === "") {
    alert("There is no code here, write a number");
  } else if (m3Value > 9) {
    alert("Please try a different number. This one is too big");
  } else if (m3Value < 0) {
    alert("Please try a different number. This one is too small");
  } else {
    let multiplesOfThree = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
    alert(multiplesOfThree[m3Value]);
  }
};

m3Button.onclick = m3Practice;

//Game code
let pointCheck = document.getElementById("points");

let doneFunction = function () {
  alert("Done!");
};

//Building arrays
let baInstruction = document.getElementById("gameCode");
let baCode = document.getElementById("buildingCode");

let baOption1 = document.getElementById("option1");
let baOption2 = document.getElementById("option2");
let baOption3 = document.getElementById("option3");

let point = 0;

let baWrong = function () {
  point--;
  pointCheck.innerText = "Points: " + point;
  baInstruction.innerText =
    baInstruction.innerText + " Wrong guess, please try again";
};

let baGameWin = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  baInstruction.innerText = "Correct! You made an array!";

  baOption1.innerText = "";
  baOption2.innerText = "Run code";
  baOption3.innerText = "";

  let functionName = function () {
    let arrayName = ["happiness", true, 5, "good"];
    alert(arrayName);
  };
  baOption2.onclick = functionName;
  baOption1.onclick = doneFunction;
  baOption3.onclick = doneFunction;
};

let baGameCorrect5 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  baCode.innerHTML =
    'let arrayName = ["happiness", true, 5, "good"]; <br> alert(arrayName);';

  baInstruction.innerText = "What will this array alert?";

  baOption1.innerText = "happiness,true,5,good";
  baOption2.innerText = "true,5";
  baOption3.innerText = "happiness,good";

  baOption1.onclick = baGameWin;
  baOption2.onclick = baWrong;
};

let baGameCorrect4 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  baCode.innerHTML = 'let arrayName = ["happiness", ];';

  baInstruction.innerText =
    "Add some values to the array. Make sure they are correct syntax";

  baOption1.innerText = "nice, nice, false";
  baOption2.innerText = 'true, 5, "good"';
  baOption3.innerText = "5, 10 , 4true";

  baOption2.onclick = baGameCorrect5;
  baOption1.onclick = baWrong;
};

let baGameCorrect3 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  baCode.innerText = 'let arrayName = ["happiness"];';

  baInstruction.innerText = "How do we separate different values in our array?";

  baOption1.innerText = "comma: ,";
  baOption2.innerText = "space: ";
  baOption3.innerText = "line: |";

  baOption1.onclick = baGameCorrect4;
};

let baGameCorrect2 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  baCode.innerText = "let arrayName = [];";

  baInstruction.innerText =
    "Which of these is something we can have inside our array?";

  baOption1.innerText = '"happiness"';
  baOption2.innerText = "true5";
  baOption3.innerText = "hello world";

  baOption1.onclick = baGameCorrect3;
  baOption2.onclick = baWrong;
};

let baGameCorrect1 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  baCode.innerText = "let arrayName = ";

  baInstruction.innerText =
    "How do we show that this is an array (What comes next?)?";

  baOption1.innerText = "();";
  baOption2.innerText = "[];";
  baOption3.innerText = "{};";

  baOption2.onclick = baGameCorrect2;
  baOption3.onclick = baWrong;
};

let baGameStart = function () {
  baInstruction.innerText = "How do we start an array?";

  baOption1.innerText = "array.() = ";
  baOption2.innerText = "array(arrayName) = ";
  baOption3.innerText = "let arrayName = ";

  baOption1.onclick = baWrong;
  baOption2.onclick = baWrong;
  baOption3.onclick = baGameCorrect1;
};

baOption2.onclick = baGameStart;

//Indexing arrays
let iaInstruction = document.getElementById("gameCode2");
let iaCode = document.getElementById("buildingCode2");

let iaOption1 = document.getElementById("option4");
let iaOption2 = document.getElementById("option5");
let iaOption3 = document.getElementById("option6");

let iaWrong = function () {
  point--;
  pointCheck.innerText = "Points: " + point;
  iaInstruction.innerText = iaInstruction.innerText + " Wrong guess, try again";
};

let iaGameWin = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  iaInstruction.innerHTML = "You win! You can now index arrays!";
  iaCode.innerHTML = "Cycle and run code using buttons below";

  let cycleOne = function () {
    iaCode.innerHTML =
      'let arrayName = ["arrayValue1", "arrayValue2", "arrayValue3"];';

    let runFunction1 = function () {
      let arrayName = ["arrayValue1", "arrayValue2", "arrayValue3"];
      alert(arrayName);
    };
    iaOption1.onclick = cycleTwo;
    iaOption2.onclick = runFunction1;
  };

  let cycleTwo = function () {
    iaCode.innerHTML =
      'let arrayName = ["arrayValue1", "arrayValue2", "arrayValue3"]; <br> arrayName[2];';

    let runFunction2 = function () {
      let arrayName = ["arrayValue1", "arrayValue2", "arrayValue3"];
      alert(arrayName[2]);
    };
    iaOption1.onclick = cycleThree;
    iaOption2.onclick = runFunction2;
  };

  let cycleThree = function () {
    iaCode.innerHTML =
      'let greetingArray = ["hi", "hello", "good morning", "nice to meeting you"]; <br> alert(greetingArray[1]);';

    let runFunction3 = function () {
      let greetingArray = [
        "hi",
        "hello",
        "good morning",
        "nice to meeting you"
      ];
      alert(greetingArray[1]);
    };
    iaOption1.onclick = cycleFour;
    iaOption2.onclick = runFunction3;
  };

  let cycleFour = function () {
    iaCode.innerHTML =
      'let gemArray = ["emerald", "ruby", "sapphire", "garnet", "rose quarts", "amaythest", "peral"]; <br> let realGem = gemArray[8]; <br> alert(realGem);';

    let runFunction4 = function () {
      let gemArray = [
        "emerald",
        "ruby",
        "sapphire",
        "garnet",
        "rose quarts",
        "amaythest",
        "peral"
      ];
      let realGem = gemArray[6];
      alert(realGem);
    };
    iaOption1.onclick = cycleOne;
    iaOption2.onclick = runFunction4;
  };

  iaOption1.innerText = "Cycle Code";
  iaOption2.innerText = "Run function";
  iaOption3.innerText = "";

  iaOption1.onclick = cycleOne;
  iaOption2.onclick = doneFunction;
  iaOption3.onclick = doneFunction;
};

let iaGameCorrect4 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  iaCode.innerHTML =
    'let gemArray = ["emerald", "ruby", "sapphire", "garnet", "rose quarts", "amaythest", "peral"]; <br> let realGem = gemArray[?]; <br> alert(realGem);';
  iaInstruction.innerHTML = "How do I alert peral from this array?";

  iaOption1.innerText = "let realGem = gemArray[4];";
  iaOption2.innerText = "let realGem = gemArray[6];";
  iaOption3.innerText = "let realGem = gemArray[8];";

  iaOption2.onclick = iaGameWin;
  iaOption3.onclick = iaWrong;
};

let iaGameCorrect3 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  iaCode.innerHTML =
    'let gemArray = ["emerald", "ruby", "sapphire", "garnet", "rose quarts", "amaythest", "peral"]; <br> let realGem = gemArray[8]; <br> alert(realGem);';
  iaInstruction.innerHTML = "Which part of line 2 makes this incorrect?";

  iaOption1.innerText = "let realGem";
  iaOption2.innerText = "gemArray";
  iaOption3.innerText = "[8]";

  iaOption3.onclick = iaGameCorrect4;
  iaOption2.onclick = iaWrong;
};

let iaGameCorrect2 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  iaInstruction.innerText = "How do I alert the value: hello?";
  iaCode.innerHTML =
    'let greetingArray = ["hi", "hello", "good morning", "nice to meeting you"]; <br> alert(greetingArray[?]);';

  iaOption1.innerText = "alert(greetingArray[1]);";
  iaOption2.innerText = "alert(greetingArray[2]);";
  iaOption3.innerText = "alert(greetingArray[3]);";

  iaOption1.onclick = iaGameCorrect3;
  iaOption2.onclick = iaWrong;
};

let iaGameCorrect1 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  iaInstruction.innerText = "How do I index this array to get arrayValue3?";
  iaCode.innerHTML =
    'let arrayName = ["arrayValue1", "arrayValue2", "arrayValue3"];';

  iaOption1.innerText = "arrayName[1];";
  iaOption2.innerText = "arrayName[2];";
  iaOption3.innerText = "arrayName[3];";

  iaOption2.onclick = iaGameCorrect2;
  iaOption1.onclick = iaWrong;
};

let iaGameStart = function () {
  iaInstruction.innerText =
    "Let's index some arrays! Which number is the index for the first value in the array?";
  iaCode.innerHTML =
    'let arrayName = ["arrayValue1", "arrayValue2", "arrayValue3"];';

  iaOption1.innerText = "0";
  iaOption2.innerText = "1";
  iaOption3.innerText = "first";

  iaOption1.onclick = iaGameCorrect1;
  iaOption2.onclick = iaWrong;
  iaOption3.onclick = iaWrong;
};

iaOption2.onclick = iaGameStart;

//Changing arrays code
let cInstruction = document.getElementById("gameCode3");
let cCode = document.getElementById("buildingCode3");

let cOption1 = document.getElementById("option7");
let cOption2 = document.getElementById("option8");
let cOption3 = document.getElementById("option9");

let cWrong = function () {
  point--;
  pointCheck.innerText = "Points: " + point;
  cInstruction.innerText = cInstruction.innerText + " Wrong guess, try again";
};

let cWinGame = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  cInstruction.innerText =
    "You won! Congratulations for calling multiple functions!";
  cCode.innerHTML =
    'let funArray = ["parties", "skydiving", "video games"]; <br> funArray.push("hanging with friends"); <br> alert(funArray);';

  let runCode = function () {
    let funArray = ["parties", "skydiving", "video games"];
    funArray.push("hanging with friends");
    alert(funArray);
  };

  cOption1.innerText = "";
  cOption2.innerText = "Run code";
  cOption3.innerText = "";

  cOption1.onclick = doneFunction;
  cOption2.onclick = runCode;
  cOption3.onclick = doneFunction;
};

let cCorrect3 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  cInstruction.innerText = "What can I put inside the parentheses?";
  cCode.innerHTML =
    'let funArray = ["parties", "skydiving", "video games"]; <br> funArray.push(?);';

  cOption1.innerText = '"music';
  cOption2.innerText = "4fun";
  cOption3.innerText = '"hanging with friends"';

  cOption3.onclick = cWinGame;
  cOption1.onclick = cWrong;
};

let cCorrect2 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  cInstruction.innerText = "What goes inside the parentheses?";
  cCode.innerHTML =
    'let funArray = ["parties", "skydiving", "video games"]; <br> funArray.push();';

  cOption1.innerText = "The array we are changing";
  cOption2.innerText = "Nothing";
  cOption3.innerText = "The value we are adding";

  cOption3.onclick = cCorrect3;
  cOption1.onclick = cWrong;
};

let cCorrect1 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  cInstruction.innerText = "What do we put after the array name?";
  cCode.innerHTML =
    'let funArray = ["parties", "skydiving", "video games"]; <br> funArray';

  cOption1.innerText = ".push();";
  cOption2.innerText = "push();";
  cOption3.innerText = "push{};";

  cOption1.onclick = cCorrect2;
  cOption2.onclick = cWrong;
};

let cStartGame = function () {
  cInstruction.innerText =
    "What is the first thing we type when changing an array?";
  cCode.innerHTML = 'let funArray = ["parties", "skydiving", "video games"];';

  cOption1.innerText = "let funArray;";
  cOption2.innerText = "funArray";
  cOption3.innerText = "funArray +=";

  cOption3.onclick = cWrong;
  cOption2.onclick = cCorrect1;
  cOption1.onclick = cWrong;
};

cOption2.onclick = cStartGame;
