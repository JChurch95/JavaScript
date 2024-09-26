// Define a function that takes an array and reverses all the values in an array.
// The function should not mutate the original array.
// [1, 2, 3, 4, 5] should return [5, 4, 3, 2, 1]


// SOLUTION:

function reverseArray(array) {
    // Start with an empty array to store the reversed elements
    let reversedArray = [];
    // Loop through the input array in reverse order
    for (let i = array.length - 1; i >= 0; i--) {
        // Push each element into the reversedArray
        reversedArray.push(array[i]);
    }
    // Return the reversed array
    return reversedArray;
}

// Example usage
const reversedArray = reverseArray([1, 2, 3, 4, 5]);
console.log(reversedArray);




// LINE BY LINE BREAKDOWN



// 1. Function Declaration

function reverseArray(array) {

// Purpose: This line defines a function named reverseArray that will reverse the order of the elements in an array.

// Details:
// function: This keyword declares a function in JavaScript.
// reverseArray: The name of the function that we’re defining.
// array: This is a parameter that acts as a placeholder for the array that you will pass into the function.

// For example, in reverseArray([1, 2, 3, 4, 5]), the array [1, 2, 3, 4, 5] is passed as the argument to arr.




// 2. Creating an Empty Array

let reversedArray = [];

// Purpose: This line creates an empty array called reversedArray. This array will be used to store the reversed elements of the input array.

// Details:
// let is used to declare the variable reversedArray, which is flexible and can change (since arrays are mutable in JavaScript).
// [] initializes an empty array, which is essentially a list of values.

// Why do this?: You need an empty array to store the reversed elements.




// 3. Setting Up the Loop

for (let i = array.length - 1; i >= 0; i--) {

// Purpose: This line sets up a for loop that will run from the last element of the array arr to the first element, 
// effectively moving backward through the array.

// Let’s break this loop into parts:

	// 1.	Initialization (let i = arr.length - 1):

	    // •	let i = arr.length - 1;:

	    // •	arr.length: This gives the total number of elements in the array arr.

	    // •	arr.length - 1: Since arrays are zero-indexed (the first element is at index 0), the index of the last element in the array is arr.length - 1. 
        //      For example, if arr = [1, 2, 3, 4, 5], then arr.length is 5, and arr.length - 1 = 4 (which is the index of the last element).

	    // •	let i = arr.length - 1; initializes i to start at the last index of the array (in this case, i = 4).


	// 2.	Condition (i >= 0):

	    // •	i >= 0;: This is the condition that keeps the loop running. The loop will continue as long as i is greater than or equal to 0. 
        //      Once i becomes less than 0, the loop will stop.

	    // •	In other words, the loop will iterate until i reaches the first element (index 0), and then it will stop after checking all elements.


	// 3.	Decrement (i--):

	    // •	i--: This is the decrement operator, which reduces the value of i by 1 after each iteration of the loop. The -- means “subtract 1.”

	    // •	For example, if i starts at 4, in the next iteration, i will be 3, then 2, then 1, and so on.





// 4. Inside the Loop: Adding Elements to reversedArray

reversedArray.push(array[i]);

// Purpose: This line adds elements from the original array arr to the reversedArray, starting from the last element and moving toward the first.

// Details:
// arr[i]: This accesses the element at index i in the array arr. Since the loop is running from the 
// last index to the first, i starts at arr.length - 1 (the last element).

// .push(): This is an array method in JavaScript that adds a new element to the end of an array. 
//  In this case, it’s adding the element arr[i] to the end of reversedArray.

// How It Works:
// On each iteration of the loop, arr[i] (starting from the last element) is pushed into reversedArray.
// For example, if arr = [1, 2, 3, 4, 5]:
// On the first iteration (i = 4), arr[4] = 5 is pushed into reversedArray.
// On the second iteration (i = 3), arr[3] = 4 is pushed into reversedArray, and so on.
// Result: By the end of the loop, all elements from arr have been pushed into reversedArray in reverse order.




// 5. Returning the Reversed Array

return reversedArray;

// Purpose: This line returns the final result, which is the reversedArray containing the elements of arr in reverse order.

// Details:
// return: This keyword is used to send back the value or result from the function to wherever the function was called.
// reversedArray: The array that now contains the elements of arr in reverse order.

// Why return?: By returning reversedArray, you make the reversed array available outside of the function, so you can use it or print it (as you do with console.log).




// 6. Example Usage

const reversedArray = reverseArray([1, 2, 3, 4, 5]);
console.log(reversedArray);

// Purpose: These lines of code show how to use the reverseArray function.

// 1.	Function Call:

    // •	reverseArray([1, 2, 3, 4, 5]): This calls the function reverseArray and passes the array [1, 2, 3, 4, 5] as the argument.

    // •	The function runs and returns a new array, which is [5, 4, 3, 2, 1] (since the array was reversed).


// 2.	Store the Result:

    // •	const reversedArray = ...;: The result of the function ([5, 4, 3, 2, 1]) is stored in the variable reversedArray.


// 3.	Print the Result:

    // •	console.log(reversedArray);: This prints the contents of reversedArray to the console, so you can see the reversed array.
    // •	Output: [5, 4, 3, 2, 1].
