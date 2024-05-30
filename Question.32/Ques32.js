//Question no 32:Checking Usernames
var current_users = ["rahim", "tayyab", "yasir", "zainab ", "yawar"];
var new_users = ["alishba", "Rahim", "Tayyab", "zain ", "aqeel"];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() === new_users.toLowerCase(); })) {
        console.log(new_users, "username is not available");
    }
    else {
        console.log(new_users, "username is available");
    }
});
