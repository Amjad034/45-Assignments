let guests: string[] = ["Aslam", "Maria", "Naeem", "vicky"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Ishaaq");
guests.splice(guests.length / 2, 0, "Mehdi");
guests.push("Adil");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});