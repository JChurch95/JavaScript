// Define a function that takes an array and removes all falsy values from the array


// SOLUTION:

function removeFalsyValues(array) {
    // Start with a new empty array
    let truthyArray = [];
    // Loop through the input array
    for (let i = 0; i < array.length; i++) {
        // Is it truthy? If so, keep it!
        // we can test "truthy" with a simple if()!
        if (arr[i]) {
            // push() the value into the new array
            truthyArray.push(arr[i]);
        }
    }
    // Return that array
    return truthyArray;
}

// Example usage
const myArray = [0, 1, false, '', 3, null, 'hello'];
const result = removeFalsyValues(myArray)
console.log(result);


// LINE BY LINE BREAKDOWN:



// 1. Function Declaration

function removeFalsyValues(array) {

// •    Purpose: This line defines a function called removeFalsyValues that removes any falsy values from an array 
//      and returns a new array that contains only truthy values.

// •	Details:
// •	function: This is the keyword used to declare a function in JavaScript.
// •	removeFalsyValues: This is the name of the function we’re defining. The function’s job is to remove “falsy” values from an array.




// 2. Creating an Empty Array

let truthyArray = [];

// •    Purpose: This line creates a new, empty array called truthyArray that will store all the truthy values from the input array array.

// •	Details:
// •	let: This is a keyword used to declare a block-scoped variable. We use it to declare truthyArray.
// •	truthyArray: This is the name of the new variable, and it will hold the array that contains only the truthy values.
// •	[]: This represents an empty array, which we will populate with the values from array that pass the “truthy” test.

// •	Why do this?: We need a new array to store the values that are not “falsy”. We initialize it as empty, 
//      and as we find truthy values in the input array, we will add them to this new array.




// 3. Setting Up the Loop

for (let i = 0; i < array.length; i++) {

// •    Purpose: This line sets up a for loop to iterate over each element in the input array. 
//      The loop will check each element to see if it’s “truthy” or “falsy”.

// •	Let’s break this loop into parts:

// 1.	Initialization (let i = 0):

    // •	let i = 0;: We initialize the loop control variable i to 0. This variable will be used to track 
    //      the current index of the element we’re checking in the array.

    // •	The first element of any array is at index 0, so i = 0 makes sense as the starting point.


// 2.	Condition (i < array.length):

    // •	i < array.length;: This condition checks whether i is less than array.length.
    // •	array.length: This gives the total number of elements in the array.
    // •	The loop will continue to run as long as i is less than the length of the array, meaning that we haven’t yet reached the end of the array.
    // •	For example, if array = [1, false, "", 3], then array.length is 4, and the loop will iterate for i = 0, 1, 2, 3.


// 3.	Increment (i++):
    // •	i++: This increments the value of i by 1 after each iteration of the loop.
    // •	For example, if i = 0 in the first iteration, after that iteration i becomes 1, then 2, and so on.
    // •	The ++ is shorthand for i = i + 1.


// •	Purpose of the loop: This loop will start from the first element of the array and iterate over each element, one at a time, until it reaches the last element.




// 4. Checking for Truthy Values

if (array[i]) {

// •    Purpose: This line checks whether the current element of the array (array[i]) is truthy. If it is, we will keep it (i.e., add it to truthyArray).
// •	Details:
// •	if: This is an if statement, which runs the block of code inside it only if the condition inside the parentheses evaluates to true.
// •	array[i]: This refers to the element at index i of the input array array. For example, if array = [1, false, 2] and i = 0, then array[0] is 1.
// •	Truthy/Falsy:
// •	In JavaScript, values are either truthy or falsy:
// •	Falsy values are: false, 0, "" (empty string), null, undefined, and NaN (Not-a-Number).
// •	All other values are truthy.
// •	The if (array[i]) condition checks whether the current element array[i] is truthy. If it is truthy, the code inside the if block will run.
// •	Why check this?: We only want to keep truthy values in the new array, so we check each element with this if statement.




// 5. Adding Truthy Values to truthyArray

truthyArray.push(array[i]);

// •    Purpose: If the if condition is true (i.e., the current element array[i] is truthy), this line adds that element to the truthyArray.

// •	Details:
// •	truthyArray: This is the array that stores all the truthy values we’ve found so far.
// •	.push(): This is a method used to add a new element to the end of an array. It modifies the array by adding the new value.
// •	array[i]: This is the current element of the input array. If it is truthy, we add it to truthyArray.

// •	How It Works:
// •	For example, if array = [1, false, 2]:
// •	In the first iteration (i = 0), array[0] = 1, which is truthy, so 1 is pushed into truthyArray, making truthyArray = [1].
// •	In the second iteration (i = 1), array[1] = false, which is falsy, so nothing is added to truthyArray.
// •	In the third iteration (i = 2), array[2] = 2, which is truthy, so 2 is pushed into truthyArray, making truthyArray = [1, 2].




// 6. Returning the Result

return truthyArray;

// 	•	Purpose: This line returns the final result, which is the truthyArray containing only the truthy values from the input array.

//  •	Details:
//  •	return: This keyword is used to return a value from the function.
//  •	truthyArray: This is the array that now contains only the truthy values from the input array.

//  •	Why return?: By returning truthyArray, we can access the array outside the function and see the result.
