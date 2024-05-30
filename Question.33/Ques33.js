//Question no 33:Ordinal Numbers
var numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numb.forEach(function (numb) {
    if (numb === 1) {
        console.log("".concat(numb, "st"));
    }
    else if (numb === 2) {
        console.log("".concat(numb, "nd"));
    }
    else if (numb === 3) {
        console.log("".concat(numb, "rd"));
    }
    else {
        console.log("".concat(numb, "th"));
    }
});
