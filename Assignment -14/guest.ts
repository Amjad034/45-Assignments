let guests: string[] = ["Aslam", "Maria", "Naeem","Tesla"];
let unableToAttend = "Naeem";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Amjad";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});