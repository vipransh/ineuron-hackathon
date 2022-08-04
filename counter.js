let valueDisplays = document.querySelectorAll(".milestone_counter");
let interval = 4000;
let maxValue=10;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-end-value"));
  if(valueDisplay.getAttribute("data-end-value")==400000)
  {
	maxValue=1000;
  }
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += maxValue;
    valueDisplay.textContent = startValue;
    if (startValue >= endValue) {
      clearInterval(counter);
    }
  }, duration);
});