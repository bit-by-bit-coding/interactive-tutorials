let arrayValues = document.getElementById('array-vals');
let executeButton = document.getElementById('execute-button');

executeButton.onclick = () => {
  showArray(arrayValues.value);
};

const showArray = (arr) => {
  alert('Your array is [' + arr + ']');
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
