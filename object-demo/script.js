// script.js

let car = SVG("#car-svg");
let easterEgg = SVG("#easter-egg-svg");

let defaultCarObject = {
  "wheelColor": "green",
  "bodyColor": "blue",
  "roofColor": "blue",
  "outline": "black",
  "size": "medium"
};
let carObject = Object.assign({}, defaultCarObject);
let executeCode = function(e) {
  var carObject;
  try {
    carObject = Object.assign({}, defaultCarObject, JSON.parse(jar.toString().substring(10)));
  } catch (e) {
    carObject = Object.assign({}, defaultCarObject);
  }
  updateCar(carObject);
};
let autoSaveTime = 3000;
let autoSaveTimeout = setTimeout(executeCode, autoSaveTime);

let editorElement = document.getElementById("editor");
// Add the "Cmd+S" or "Ctrl+S" to execute the code
editorElement.addEventListener("keydown", function(e) {
  if ((e.ctrlKey || e.metaKey ) && e.keyCode === 83) {
    e.preventDefault();
    executeCode();
  }
});

// Create the Code Jar
let jar = CodeJar(editorElement, withLineNumbers(Prism.highlightElement, {
  color: '#000',
  backgroundColor: 'rgb(232, 232, 232)'
}), {
  tab: '  '
});
jar.updateCode("let car = " + JSON.stringify(carObject, null, '  '));
jar.onUpdate(code => {
  clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(executeCode, autoSaveTime);
});

/* Readability functions */

let carObjectPropertyify = (string) => {
  return string.substring(0, string.length - 7).replace(/-[a-z]/g, (s) => {
    return s.charAt(1).toUpperCase();
  });
}
let optionIdify = (string) => {
  return string.replace(/[A-Z]/g, (s) => {
    return '-' + s.toLowerCase();
  }) + '-option';
}
let readify = (string) => {
  string = string.charAt(0).toUpperCase() + string.substring(1);
  return string.replace('-', ' ').replace(/ [a-z]/, (s) => {
    return ' ' + s.charAt(1).toUpperCase();
  });
}

/* update functions */

let updateCar = (carObject) => {
  for (let property in carObject) {
    if (property === "size") {
      switch(carObject[property]) {
        case 'small':
          car.node.style.height = "75%";
          break;
        case 'medium':
          car.node.style.height = "100%";
          break;
        case 'large':
          car.node.style.height = "150%";
          break;
        default:
          car.node.style.height = "100%";
      }
    } else if (property === "wheelColor") {
      car.find(".car-wheel").fill(carObject[property]);
    } else if (property === "bodyColor") {
      car.find(".car-body").fill(carObject[property]);
    } else if (property === "roofColor") {
      car.find(".car-roof").fill(carObject[property]);
    } else if (property === "outline") {
      car.children().stroke(carObject[property]);
    } else if (property == "easterEgg") {
      // Congrats! You found the easter egg
      // add the "easterEgg" value to the object and set it to `true`
      if (carObject[property]) {
        car.node.style.display = "none";
        easterEgg.node.style.display = "block";
        if (carObject[property] instanceof Object) {
          let eggObject = carObject[property];
          for (let eggProperty in eggObject) {
            if (eggProperty === "color") {
              easterEgg.find(".egg").fill(eggObject[eggProperty]);
            } else if (eggProperty === "starColor") {
              easterEgg.find(".stars").children().fill(eggObject[eggProperty]);
            } else if (eggProperty === "dotColor") {
              easterEgg.find(".dots").children().fill(eggObject[eggProperty]);
            }
          }
        } else {
          easterEgg.find(".egg").fill("#fafafa");
          easterEgg.find(".stars").children().fill("pink");
          easterEgg.find(".dots").children().fill("lightblue");
        }
      } else {
        car.node.style.display = "block";
        easterEgg.node.style.display = "none";
      }
      continue;
    } else {
      continue;
    }
    document.getElementById(optionIdify(property)).value = readify(carObject[property]);
  }
};

let updateObject = (property, value) => {
  carObject[property] = value;
  jar.updateCode("let car = " + JSON.stringify(carObject, null, '  '));
  updateCar(carObject);
};

/* Add event listeners to buttons */
document.getElementById("execute-button").addEventListener('click', (e) => {
  executeCode()
});
document.getElementById("reset-button").addEventListener('click', (e) => {
  carObject = Object.assign({}, defaultCarObject);
  jar.updateCode("let car = " + JSON.stringify(carObject, null, '  '));
  updateCar(carObject);
});

/* Create the options and update the car SVG */

let optionHandler = (e) => {
  let newValue = e.options[e.target.value];
  if (newValue !== undefined) {
    updateObject(carObjectPropertyify(e.target.id), newValue);
  }
};

let sizeOptionElement = document.getElementById("size-option");
createOption(sizeOptionElement, {
  "Small": "small",
  "Medium": "medium",
  "Large": "large"
}, optionHandler);
let wheelColorOptionElement = document.getElementById("wheel-color-option");
createOption(wheelColorOptionElement, {
  "Red": "red",
  "Blue": "blue",
  "Green": "green"
}, optionHandler);
let bodyColorOptionElement = document.getElementById("body-color-option");
createOption(bodyColorOptionElement, {
  "Red": "red",
  "Blue": "blue",
  "Green": "green"
}, optionHandler);
let roofColorOptionElement = document.getElementById("roof-color-option");
createOption(roofColorOptionElement, {
  "Red": "red",
  "Blue": "blue",
  "Green": "green"
}, optionHandler);
let outlineOptionElement = document.getElementById("outline-option");
createOption(outlineOptionElement, {
  "Red": "red",
  "Blue": "blue",
  "Green": "green",
  "Black": "black"
}, optionHandler);

updateCar(carObject);
