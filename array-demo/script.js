let arrayValues = document.getElementById('array-vals');
let executeButton = document.getElementById('execute-button');
let codeDisplay = document.getElementById('code-display');
let arrayLength = document.getElementById('array-length');
let arrayAtI = document.getElementById('array-at-i');
executeButton.onclick = () => {
  showArrayCode(arrayValues.value);
};

const showVisualization = (arr) => {};

const showArrayCode = (arr) => {
  // Turn comma separated vals into actual array using split
  parsedArr = arr.split(',');
  // Display code to create array, length, & vals at different spots
  codeDisplay.innerHTML = `let myArray = [${parsedArr}]`;
  arrayLength.innerHTML = `myArray.length = ${parsedArr.length}`;
  arrayAtI.innerHTML = `myArray[0] = ${parsedArr[0]}`;
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
