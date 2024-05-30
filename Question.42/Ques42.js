//Question no 42:Great Magicians
var magicians = ["Harry Houdini", "Penn and Teller", "David Copperfield", "David Blaine", "Shin Lim"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
function make_great(magicians) {
    magicians.forEach(function (magicians) {
        console.log("The Great ", magicians);
    });
}
make_great(magicians);
