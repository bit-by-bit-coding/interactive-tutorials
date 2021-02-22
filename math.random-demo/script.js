window.onload = async function() {
    await sleep(400);
}
var calculatorSettings = {
    settingsMenu: false,
    zoomButtons: false,
    keypad: false,
    expressionsTopbar: false,
    border: false,
    lockViewport: true,
    expressions: false
  };

  var calculator = Desmos.GraphingCalculator(
    document.getElementById('calculator'),
    calculatorSettings
    );
  var scaleInput = document.getElementById("scale");
  var shiftInput = document.getElementById("shift");
    
  calculator.updateSettings({
    showYAxis: false,
    showGrid: false
  });


  var points = []
  

  scaleInput.onchange = update;
  shiftInput.onchange = update;

  function getScale() {
    return parseInt(scaleInput.value)
  }

  function getShift() {
    return parseInt(shiftInput.value)
  }
  //alias for getShift. they are the same value
  getRandMin = getShift;

  function getRandMax() {
    return getScale() + getShift()
  }

  function update() {
    calculator.removeExpressions(points);
    points = []

    let padding = .1*getScale()
    calculator.setMathBounds({
      left: getRandMin()- padding,
      right: getRandMax()+ padding,
      bottom: -1,
      top: 1
    });

    let pointObj = {
      id: "range" + points.length,
      latex: getRandMin() + " <= x  < " + getRandMax(),
      color: Desmos.Colors.BLUE
    };

    points.push(pointObj);
    // Add an expression
    calculator.setExpression(pointObj);



  }
  function plotRandomPoint() {
    let point = (Math.random() * getScale()) + getShift()
    let id = "point" + points.length

    let pointObj = { id: id, latex: '(' + point + ',0)' };
    points.push(pointObj);
    // Add an expression
    calculator.setExpression(pointObj);


  }
  update();