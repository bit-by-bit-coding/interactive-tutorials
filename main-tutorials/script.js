// When adding an interactive tutorial, edit this object
let interactiveTutorials = {
    arraysTutorial: {
      path: 'arrays-tutorial',
      title: 'ARRAYS TUTORIAL',
      content: 'Learn how Javascript arrays work'
    },
    alertDataTypeTutorial: {
      path: 'alerts-data-types-variables-tutorial',
      title: 'ALERT, DATA TYPE, VARIABLE TUTORIAL',
      content: 'Learn about alerts, data types, and variables in Javascript',
    },
    functionsParametersTutorial: {
      path: 'functions-parameters-tutorial',
      title: 'FUNCTIONS AND PARAMETERS TUTORIAL',
      content: 'Learn about functions and parameters in Javascript'
    }
};

let tutorialsList = document.getElementById("tutorials-list");
for (let name in interactiveTutorials) {
  let tutorial = interactiveTutorials[name];
  let item = document.createElement("div");
  item.classList.add("grid-item");
  item.addEventListener("click", (e) => {
    let anchor = document.createElement("a");
    anchor.href = '/' + tutorial.path + "/";
    document.body.appendChild(anchor);
    anchor.click();
  });
  let title = document.createElement("h3");
  title.innerHTML = tutorial.title;
  let content = document.createElement("p");
  content.innerHTML = tutorial.content;
  item.appendChild(title);
  item.appendChild(content);
  tutorialsList.appendChild(item);
}