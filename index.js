const numbers = [
  3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
];
function EvenOdd(num) {
  let even = "";
  let odd = "";
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (num[i] % 2 === 0) {
      even = even + num[i] + " ";
    } else {
      odd = odd + num[i] + " ";
    }
  }
  console.log("Even: " + even, "Odd: " + odd);
}
console.log(EvenOdd(numbers));
