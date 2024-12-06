// Part A  

const lucasWeight = 78;
const lucasHeight = 1.69;

const peterWeight = 92;
const peterHeight = 1.95;

const lucasBMI = lucasWeight / (lucasHeight * lucasHeight);
const peterBMI = peterWeight / (peterHeight * peterHeight);

if(lucasBMI > peterBMI) {
    console.log("The BMI of Peter is " + peterBMI.toFixed(2) + " kg/m^2." + " The BMI of Lucas is " + lucasBMI.toFixed(2) + " kg/m^2." + " Lucas' BMI is higher than Peter's BMI.");
} else if (lucasBMI < peterBMI) {
    console.log("The BMI of Lucas is " + lucasBMI + " kg/m^2." + " The BMI of Peter is " + peterBMI + " kg/m^2." + " Peter's BMI is higher than Lucas' BMI.")
} else {
    console.log("Peter and Lucas have equal BMI's!")
}

// Part B

const myTempCelsius = 22.2;
const myTempFahrenheit = (myTempCelsius * 9 / 5) + 32;
const celsiusToFahrenheit = `${myTempCelsius} degrees C is ${myTempFahrenheit} degrees F`

console.log(celsiusToFahrenheit);

const myOtherTempFahrenheit = 85;
const myOtherTempCelsius = (myOtherTempFahrenheit - 32) * 5 / 9;
const fahrenheitToCelsius = `${myOtherTempFahrenheit.toFixed(2)} degrees F is ${myOtherTempCelsius.toFixed(2)} degrees C`;

console.log(fahrenheitToCelsius);

// C 

if(lucasBMI > peterBMI) {
    console.log(`Lucas' BMI (${lucasBMI.toFixed(1)}) is higher than Peter's (${peterBMI.toFixed(1)})!`)
}else if(peterBMI > lucasBMI) {
    console.log(`Peter's BMI (${peterBMI.toFixed(1)}) is higher than Lucas' (${lucasBMI.toFixed(1)})!`)
}else {
    console.log(`Peter's BMI (${peterBMI.toFixed(1)}) and Lucas' BMI (${lucasBMI.toFixed(1)}) are equal!`)
}

//D

const ConvertCelsiusToFahrenheit = (celsius) => console.log(`${celsius} degrees celsius is ${(celsius * 9 / 5) + 32} degrees fahrenheit`);

ConvertCelsiusToFahrenheit(100);
ConvertCelsiusToFahrenheit(0);
ConvertCelsiusToFahrenheit(10);

const ConvertFahrenheitToCelsius = (fahrenheit) => console.log(`${fahrenheit} degrees fahrenheit is ${((fahrenheit - 32) * 5 / 9).toFixed(1)} degrees celsius`);

ConvertFahrenheitToCelsius(32);
ConvertFahrenheitToCelsius(10);
ConvertFahrenheitToCelsius(102);