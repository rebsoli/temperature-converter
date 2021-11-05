function Convert() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var temperatureInFahrenheit = (temperature * 1.8 + 32).toFixed(2);

  if (!isNaN(temperature)) {
    var result = document.getElementById("result");
    var resultOnScreen = `A temperatura em Fahrenheit é de: ${temperatureInFahrenheit} ºF`;
    result.innerHTML = resultOnScreen;
  } else {
    temperature.innerHTML = "";
  }
}