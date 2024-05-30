//Question no 30 :Hello admin

let userNames :String[]=["Admin" , "User1" , "User2" , "User3"] 

userNames.forEach(userNames => {
    if (userNames == "Admin") {
        console.log("Hello Admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${userNames}, thank you for loggin`)
    }
});