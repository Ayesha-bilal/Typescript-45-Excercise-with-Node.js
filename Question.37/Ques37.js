//Question no 37:Large Shirts
function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love typescript"; }
    console.log("Making a ".concat(size, " size t-shirt with the message \"").concat(text, "\" printed on it."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love coding");
