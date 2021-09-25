// function oneToTen(){
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// oneToTen();

// let oddArr = [];
// let number = 3;

// while(number < 103){
//     if(number % 2 == 1){
//       oddArr.push(number);
//     }
//     number += 1;
// }
// console.log(oddArr);

// let sum = 0;
// function arraySum(num) {
//     for(let i = 0; i < num.length; i++){
//       sum = num[i] + sum;
//       console.log(sum);
//     }
// }
// arraySum([1, 2, 3, 4, 5, 6]);

// let descendingNumber = 9;
// while (descendingNumber > 0) {
// 	console.log(descendingNumber);
// 	descendingNumber -= 1;
// }

// function factorial(n) {
// 	let total = 1;
// 	for (let i = n; i >= 1; i--) {
// 		total = total * i;
// 	}
// 	console.log(total);
// }
// factorial(4);

let sum = 0;
function sumOfN(num) {
	for (let i = 0; i < num; i++) {
		sum = num[i] + sum;
		console.log(sum);
	}
}
sumOfN(5);
// Write a function using a for loop that returns the sum of all numbers from 1 to n.
// Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’. Assume there are no spaces.
// Let string = “donuts”
// Expected output => dZnZtZ
