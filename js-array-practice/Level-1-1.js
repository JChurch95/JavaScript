// Define a function that takes a string and an integer and creates a new array of entries equal to that integer.
// Each value is equal to the string passed in.
// myFunction('sunshine', 3) should return ['sunshine', 'sunshine', 'sunshine'];


// SOLUTION:

function createArrayOfString(string, integer) {
    // Start with a new empty array
    let resultArray = [];
    // Loop through "count" number of times
    for (let i = 0; i < integer; i++) {
        // push() the value into the new array
        resultArray.push(string);
    }
    // Return that array
    return resultArray;
}

// Example usage
const result = createArrayOfString('flabbergasted', 5);
console.log(result);




// LINE BY LINE BREAKDOWN:



// 1. Function Declaration

function createArrayOfString(string, integer) {

// Purpose: This line defines a function called createArrayOfString that will take two inputs, or parameters:

// string: This is a placeholder for the string you want to repeat (in this case, 'flabbergasted').

// integer: This represents the number of times you want to repeat the string (in this case, 5).




// 2. Creating an Empty Array

let resultArray = [];

// Purpose: This line creates a new, empty array called resultArray. You will fill this array with copies of the string parameter.

// Details:
// let is used to declare the variable resultArray, which is flexible and can change (since arrays are mutable in JavaScript).
// [] initializes an empty array, which is essentially a list of values.

// Why do this?: You need an empty array to store the repeated string values. This array will be filled during the loop and returned at the end.




// 3. Setting Up the Loop

for (let i = 0; i < integer; i++) {

// Purpose: This line sets up a for loop that will run a specific number of times (equal to the integer passed into the function).

// Details:
// for is a keyword to create a loop that runs a set number of times.
// The loop starts by declaring a counter variable i using let i = 0;. The i will keep track of how many times the loop has run.
//  The condition i < length checks whether the loop should continue.
// Each time the loop runs, i is incremented by 1 (i++), which ensures the loop doesn’t run infinitely.




// 4. Adding the String to the Array

resultArray.push(string);

// Purpose: This line adds the value of string into the resultArray for every iteration of the loop.

// Details:
// .push() is a method that adds a new element to the end of an array.
// Every time the loop runs, the value of string (e.g., 'flabbergasted') is pushed into the resultArray.

// Why push inside the loop?: Since the loop runs count times, this line will be executed count times, 
// meaning the string will be added to the array multiple times.




// 5. Exiting the Loop and Returning the Array

return resultArray;

// Purpose: This line returns the final array that contains all the repeated strings.

// Details:
// The return keyword is used to output a value from the function.
// In this case, resultArray is returned. By this point, the array will contain count elements, all of which are equal to string.

// Why return?: Returning the array allows you to store or use the array outside of the function when it is called.




// 6. Example Usage

const result = createArrayOfString('flabbergasted', 5);

// Purpose: This line calls the function createArrayOfString and passes two arguments:
// 'flabbergasted': This is the string to be repeated.
// 5: This is the number of times to repeat the string.




// 7. Printing the Result

console.log(result);

// Purpose: This line prints the content of the result variable to the console.