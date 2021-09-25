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
let arr = [];
//Problem 6
sum = 0;
function sumOfN(num) {
	let oriNum = num;
	while (num > 0) {
		arr.push(1 * num);
		num -= 1;
	}
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	console.log(`The sum of all numbers from 1 to ${oriNum} = ${sum}`);
}
// can we use multiple loops not just for loop?
sumOfN(3);

//problem 7
let str = 'donuts';
arr = [];
arr = str.split('');
for (let i = 1; i < str.length; i++) {
	if (i % 2 != 0) {
		arr[i] = 'Z';
	}
}
console.log(arr);
