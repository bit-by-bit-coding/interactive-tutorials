// Edit this object when adding a new Interactive Tutorials!

let interactiveTutorials = {
  divDemo: {
    path: 'div-demo',
    title: '&ltDIV&gt TAG DEMO',
    content: "How to use the &ltdiv&gt tag and an exploritory tutorial."
  },
  objectDemo: {
    path: 'object-demo',
    title: 'OBJECT DEMO',
    content: "What are objects in JavaScript? This tutorial shows the syntax of a JSON object with a neat car that changes color!"
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
  boxModel: {
    path: 'box-model',
    title: 'BOX MODEL',
    content: "Margin, border, padding. Every HTML element has these, what do they do?"
  },
  posDemo: {
    path: 'position-demo',
    title: 'POSITION DEMO',
    content: "How to use position property."
  }
}

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
