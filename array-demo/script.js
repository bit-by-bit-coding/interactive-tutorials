let defaultCode = 'const arr = [1, 2, 3, 4, 5];';

let jar = CodeJar(
  document.getElementById('editor'),
  withLineNumbers(Prism.highlightElement, {
    color: '#000',
    backgroundColor: 'rgb(232, 232, 232)',
  }),
  {
    tab: '  ',
    indentOn: /<[a-zA-Z =\"\-]+>$/,
  }
);

jar.updateCode(defaultCode);
