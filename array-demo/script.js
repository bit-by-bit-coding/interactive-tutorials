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
