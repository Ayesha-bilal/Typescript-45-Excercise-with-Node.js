//Question no 30 :Hello admin
var userNames = ["Admin", "User1", "User2", "User3"];
userNames.forEach(function (userNames) {
    if (userNames == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userNames, ", thank you for loggin"));
    }
});
