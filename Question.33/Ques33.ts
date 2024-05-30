//Question no 33:Ordinal Numbers

let numb: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numb.forEach((numb) => {
  if (numb === 1) {
    console.log(`${numb}st`);
  } else if (numb === 2) {
    console.log(`${numb}nd`);
  } else if (numb === 3) {
    console.log(`${numb}rd`);
  } else {
    console.log(`${numb}th`);
  }
});
