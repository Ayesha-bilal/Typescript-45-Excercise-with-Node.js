//Question no 44:Sandwiches
function make_sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich using ".concat(items.join(','), "."));
}
make_sandwiches("chesse", "tomato");
make_sandwiches("mayo", "lettuce");
make_sandwiches("avocado", "mustard");
