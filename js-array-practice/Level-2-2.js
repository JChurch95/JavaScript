// Define a function that takes an array and removes duplicate values


// SOLUTION:

function removeDuplicates(array) {
    let uniques = [];
    for (let i = 0; i < array.length; i++) {
        if (uniques.indexOf(array[i]) === -1) {
            uniques.push(array[i]);
        }
    }
    return uniques;
}

// Example usage
const myArray = [1, 2, 3, 4, 5, 4, 3];
const noDupes = removeDuplicates(myArray);
console.log(noDupes)


// LINE BY LINE BREAKDOWN:



// 1. Function Declaration

function removeDuplicates(array) {

// 	•	Purpose: This line defines a function named removeDuplicates that takes an array as 
//      input and returns a new array with all duplicate values removed.


//  •	Details:

//  •	function: This keyword declares a function.
//  •	removeDuplicates: This is the name of the function.
//  •	array: This is the function’s parameter, representing the array we pass in to remove duplicates from.




// 2. Creating an Empty Array for Uniques

let uniques = [];

// 	•	Purpose: This line creates an empty array named uniques to store unique values (values that are not duplicates) from the input array.


//  •	Details:

//  •	let: This keyword declares a block-scoped variable.
//  •	uniques: This variable will hold the new array of unique values.
//  •	[]: This represents an empty array.




// 3. Setting Up the Loop

for (let i = 0; i < array.length; i++) {

// 	•	Purpose: This line sets up a for loop to iterate over each element in the input array.


//  •	Let’s break this loop into parts:

//  1-	Initialization (let i = 0):

   //  •	let i = 0;: We initialize the loop control variable i to 0. This tracks the index 
   //       of the current element in the input array that we are examining.


//  2-	Condition (i < array.length):

   //  •	i < array.length;: This condition checks whether i is less than the length of the array.
   //       As long as i is less than the number of elements in the array, the loop will continue.

   //  •	array.length: This gives the total number of elements in the input array. 
   //       For example, if array = [1, 2, 3, 4, 5, 4, 3], then array.length is 7, so the loop will iterate 7 times.


//  3-	Increment (i++):

   //  •	i++: This increments the value of i by 1 after each iteration, allowing the loop to move to the next element in the array.




// 4. Checking if the Element is Unique

if (uniques.indexOf(array[i]) === -1) {

// 	•	Purpose: This line checks if the current element (array[i]) is already present in the uniques array. 
//      If it’s not present (meaning it’s unique), the code inside the if block will run.


//  •	Details:

//  •	uniques.indexOf(array[i]): This searches for the index of the current element array[i] in the uniques array. 
//      If the element exists in uniques, it returns its index (0 or higher). If the element doesn’t exist, it returns -1.


//  •	=== -1: This checks whether the element is not found in uniques. 
//      If the element is not found (i.e., indexOf returns -1), it means the element is unique and should be added to uniques.



//  •	How it works:
//  •	For example, in the first iteration (i = 0), array[0] = 1 and uniques.indexOf(1) is -1 (because uniques is empty), 
//      so 1 is unique and will be added to uniques.


//  •	In the fourth iteration (i = 4), array[4] = 5, and since 5 is not in uniques, it is also added to uniques.




// 5. Adding the Element to the Uniques Array

uniques.push(array[i]);

// 	•	Purpose: This line adds the current element (array[i]) to the uniques array because it has passed the uniqueness check in the if statement.


//  •	Details:

//  •	uniques: This is the array we’re building to store unique values.
//  •	.push(): This is a method that adds a new element to the end of an array.
//  •	array[i]: This is the current element of the input array. If it’s unique, it gets added to uniques.


//  •	How it works:
//  •	After each successful uniqueness check, the element is pushed into uniques. For example:
//  •	After the first iteration (i = 0): uniques = [1].
//  •	After the second iteration (i = 1): uniques = [1, 2].
//  •	After the seventh iteration (i = 6): uniques = [1, 2, 3, 4, 5].




// 6. Returning the Array of Uniques

return uniques;

// 	•	Purpose: This line returns the final result, which is the array uniques that contains only the unique values from the input array.


//  •	Details:

//  •	return: This keyword is used to send the result of the function back to where the function was called.
//  •	uniques: This is the array of unique values.


//  •	Why return?: By returning the uniques array, the function gives us access to the array of unique values 
//      outside the function so we can use it elsewhere (like printing it to the console).