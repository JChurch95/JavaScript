// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array

// For example:
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// would return
// { name: 'Charlie', color: 'brown', age: 10 };


// SOLUTION:

function arrayToObject(array) {
    let myObject = {};
    for (let i = 0; i < array.length; i++) {
        myObject[array[i][0]] = array[i][1];
    }
    return myObject;
}

// Example usage
const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
const result = arrayToObject(myArray);
console.log(result);


// LINE BY LINE BREAKDOWN:



// 1. Function Declaration

function arrayToObject(array) {

// 	•	Purpose: This line defines a function called arrayToObject, which converts an array of key-value pairs (sub-arrays) 
//      into an object where each key is mapped to its corresponding value.


//  •	Details:

//  •	function: This keyword declares a function in JavaScript.

//  •	arrayToObject: This is the name of the function we’re defining.

//  •	array: This is the parameter of the function, representing the input array that contains sub-arrays. 
//      Each sub-array has two elements: a key and a value.




// 2. Creating an Empty Object

let myObject = {};

// 	•	Purpose: This line creates an empty object called myObject which will store the key-value pairs extracted from the input array.


//  •	Details:

//  •	let: This is a keyword used to declare a block-scoped variable.

//  •	myObject: This is the variable that will hold the object we’re building. Initially, it is an empty object ({}).


//  •	Why do this?: We start with an empty object because we will gradually add key-value pairs to this object as we process the input array.




// 3. Setting Up the Loop

for (let i = 0; i < array.length; i++) {

// 	•	Purpose: This line sets up a for loop that will iterate over each sub-array (key-value pair) in the input array.


//  •	Let’s break this loop into parts:


//  1.	Initialization (let i = 0):

   //  •    let i = 0;: This initializes the loop control variable i to 0. This variable will 
   //       be used to track the current index of the sub-array in array.

   //  •	The first sub-array is at index 0, so i = 0 is the starting point.


//  2.	Condition (i < array.length):

   //  •	i < array.length;: This condition checks whether i is less than the length of the input array. 
   //       The loop will continue running as long as this condition is true.

   //  •	array.length: This gives the total number of sub-arrays in array. For example, 
   //       if array = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]], then array.length is 3 (since there are 3 sub-arrays).

   //  •	The loop will run from i = 0 to i = 2 (3 iterations).


//  3.	Increment (i++):

   //  •	i++: This is the increment operator, which increases the value of i by 1 after each iteration.

   //  •	For example, after the first iteration, i becomes 1, then 2, and so on.




// 4. Extracting the Key and Value

let [key, value] = array[i];

// 	•	Purpose: This line uses destructuring assignment to extract the key and value from the current sub-array array[i].


//  •	Details:

//  •	array[i]: This refers to the current sub-array at index i. For example, if i = 0 and 
//      array = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]], then array[0] is ['name', 'Charlie'].

//  •	[key, value]: This is an array destructuring assignment. It takes the first 
//      element of array[i] and assigns it to key, and it takes the second element and assigns it to value.

//  •	How it works:

//  •	For example, in the first iteration (i = 0):
//  •	array[0] = ['name', 'Charlie'].
//  •	[key, value] = ['name', 'Charlie'] results in:

//      key = 'name'
//      value = 'Charlie'

//  •	This pattern repeats for each sub-array.




// 5. Adding the Key-Value Pair to the Object

myObject[key] = value;

// 	•	Purpose: This line adds the key-value pair to the myObject using bracket notation.


//  •	Details:

//  •	myObject[key]: This accesses or creates a property in myObject using the value of key. 
//      If key is "name", this creates or accesses myObject['name'].

//  •	= value: This assigns the value to the corresponding key in the object. 
//      For example, if key = "name" and value = "Charlie", it assigns "Charlie" to myObject['name'].


//  •	How it works:
//  •	After the first iteration (i = 0):
//  •	myObject['name'] = 'Charlie'.
//  •	Now myObject = { 'name': 'Charlie' }.
//  •	In the next iterations, additional key-value pairs are added:
//  •	After the second iteration (i = 1): myObject['color'] = 'brown'.
//  •	After the third iteration (i = 2): myObject['age'] = 10.




// 6. Returning the Object

return myObject;

// 	•	Purpose: This line returns the final result, which is the myObject containing all the key-value pairs extracted from the input array.


//  •	Details:

//  •	return: This keyword is used to send the result of the function back to wherever the function was called.

//  •	myObject: This is the object that contains the key-value pairs from the input array.
