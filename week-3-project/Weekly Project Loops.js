// Problem 1
function oneToTen() {
	console.log('Ascending from 1 to 10');
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
}

oneToTen();

//Problem 2
let oddArr = [];
let number = 4;

while (number < 103) {
	if (number % 2 == 1) {
		oddArr.push(number);
	}
	number += 1;
}
console.log('The odd numbers between 3 and 103 not including 3 and 103 are');
console.log(oddArr);

//Problem 3
let sum = 0;
function arraySum(num) {
	for (let i = 0; i < num.length; i++) {
		sum = num[i] + sum;
	}
	console.log(`Sum of the array is ${sum}`);
}
arraySum([ 1, 2, 3, 4, 5, 6 ]);

//Problem 4
let descendingNumber = 9;
console.log('Descending from 9 to 0');
while (descendingNumber > -1) {
	console.log(descendingNumber);
	descendingNumber -= 1;
}

//Problem 5
function factorial(n) {
	let total = 1;
	for (let i = n; i >= 1; i--) {
		total = total * i;
	}
	console.log(`The factorial of ${n} is ${total}`);
}
factorial(4);

//Problem 6
sum = 0;
// function sumOfN(num) {
// 	for (let i = 0; i < num; i++) {
// 		sum = num[i] + sum;
// 		console.log(sum);
// 	}
// }
// sumOfN(5);

//problem 7
// Write a function using a for loop that returns the sum of all numbers from 1 to n.
// Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’. Assume there are no spaces.
// Let string = “donuts”
// Expected output => dZnZtZ
