//------------------- TASK I --------------------------------------------------
// The combination of two strings using the + operator is a very easy task.
// Another way is to use the concat or join method, but what if we could not use
// any of these options? Your task will be to create two variables with Hello and
// World values, and then combine them with a method other than those mentioned above.

const firstWord = 'Hello';
const secondWord = 'World';
const sumStrings = `${firstWord} ${secondWord}`;
console.log(sumStrings);
// or
const sumStrings = (firstWord = 'Hello', secondWord = 'World') => console.log(`${firstWord} ${secondWord}`);
sumStrings();

//---------------------TASK II--------------------------------------------------
// Create a multiply function that will return the result of the multiplication
// operation of two values a and b. We want the result of such a call to be also
// correct - you can assume that if the user does not provide any parameter,
// it is to be replaced 1. Do not use conditional instructions !

const multiply = (multiplier1 , multiplier2 = 1) => console.log(multiplier1 * multiplier2);
multiply(5);
multiply(2,5);
multiply(6,6);

// -------------------TASK III -------------------------------------------------
// Write an average function that calculates the arithmetic mean of all arguments
// that will be passed to it. Assume that the arguments will always be numbers

const average = (...args) => args.reduce((a,b) => a + b, 0)/args.length;
average(1);
average(1, 3);
average(1, 3, 6, 6);

// -------------------TASK IV --------------------------------------------------
// Create an array with grad grades = [1, 5, 5, 5, 4, 3, 3, 2, 1] grades,
// and then skillfully pass the grades to the average(already existing) function
// to get the result.Use the spread operator!

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

// -------------------TASK V----------------------------------------------------
// While working on the project, you came across a very strange data structure
// [1, 4, 'Iwona', false, 'Nowak']. Your task is to use destructuring to get
// the firstname and lastname variables from the array.

const array = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,third, ,fifth] = array;
// or
const [ , ,firstname, ,lastname] = array;
