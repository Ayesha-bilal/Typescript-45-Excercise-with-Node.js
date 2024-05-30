// Question no 14:Guest list
let guestList :string []=["baba" , "Mama ", "laiba" , "ginan" , "bhai" ,"Sabra" , "anosha" , "Myself"]

guestList.forEach(guestList =>{
    console.log(`I would like to inivite ${guestList} for dinner at my place`)
})

// Question no 15: Changing guest list
 guestList = [
  "baba",
  "Mama ",
  "laiba",
  "ginan",
  "bhai",
  "Sabra",
  "anosha",
  "Myself",
];
let guest_not_attending = "anosha";
console.log("unfortunately " , guest_not_attending , "cannot able to attend us" );
guestList.splice(6, 1, "jannat");
console.log("At the place of anosha have jannat here")
guestList.forEach((guestList) => {
  console.log(`Hey ${guestList} would you like to join me for dinner today?`);
});

// Question no 16: More guests
 guestList = [
  "baba",
  "Mama ",
  "laiba",
  "ginan",
  "bhai",
  "Sabra",
  "anosha",
  "Myself",
];
console.log(
  "we have found a bigger dinner table so now we have new people having dinner with us"
);

guestList.unshift("Talaiha");
guestList.splice(3, 0, "Shumaila");
guestList.push("Tooba");

guestList.forEach((guestList) => {
  console.log(
    `Most welcome ${guestList} ,Eagerly waiting to see you all at the dinner table`
  );
});


// Question no 17:Shrinking guest list
 guestList = [
  "baba",
  "Mama ",
  "laiba",
  "ginan",
  "bhai",
  "Sabra",
  "anosha",
  "Myself",
];

console.log("Unfortunately , just inviting two guests")
// removing guest expext the first two
while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  console.log(`Sorry ${removedGuest} \n you are not invited for dinner`);
} 
// iniviting the last two guests again
guestList.forEach((guestList) => {
      console.log(
        `Most welcome ${guestList} ,Eagerly waiting to see you two at the dinner table`
      );
    });
// removing all the guests // empty array
    guestList.splice(0 , 2)

    console.log(guestList)
     
