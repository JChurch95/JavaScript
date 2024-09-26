// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise

// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true


// SOLUTION:

function compareArrays(array1, array2) {
    // Are they the same length?
    // If not, exit now.
    if (array1.length !== array2.length) {
        return false;
    }

    // Sort 'em!
    const sortedArray1 = array1.slice().sort();
    const sortedArray2 = array2.slice().sort();

    // Compare 'em, and kick out if there's a mismatch
    for (let i = 0; i < sortedArray1.length; i++) {
        if (sortedArray1[i] !== sortedArray2[i]) {
            return false;
        }
    }

    return true;
}
const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];
// returns true
console.log(compareArrays(array1, array2));



// LINE BY LINE BREAKDOWN:


// 1. Function Declaration

function compareArrays(arr1, arr2) {

// 	•	Purpose: This line defines a function called compareArrays. It takes two arrays, arr1 and arr2, as input
//      and returns true if the arrays contain the same elements (ignoring order) and false otherwise.


//  •	Details:

//  •	function: This keyword declares a function.
//  •	compareArrays: This is the name of the function.
//  •	arr1 and arr2: These are the two input arrays that will be compared.




// 2. Check if the Arrays Have the Same Length

if (arr1.length !== arr2.length) {
    return false;
}

//  •	Purpose: This part of the function checks whether the two arrays have the same length. 
//      If they don’t, the function immediately returns false, meaning the arrays are not equal.


//  •	Details:

//  •	arr1.length: This gives the length (number of elements) of the first array, arr1.
//  •	arr2.length: This gives the length of the second array, arr2.
//  •	!==: This is the strict inequality operator. It checks if the lengths of the arrays are not equal.


//  •	Why do this?:
//  •	If the two arrays don’t have the same number of elements, they cannot be equal, so we return false right away.




// 3. Creating Sorted Copies of the Arrays

const sortedArr1 = arr1.slice().sort();
const sortedArr2 = arr2.slice().sort();

// 	•	Purpose: These lines create sorted copies of arr1 and arr2 to ensure we can compare them in a consistent order.


//  •	Details:

//  •	arr1.slice(): The slice() method creates a shallow copy of the array arr1. 
//      This prevents us from modifying the original arr1 array when sorting it.

//  •	.sort(): The sort() method sorts the elements of the array in ascending order (from smallest to largest). 

//  •   Sorting makes it easier to compare the arrays because now the elements are in the same order.
//  •	sortedArr1: This is the sorted copy of arr1.
//  •	sortedArr2: This is the sorted copy of arr2.


//  •	Why sort the arrays?:
//  •	Sorting allows us to compare the arrays element by element, even if the original arrays had their elements in different orders. 
//  •   For example, [1, 2, 3, 4] and [4, 3, 2, 1] will both become [1, 2, 3, 4] after sorting, making it easy to compare.




// 4. Looping Through the Sorted Arrays

for (let i = 0; i < sortedArr1.length; i++) {

// 	•	Purpose: This line sets up a for loop that will iterate through the sorted arrays and compare the elements one by one.


//  •	Let’s break this loop into parts:

//  1-	Initialization (let i = 0):

   //  •	let i = 0;: We initialize the loop control variable i to 0. This variable tracks 
   //       the current index of the element being compared in sortedArr1 and sortedArr2.

//  2-	Condition (i < sortedArr1.length):

   //  •	i < sortedArr1.length: This checks whether i is less than the length of sortedArr1. The loop will run as long as this condition is true.
   //  •	Since sortedArr1 and sortedArr2 are the same length (we checked this earlier), 
   //       it doesn’t matter if we use sortedArr1.length or sortedArr2.length here.

//  3-	Increment (i++):

   //  •	i++: This increases the value of i by 1 after each iteration, so the loop moves to the next element.




// 5. Comparing Each Element

if (sortedArr1[i] !== sortedArr2[i]) {
    return false;
}

// 	•	Purpose: This part of the function compares the corresponding elements from sortedArr1 and sortedArr2. 
//      If there’s a mismatch, the function immediately returns false, indicating that the arrays are not equal.


//  •	Details:

//  •	sortedArr1[i]: This refers to the element at index i in sortedArr1.
//  •	sortedArr2[i]: This refers to the element at index i in sortedArr2.
//  •	!==: This is the strict inequality operator. It checks if the elements at the same index in the two arrays are not equal.
//  •	return false;: If a mismatch is found, the function returns false, meaning the arrays are not equal.


//  •	How it works:
//  •	If, at any index, sortedArr1[i] and sortedArr2[i] are not equal, the function concludes that 
//      the arrays are not the same and returns false immediately, ending the function.




// 6. Returning true if No Mismatches Are Found

return true;

//  •	Purpose: If the loop finishes and no mismatches are found, the function returns true, meaning the arrays are equal.


//  •	Details:

//  •	return true;: This line sends the result true back to where the function was called.


//  •	Why return true here?:
//  •	If the function reaches this point, it means that all elements in sortedArr1 and sortedArr2 were identical. Therefore, the arrays are considered equal, and the function returns true.