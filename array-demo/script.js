let arrayValues = document.getElementById('array-vals');
let executeButton = document.getElementById('execute-button');
let codeDisplay = document.getElementById('code-display');
let arrayLength = document.getElementById('array-length');
let arrayAtI = document.getElementById('array-at-i');
let visualization = document.getElementById('visualization');

arrayValues.defaultValue = '1, 2, 3, 4, 5';

executeButton.onclick = () => {
  // Turn comma separated vals into actual array using split
  let parsedArr = parseArray(arrayValues.value);
  showVisualization(parsedArr);
  showArrayCode(parsedArr);
};

const parseArray = (str) => {
  return str.split(',');
};

const showVisualization = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let node = document.createElement('DIV');
    let iNode = document.createTextNode(i);
    let textNode = document.createTextNode(arr[i]);
    node.setAttribute('class', 'array-element');
    node.setAttribute('id', i);
    node.appendChild(iNode);
    node.appendChild(textNode);
    visualization.appendChild(node);
  }

  document.addEventListener('click', function (e) {
    if (e.target && Number.isInteger(parseInt(e.target.id))) {
      let i = e.target.id;
      arrayAtI.innerHTML = `myArray[${i}] = ${arr[i]}`;
    }
  });
  // Still need to -
  // add index value to visualization
  // make visualization elements clickable
};

const showArrayCode = (arr) => {
  // Display code to create array, length, & vals at different spots
  codeDisplay.innerHTML = `let myArray = [${arr}];`;
  arrayLength.innerHTML = `myArray.length = ${arr.length}`;
};

// let jar = CodeJar(
//   document.getElementById('editor'),
//   withLineNumbers(Prism.highlightElement, {
//     color: '#000',
//     backgroundColor: 'rgb(232, 232, 232)',
//   }),
//   {
//     tab: '  ',
//     indentOn: /<[a-zA-Z =\"\-]+>$/,
//   }
// );

// jar.updateCode(defaultCode);
