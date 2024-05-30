//Question no 43:Unchanged Magicians


let magicians: string[] = ["Harry Houdini" , "Penn and Teller" , "David Copperfield" ,  "David Blaine" , "Shin Lim"];

function show_magicians(magicians: string[]): void {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`${magician} The Great`);   //push adds a string at the end of array
  });
  return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array

console.log("Original magicians:");
show_magicians(magicians); // Shows original names

console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
