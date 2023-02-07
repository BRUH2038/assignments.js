////////////////////////////////////////////////////////////////
// JSF1 Assignment Variables and Values
////////////////////////////////////////////////////////////////
const country = "Mexico";
const continent = "North America";

let population = 129;
let your_country = "Mexico";
let country2 = country;

alert(country2)
////////////////////////////////////////////////////////////////
// JSF1 Assignment Data Types
////////////////////////////////////////////////////////////////

let isIsland = false;
let language;
console.log(typeof isIsland) //boolean
console.log(typeof language) //undefined
console.log(typeof country) //string
console.log(typeof population) //number

////////////////////////////////////////////////////////////////
// JSF1 Assignment let, const, var
////////////////////////////////////////////////////////////////

language = "Spanish"

////////////////////////////////////////////////////////////////
// JSF1 Assignment Basic Operators
////////////////////////////////////////////////////////////////

console.log("Half the population is", population/2)
console.log("country2 population is now", population + 1)
console.log("Does your country have more people than Finland?", (population > 6))
console.log("Does your country have less people than the average country?", (population > 34))

let description = `Sinaloa is in  ${country}, and its ${population} million people speak ${language}.`;
console.log(description)

////////////////////////////////////////////////////////////////
// JSF1 Assignment Operator Precedence.
////////////////////////////////////////////////////////////////

let a = 1, b = 1;
let c = ++a; //c = 2; actually 2
let d = b++; //d = 2; actually  1
console.log(c)
console.log(d)

a = 2;
let x = 2 + (a *= 2); //6;  
console.log(x)

////////////////////////////////////////////////////////////////
// JSF1 Assignment String and Template Literals
////////////////////////////////////////////////////////////////

description = `Sinaloa is in ${country}, and its ${population} million people speak ${language}.`;
console.log(description)

////////////////////////////////////////////////////////////////
// JSF1 Assignment if-else Statements.
////////////////////////////////////////////////////////////////

if (population > 33) {
    console.log(`${country}'s population is above average`)
} 

else if (population < 33) {
    console.log(`${country}'s population is ${33 - population} million below average`)
}

else {
    console.log(`${country}'s population is average`)
}

////////////////////////////////////////////////////////////////
// L8 ASSIGNMENT: JSF1 Assignment Type Conversion and Coercion
////////////////////////////////////////////////////////////////

console.log('9' - '5'); // 4
console.log('19' - '13' + '17');//11
console.log('19' - '13' + 17);//23 // actually 617 str
console.log('123' < 57);//false
console.log(5 + 6 + '4' + 9 - 4 - 2);//18 // actually 1143 int

// a. = 4, b. = 617, c. = 23, d. = false, e. = 1143

console.log("JSF1 Assignment Type Conversion and Coercion");
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

console.log("prt. 2");

// a. = 10, b. = -1, c. = 1, d. = 2, e. = 6, f = 9px, g = $45, h = 2, i = NaN, j=   -9 5, k=    -14, l= 1, m= NaN, n= -2  

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);

a = prompt("First number?", 1);
b = prompt("First number?", 2);
alert(Number(a) + Number(b)); // 12

////////////////////////////////////////////////////////////////
// L10 ASSIGNMENT: JSF1 Assignment  Equality Operators
////////////////////////////////////////////////////////////////

let numNeighbours = prompt ('How many neighbor countries does your country have?');

if (numNeighbours == 1){
    alert("Only 1 border!")
} 

else if (numNeighbours >= 0){
    alert("no borders")
}

else{
    alert(numNeighbours +"borders")
}

///////////////////////////////////////////////////////////
//L11 Assignment:  JSF1 Assignment Logical Operator///////
/////////////////////////////////////////////////////////

//language = "English";
//population = 49;
//isIsland = false;

if (language == "English" && population < 50 && isIsland === false){
    console.log(` You should live in ${country} :)`)
}

else {
    console.log(` ${country} does not meet your criteria (¬_¬ )`)
}