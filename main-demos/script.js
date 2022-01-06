// When adding an interactive demo, edit this object
let interactiveDemos = {
    arraysDemo: {
      path: 'arrays-demo',
      title: 'ARRAYS DEMO',
      content: 'Learn how Javascript arrays work'
    },
    attributeDemo: {
      path: "attribute-demo",
      title: "ATTRIBUTE DEMO",
      content:
        "Learn how attributes work inside tags and the most commonly used ones.",
    },
    booleanLogic: {
      path: "boolean-logic-demo",
      title: "BOOLEAN LOGIC DEMO",
      content: "How do booleans work? What are operators and statements?",
    },
    boxModel: {
      path: "box-model-demo",
      title: "BOX MODEL DEMO",
      content:
        "Margin, border, padding. Every HTML element has these, what do they do?",
    },
    cssOverflowDemo: {
      path: "css-overflow-demo",
      title: "CSS OVERFLOW DEMO",
      content: "What is the overflow property in CSS and how do you use it?",
    }, 
    cssSelectorsDemo: {
      path: 'css-selectors-demo',
      title: 'CSS SELECTORS DEMO',
      content: 'What are CSS selectors and what are some basic ways to use them?'
    },
    divDemo: {
      path: "div-demo",
      title: "&ltDIV&gt TAG DEMO",
      content: "How to use the &ltdiv&gt tag and an exploritory tutorial.",
    },
    domDemo: {
      path: "dom-demo",
      title: "DOM DEMO",
      content: "The Document Object Model and how to manipulate it.",
    },
    eventsDemo: {
      path: "events-demo",
      title: "EVENTS DEMO",
      content: "What are events in JavaScript, and how can we use them?",
    },
    functionDemo: {
      path: "function-demo",
      title: "FUNCTION DEMO",
      content: "Condensing code and calling upon functions!",
    },
    ifElseDemo: {
      path: "if-else-demo",
      title: "IF ELSE DEMO",
      content: "What is an If / Else Statement",
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
    }
};

let demosList = document.getElementById("demos-list");
for (let name in interactiveDemos) {
  let demo = interactiveDemos[name];
  let item = document.createElement("div");
  item.classList.add("grid-item");
  item.addEventListener("click", (e) => {
    let anchor = document.createElement("a");
    anchor.href = "/" + demo.path + "/";
    document.body.appendChild(anchor);
    anchor.click();
  });
  let title = document.createElement("h3");
  title.innerHTML = demo.title;
  let content = document.createElement("p");
  content.innerHTML = demo.content;
  item.appendChild(title);
  item.appendChild(content);
  demosList.appendChild(item);
}
