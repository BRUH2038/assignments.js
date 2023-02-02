// JSF1 Assignment Variables and Values

const country = "Mexico";
const continent = "North America";

// let country = "Mexico"
// let continent = "North America"

let population = 129;
let your_country = "Mexico";
let country2 = country;

alert(country2)

// JSF1 Assignment Data Types

const isIsland = false;
let language;
console.log(isIsland)
console.log(language)
console.log(country)
console.log(population)

// JSF1 Assignment let, const, var
language = "Spanish"

// JSF1 Assignment Basic Operators

console.log("Half the population is", population/2)
console.log("country2 population is now", population + 1)
console.log("Does your country have more people than Finland?", (population > 6))
console.log("Does your country have less people than the average country?", (population > 34))

let description = ("Sinaloa is in  Mexico and its 129 million people speak spanish.");
console.log(description)

// JSF1 Assignment Operator Precedence.
let a = 1, b = 1;
let c = ++a; //c = 2; actually 2
let d = b++; //d = 2; actually  1
console.log(c)
console.log(d)

a = 2;
let x = 2 + (a *= 2); //6;  
console.log(x)

// JSF1 Assignment String and Template Literals

description = `Sinaloa is in ${country}, and its ${population} million people speak ${language}.`;
console.log(description)

 // JSF1 Assignment if-else Statements.