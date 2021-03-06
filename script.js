// Edit this object when adding a new Interactive Tutorials!

let interactiveTutorials = {
  attributeDemo: {
    path: 'attribute-demo',
    title: 'ATTRIBUTE DEMO',
    content: "Learn how attributes work inside tags and the most commonly used ones."
  },
  divDemo: {
    path: 'div-demo',
    title: '&ltDIV&gt TAG DEMO',
    content: "How to use the &ltdiv&gt tag and an exploritory tutorial."
  },
  boxModel: {
    path: 'box-model-demo',
    title: 'BOX MODEL DEMO',
    content: "Margin, border, padding. Every HTML element has these, what do they do?"
  },
  booleanLogic: {
    path: 'boolean-logic-demo',
    title: 'BOOLEAN LOGIC DEMO',
    content: "How do booleans work? What are operators and statements?"
  },
  domDemo: {
    path: 'dom-demo',
    title: 'DOM DEMO',
    content: "The Document Object Model and how to manipulate it."
  },
  functionDemo: {
    path: 'function-demo',
    title: 'FUNCTION DEMO',
    content: "Condensing code and calling upon functions!"
  },
  loopDemo: {
    path: 'for-loop-demo',
    title: 'FOR LOOP DEMO',
    content: "Explore how the for loop works with a bot-a-pillar!"
  },
  mathRandom: {
    path: 'math-random-demo',
    title: 'MATH.RANDOM FUNCTION DEMO',
    content: "How does the Math.random function work? How can it be modified to fit specific needs?"
  },
  eventsDemo: {
    path: 'events-demo',
    title: 'EVENTS DEMO',
    content: "What are events in JavaScript, and how can we use them?"
  },
  objectDemo: {
    path: 'object-demo',
    title: 'OBJECT DEMO',
    content: "What are objects in JavaScript? This tutorial shows the syntax of a JSON object with a neat car that changes color!"
  }
};

// And that's it! It is added now!

let tutorialsList = document.getElementById("tutorials-list");
for (let name in interactiveTutorials) {
  let tutorial = interactiveTutorials[name]
  let item = document.createElement('div');
  item.classList.add('grid-item');
  item.addEventListener('click', (e) => {
    let anchor = document.createElement('a');
    anchor.href = tutorial.path +  '/';
    document.body.appendChild(anchor);
    anchor.click();
  });
  let title = document.createElement('h3');
  title.innerHTML = tutorial.title;
  let content = document.createElement('p');
  content.innerHTML = tutorial.content;
  item.appendChild(title);
  item.appendChild(content);
  tutorialsList.appendChild(item);
}
