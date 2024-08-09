"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Q16 Answer:
let guests = ["Aslam", "Maria", "Naeem", "vicky"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Ishaaq");
guests.splice(guests.length / 2, 0, "Mehdi");
guests.push("Adil");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// Q17 Answer:
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
