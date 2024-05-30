//Question no 18:Seeing the world
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favPlaces = ["New york", "Dubai", "Qatar", "Madinah"];
console.log("Original order:", favPlaces);
console.log("Alphabetical order:", __spreadArray([], favPlaces, true).sort());
console.log("Original order:", favPlaces);
console.log("Reverse Order:", __spreadArray([], favPlaces, true).sort().reverse());
console.log("Original order:", favPlaces);
console.log("Reverse Order:", favPlaces.reverse());
console.log("Reverse Order:", favPlaces.reverse());
favPlaces.sort();
console.log("Alphabetical order on original array:", favPlaces);
console.log("Reverse Alphabetical order:", favPlaces.reverse());
