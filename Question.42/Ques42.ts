//Question no 42:Great Magicians

let magicians :string[]=["Harry Houdini" , "Penn and Teller" , "David Copperfield" ,  "David Blaine" , "Shin Lim"]

function show_magicians(magicians:string[]){
     magicians.forEach(magicians => {
        console.log(magicians)
    });
}

function make_great(magicians:string[]){
    magicians.forEach(magicians => {
        console.log("The Great " , magicians )
    });
}

make_great(magicians)

