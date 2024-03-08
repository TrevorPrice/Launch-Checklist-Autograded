function validateInput(testInput) {
  if (testInput === "" || testInput === null) {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}
console.log(validateInput(0));