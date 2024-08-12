let friends: string[] = ["Alice", "Ali", "john"];

console.log(friends[3]); 
// Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.

friends[2]  // Correcting the error by accessing a valid index.
console.log(friends[2]);