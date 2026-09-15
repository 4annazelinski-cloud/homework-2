let fahrenheit = prompt("Temperature in F:");
let celsius = (Number(fahrenheit) - 32) * 5 / 9;
let roundedCelsius = Math.round(celsius*10)/10

console.log(`${fahrenheit}°F = ${roundedCelsius}°C`);