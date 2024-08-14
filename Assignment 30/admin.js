"use strict";
let usernames = ["admin", "userA", "userB", "userC", "userD"];
usernames.forEach((username) => {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for loggin again.`);
    }
});
