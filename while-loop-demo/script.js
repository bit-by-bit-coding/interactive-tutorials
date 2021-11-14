var e1CounterText = document.getElementById('e1');
var e1SliderAmount = document.getElementById("e1SliderAmount");
var c;
var count = 0;

function e1stop()
{
    clearInterval(c);
}
function e1start()
{
    var e1Slider = document.getElementById("e1TimerValue");
    if (e1Slider.value == 10)
    {
        e1SliderAmount.innerHTML = "1 second";
    }
    else{
        e1SliderAmount.innerHTML = (e1Slider.value*100)+" millseconds";
    }
    c = setInterval(function() {
        e1CounterText.innerHTML = "Counter: "+count;
        count++;
    }, (e1Slider.value*100));
}
function e1onchange(x) {
    e1SliderValue = x;

}
