//Function run code
let functionExampleElement = document.getElementById("functionExample");

let functionExample = function () {
  let morning = function () {
    alert("Good morning! Have a lovely day");
  };

  morning();

  let vibe = prompt("What are the vibes?");

  let vibeCheck = function () {
    if (vibe === "good") {
      alert("There are good vibes");
    } else {
      alert("Bad vibes");
    }
  };

  vibeCheck();

  let questionFunction = function () {
    let question = prompt("What is 2 * 9?");
    if (question === "18") {
      alert("You are correct!");
    } else if (question === "") {
      alert("No response given :(");
    } else {
      alert("That is incorrect.");
    }
  };

  questionFunction();
};

functionExampleElement.onclick = functionExample;

//Parameters run code
let meButton1 = document.getElementById("me4");
let meButton2 = document.getElementById("me0");
let meButton3 = document.getElementById("me1");

let mathEquation = function (x) {
  let y = 3 * x + 5;
  alert(y);
};

let mathEquation1 = function () {
  mathEquation(4);
};
let mathEquation2 = function () {
  mathEquation(0);
};
let mathEquation3 = function () {
  mathEquation(1);
};

meButton1.onclick = mathEquation1;
meButton2.onclick = mathEquation2;
meButton3.onclick = mathEquation3;

let qfButton1 = document.getElementById("qf0");
let qfButton2 = document.getElementById("qf5");
let qfButton3 = document.getElementById("qf2");

let questionFunction = function (x) {
  let y = 4 * x + 2;
  let question = prompt("What is x if 4x + 2 = " + y + " ?");
  let xString = x.toString();
  if (question === xString) {
    alert("You are correct!");
  } else {
    alert("Wrong, try again");
  }
};

let questionFunction1 = function () {
  questionFunction(0);
};
let questionFunction2 = function () {
  questionFunction(5);
};
let questionFunction3 = function () {
  questionFunction(2);
};

qfButton1.onclick = questionFunction1;
qfButton2.onclick = questionFunction2;
qfButton3.onclick = questionFunction3;

let wcButton1 = document.getElementById("wc25");
let wcButton2 = document.getElementById("wc50");
let wcButton3 = document.getElementById("wc80");

let weatherCheck = function (cloudyCheck, temperature) {
  if (cloudyCheck === false && temperature > 50) {
    alert("The weather is good");
  } else if (temperature > 50) {
    alert("Cloudy but not cold");
  } else if (cloudyCheck === false) {
    alert("Not cloudy but cold");
  } else {
    alert("It's both cloudy and cold");
  }
};

let weatherCheck1 = function () {
  weatherCheck(true, 25);
};
let weatherCheck2 = function () {
  weatherCheck(false, 50);
};
let weatherCheck3 = function () {
  weatherCheck(true, 80);
};

wcButton1.onclick = weatherCheck1;
wcButton2.onclick = weatherCheck2;
wcButton3.onclick = weatherCheck3;

//Game code
let pointCheck = document.getElementById("points");

let doneFunction = function() {
    alert("Done!");
}

//Building functions
let bfInstruction = document.getElementById("gameCode");
let bfCode = document.getElementById("buildingCode");

let bfOption1 = document.getElementById("option1");
let bfOption2 = document.getElementById("option2");
let bfOption3 = document.getElementById("option3");

let point = 0;

let bfWrong = function () {
  point--;
  pointCheck.innerText = "Points: " + point;
  bfInstruction.innerText =
    bfInstruction.innerText + " Wrong guess, please try again.";
};

let bfGameWin = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  bfInstruction.innerText = "Correct! You made a function!";

  bfOption1.innerText = "";
  bfOption2.innerText = "Run code";
  bfOption3.innerText = "";

  let functionName = function () {
    alert("How are we doing today?");
  };
  bfOption2.onclick = functionName;
  bfOption1.onclick = doneFunction;
  bfOption3.onclick = doneFunction;
};

let bfGameCorrect5 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  bfCode.innerHTML =
    'let functionName = function() {<p style="padding-left: 30px;">alert("How are we doing today?");</p>}';

  bfInstruction.innerText = "What will this function do?";

  bfOption1.innerText = "Check how we are doing today";
  bfOption2.innerText = 'Alert: "How are we doing today?"';
  bfOption3.innerText = "Alert: How are we doing today?";

  bfOption3.onclick = bfGameWin;
  bfOption2.onclick = bfWrong;
};

let bfGameCorrect4 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  bfCode.innerHTML = "let functionName = function() {<br><br>}";

  bfInstruction.innerText =
    "Which is correct syntax that we can put in our function?";

  bfOption1.innerText = 'alert = "This is really hard";';
  bfOption2.innerText = 'alert("How are we doing today?");';
  bfOption3.innerText = 'alert.("Time for a party!");';

  bfOption2.onclick = bfGameCorrect5;
  bfOption1.onclick = bfWrong;
};

let bfGameCorrect3 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  bfCode.innerText = "let functionName = function()";

  bfInstruction.innerText =
    "What is the next thing after we declare the function?";

  bfOption1.innerText = "()";
  bfOption2.innerText = "{}";
  bfOption3.innerText = "[]";

  bfOption2.onclick = bfGameCorrect4;
  bfOption3.onclick = bfWrong;
};

let bfGameCorrect2 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  bfCode.innerText = "let functionName =";

  bfInstruction.innerText = "How do we declare a function?";

  bfOption1.innerText = "function";
  bfOption2.innerText = "()function";
  bfOption3.innerText = "function()";

  bfOption3.onclick = bfGameCorrect3;
  bfOption1.onclick = bfWrong;
};

let bfGameCorrect1 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  bfCode.innerText = "let functionName";

  bfInstruction.innerText = "What is after the funciton name?";

  bfOption1.innerText = "=";
  bfOption2.innerText = "-";
  bfOption3.innerText = ":";

  bfOption1.onclick = bfGameCorrect2;
};

let bfGameStart = function () {
  bfInstruction.innerText = "How do we start a function?";

  bfOption1.innerText = "let functionName";
  bfOption2.innerText = "if(functionName)";
  bfOption3.innerText = "let(functionName)";

  bfOption1.onclick = bfGameCorrect1;
  bfOption2.onclick = bfWrong;
  bfOption3.onclick = bfWrong;
};

bfOption2.onclick = bfGameStart;

//Functions with Parameters
let fpInstruction = document.getElementById("gameCode2");
let fpCode = document.getElementById("buildingCode2");

let fpOption1 = document.getElementById("option4");
let fpOption2 = document.getElementById("option5");
let fpOption3 = document.getElementById("option6");

let fpWrong = function () {
  point--;
  pointCheck.innerText = "Points: " + point;
  fpInstruction.innerText = fpInstruction.innerText + " Wrong guess, try again";
};

let fpGameWin = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  fpInstruction.innerHTML = "You win! You have a function with parameters";

  let parameterFunction = function (x) {
    let y = x / 2 + 5;
    alert(y);
  };

  let runFunction = function () {
    parameterFunction(4);
  };

  fpOption1.innerText = "";
  fpOption2.innerText = "Run function";
  fpOption3.innerText = "";

  fpOption1.onclick = doneFunction;
  fpOption2.onclick = runFunction;
  fpOption3.onclick = doneFunction;
};

let fpGameCorrect4 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  fpCode.innerHTML =
    'let parameterFunction = function(x){<p style="padding-left: 30px;">let y = x/2 + 5;</p><p style="padding-left: 30px;">alert(y);</p>} <br> parameterFunction(4);';
  fpInstruction.innerHTML = "What is going to be alerted from this code?";

  fpOption1.innerText = "7";
  fpOption2.innerText = "y";
  fpOption3.innerText = "4/2 + 5";

  fpOption1.onclick = fpGameWin;
  fpOption2.onclick = fpWrong;
};

let fpGameCorrect3 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  fpCode.innerHTML =
    'let parameterFunction = function(x){<p style="padding-left: 30px;">let y = x/2 + 5;</p><p style="padding-left: 30px;">alert(y);</p>}';
  fpInstruction.innerHTML =
    "How do we call this function with the value of the parameter x = 4?";

  fpOption1.innerText = "parameterFunction(0);";
  fpOption2.innerText = "parameterFunction(4);";
  fpOption3.innerText = "parameterFunction(x = 4);";

  fpOption2.onclick = fpGameCorrect4;
  fpOption3.onclick = fpWrong;
};

let fpGameCorrect2 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  fpCode.innerHTML =
    'let parameterFunction = function(x){<p style="padding-left: 30px;">let y = x/2 + 5;</p>}';
  fpInstruction.innerHTML =
    "Which piece of code alerts the new <em>variable</em>";

  fpOption1.innerText = "alert(x);";
  fpOption2.innerText = 'alert("y");';
  fpOption3.innerText = "alert(y);";

  fpOption3.onclick = fpGameCorrect3;
  fpOption1.onclick = fpWrong;
};

let fpGameCorrect1 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  fpCode.innerHTML = "let parameterFunction = function(x){<br><br>}";
  fpInstruction.innerText = "Which piece of code uses that parameter:";

  fpOption1.innerText = "let y = x/2 + 5;";
  fpOption2.innerText = 'x = "Hello World!";';
  fpOption3.innerText = "x + y - z;";

  fpOption1.onclick = fpGameCorrect2;
  fpOption3.onclick = fpWrong;
};

let fpGameStart = function () {
  fpInstruction.innerText = "Make a parameter:";
  fpCode.innerHTML = "let parameterFunction = function(){<br><br>}";

  fpOption1.innerText = "function(x;)";
  fpOption2.innerText = "function(let x)";
  fpOption3.innerText = "function(x)";

  fpOption1.onclick = fpWrong;
  fpOption2.onclick = fpWrong;
  fpOption3.onclick = fpGameCorrect1;
};

fpOption2.onclick = fpGameStart;

//Calling functions with and without parameters
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
  cCode.innerHTML = "Cycle through previous code to run them!";

  let cycleThree = function () {
    cCode.innerHTML =
      'let checkGrades = function(science, math, english){<p style="padding-left:30px">if((science + math + english)/3 > 75){</p><p style="padding-left:60px">alert("You have an A in all classes!");</p><p style="padding-left:30px">} else if ((science + math + english)/3 > 50){</p><p style="padding-left:60px">alert("You have a C average");</p><p style="padding-left:30px">} else {</p><p style="padding-left:60px">alert("Time to study!");</p><p style="padding-left:30px">}</p>}<br>checkGrades(90, 67, 45);';

    let runCodeThree = function () {
      let checkGrades = function (science, math, english) {
        if ((science + math + english) / 3 > 75) {
          alert("You have an A in all classes!");
        } else if ((science + math + english) / 3 > 50) {
          alert("You have a C average");
        } else {
          alert("Time to study!");
        }
      };
      checkGrades(90, 67, 45);
    };

    cOption2.onclick = runCodeThree;
    cOption1.onclick = cycleOne;
    cOption3.onclick = doneFunction;
  };

  let cycleTwo = function () {
    cCode.innerHTML =
      'let vacationCheck = function(free){<p style="padding-left:30px">if(free)</p><p style="padding-left:60px">alert("Time for vacation!");</p><p style="padding-left:30px">} else {</p><p style="padding-left:60px">alert("No vacation, too busy");</p><p style="padding-left:30px">}</p>}<br>vacationCheck(true);';

    let runCodeTwo = function () {
      let vacationCheck = function (free) {
        if (free) {
          alert("Time for vacation!");
        } else {
          alert("No vacation, too busy");
        }
      };
      vacationCheck(true);
    };

    cOption2.onclick = runCodeTwo;
    cOption1.onclick = cycleThree;
    cOption3.onclick = doneFunction;
  };

  let cycleOne = function () {
    cCode.innerHTML =
      'let funFunction = function(){<p style="padding-left:30px">alert("Hello World");</p>}';

    let runCodeOne = function () {
      let funFunction = function () {
        alert("Hello World");
      };
      funFunction();
    };

    cOption2.onclick = runCodeOne;
    cOption1.onclick = cycleTwo;
    cOption3.onclick = doneFunction;
  };

  cOption1.innerText = "Cycle through";
  cOption2.innerText = "Run code";
  cOption3.innerText = "";

  cOption1.onclick = cycleOne;
  cOption2.onclick = cWinGame;
  cOption3.onclick = doneFunction;
};

let cCorrect3 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  cInstruction.innerText = "How do you call this function?";
  cCode.innerHTML =
    'let checkGrades = function(science, math, english){<p style="padding-left:30px">if((science + math + english)/3 > 75){</p><p style="padding-left:60px">alert("You have an A in all classes!");</p><p style="padding-left:30px">} else if ((science + math + english)/3 > 50){</p><p style="padding-left:60px">alert("You have a C average");</p><p style="padding-left:30px">} else {</p><p style="padding-left:60px">alert("Time to study!");</p><p style="padding-left:30px">}</p>}';

  cOption1.innerText = 'checkGrades("90", "30", "100");';
  cOption2.innerText = "checkGrades(true, false, true);";
  cOption3.innerText = "checkGrades(90, 67, 45);";

  cOption3.onclick = cWinGame;
  cOption1.onclick = cWrong;
};

let cCorrect2 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  cInstruction.innerText = "What does this function alert?";
  cCode.innerHTML =
    'let vacationCheck = function(free){<p style="padding-left:30px">if(free)</p><p style="padding-left:60px">alert("Time for vacation!");</p><p style="padding-left:30px">} else {</p><p style="padding-left:60px">alert("No vacation, too busy");</p><p style="padding-left:30px">}</p>}<br>vacationCheck(true);';

  cOption1.innerText = "Time for vacation!";
  cOption2.innerText = "No vacation, too busy";
  cOption3.innerText = "Nothing, this doesn't work";

  cOption1.onclick = cCorrect3;
  cOption2.onclick = cWrong;
};

let cCorrect1 = function () {
  point++;
  pointCheck.innerText = "Points: " + point;
  cInstruction.innerText = "How do you call this function?";
  cCode.innerHTML =
    'let vacationCheck = function(free){<p style="padding-left:30px">if(free){</p><p style="padding-left:60px">alert("Time for vacation!");</p><p style="padding-left:30px">} else {</p><p style="padding-left:60px">alert("No vacation, too busy");</p><p style="padding-left:30px">}</p>}';

  cOption1.innerText = "function(true);";
  cOption2.innerText = "vacationCheck(true);";
  cOption3.innerText = "vacationCheck(good);";

  cOption2.onclick = cCorrect2;
  cOption3.onclick = cWrong;
};

let cStartGame = function () {
  cInstruction.innerText = "How do you call this function?";
  cCode.innerHTML =
    'let funFunction = function(){<p style="padding-left:30px">alert("Hello World");</p>}';

  cOption1.innerText = "function();";
  cOption2.innerText = "funFunction(4);";
  cOption3.innerText = "funFunction();";

  cOption3.onclick = cCorrect1;
  cOption2.onclick = cWrong;
  cOption1.onclick = cWrong;
};

cOption2.onclick = cStartGame;

