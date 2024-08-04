module.exports = function reverse(n) {
  let absNumber = Math.abs(n);
  let stringNumber = String(absNumber);
  let arrayNumber = Array.from(stringNumber, Number);
  let reverseArray = arrayNumber.reverse();
  let stringReversedArray = reverseArray.join('');
  let reversedNumber = Number(stringReversedArray);
  return reversedNumber;

  //long version in one string
  //return Number(Array.from(String(Math.abs(n)), Number).reverse().join(''))
}
