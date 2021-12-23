demosBox = document.getElementById("demos-box");
demosBox.addEventListener("click", (e) => {
  let anchor = document.createElement("a");
  anchor.href = "/main-demos/";
  document.body.appendChild(anchor);
  anchor.click();
});

let interactiveTutorials = {
  arraysDemo: {
    path: 'arrays-demo',
    title: 'ARRAYS DEMO',
    content: 'Learn how Javascript arrays work'
  },
  arraysTutorial: {
    path: 'arrays-tutorial',
    title: 'ARRAYS TUTORIAL',
    content: 'Learn how Javascript arrays work'
  },
  attributeDemo: {
    path: "attribute-demo",
    title: "ATTRIBUTE DEMO",
    content:
      "Learn how attributes work inside tags and the most commonly used ones.",
  },
  divDemo: {
    path: "div-demo",
    title: "&ltDIV&gt TAG DEMO",
    content: "How to use the &ltdiv&gt tag and an exploritory tutorial.",
  },
  boxModel: {
    path: "box-model-demo",
    title: "BOX MODEL DEMO",
    content:
      "Margin, border, padding. Every HTML element has these, what do they do?",
  },
  booleanLogic: {
    path: "boolean-logic-demo",
    title: "BOOLEAN LOGIC DEMO",
    content: "How do booleans work? What are operators and statements?",
  },
  domDemo: {
    path: "dom-demo",
    title: "DOM DEMO",
    content: "The Document Object Model and how to manipulate it.",
  },
  functionDemo: {
    path: "function-demo",
    title: "FUNCTION DEMO",
    content: "Condensing code and calling upon functions!",
  },
  loopDemo: {
    path: "for-loop-demo",
    title: "FOR LOOP DEMO",
    content: "Explore how the for loop works with a bot-a-pillar!",
  },
  mathRandom: {
    path: "math-random-demo",
    title: "MATH.RANDOM FUNCTION DEMO",
    content:
      "How does the Math.random function work? How can it be modified to fit specific needs?",
  },
  eventsDemo: {
    path: "events-demo",
    title: "EVENTS DEMO",
    content: "What are events in JavaScript, and how can we use them?",
  },
  objectDemo: {
    path: "object-demo",
    title: "OBJECT DEMO",
    content:
      "What are objects in JavaScript? This tutorial shows the syntax of a JSON object with a neat car that changes color!",
  },
  truthyFalsyDemo: {
    path: "truthy-falsy-demo",
    title: "TRUTHY AND FALSY VALUES DEMO",
    content:
      "What are truthy and falsy values in JavaScript? What expressions evaluate to boolean false?",
  },
  whileLoopDemo: {
    path: "while-loop-demo",
    title: "WHILE LOOP DEMO",
    content: "What are while loops and do while loops?",
  },
  ifElseDemo: {
    path: "if-else-demo",
    title: "IF ELSE DEMO",
    content: "What is and If / Else Statement",
  },
};

tutorialsBox = document.getElementById("tutorials-box");
tutorialsBox.addEventListener("click", (e) => {
  let anchor = document.createElement("a");
  anchor.href = "/main-tutorials/";
  document.body.appendChild(anchor);
  anchor.click();
});

mainPic1 = document.getElementById("main-pic-1");
mainPic2 = document.getElementById("main-pic-2");
window.addEventListener("resize", (e) => {
  if (window.innerWidth < 1000) {
    mainPic1.style = "display:none;";
    mainPic2.style = "display:none;";
  }
  if (window.innerWidth >= 1000) {
    mainPic1.style = "";
    mainPic2.style = "";
  }
});

window.addEventListener("DOMContentLoaded", (e) => {
  if (window.innerWidth < 1000) {
    mainPic1.style = "display:none;";
    mainPic2.style = "display:none;";
  }
  if (window.innerWidth >= 1000) {
    mainPic1.style = "";
    mainPic2.style = "";
  }
});