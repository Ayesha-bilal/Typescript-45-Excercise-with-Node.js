//Question no 32:Checking Usernames

let current_users: string[] = ["rahim", "tayyab", "yasir", "zainab ", "yawar"];

let new_users: string[] = ["alishba", "Rahim", "Tayyab", "zain ", "aqeel"];

new_users.forEach((new_users) => {
  if (
    current_users.some(
      (current_users) => current_users.toLowerCase() === new_users.toLowerCase()
    )
  ) {
    console.log(new_users, "username is not available");
  } else {
    console.log(new_users, "username is available");
  }
});
