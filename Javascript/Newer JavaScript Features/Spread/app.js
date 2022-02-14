//SPREAD
//Spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

//Spread in Function Calls
//Expand an iterable (array, string, etc.) into a list of arguments.
const nums = [9, 3, 2, 8]
Math.max(nums); //NaN

//Use spread!
Math.max(...nums); //67
//same as calling: Math.max(9, 3, 2, 8)



//Spread in Array Literals
//Create a new array using an existing array. Spreads the elements from one array into a new array.

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

[...nums1, ...nums2]; //[1, 2, 3, 4, 5, 6]

['a', 'b', ...nums2]; //["a", "b", 4, 5, 6]

[...nums1, ...nums2, 7, 8, 9]; //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//example
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];



//Spread with Objects