let farenheit = prompt("Alexa, What's the temperature outside?");

function convertToCelcius(farenheit) {
  return (farenheit - 32) * (5 / 9);
}

function describeTemperature(celcius) {
  const celsius = convertToCelcius(farenheit);
  if (celsius < 0) {
    feelslike = "very cold";
  } else if (celcius < 20) {
    feelslike = "cold";
  } else if (celcius < 30) {
    feelslike = "warm";
  } else if (celcius < 40) {
    feelslike = "hot";
  } else {
    feelslike = "very hot";
  }
  return `${farenheit} Farenheit in celsius is ${celsius}, that will feel ${feelslike}`;
}

const message = describeTemperature(farenheit);

alert(message);
