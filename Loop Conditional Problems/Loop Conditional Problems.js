// Problem A.

let lunchArray = [ 'Burger', 'Salad', 'Lasagna', 'Sushi', 'Meatloaf' ];
let longestWord = '';
for (let i = 0; i < lunchArray.length; i++) {
	if (longestWord.length < lunchArray[i].length) {
		longestWord = lunchArray[i];
	}
}
console.log(longestWord.length);
console.log(longestWord);

// Problem A Part 2.
let lunchArray2 = [ 'Burger Salad Lasagna Sushi Meatloaf' ];
let splitArray = lunchArray2.join().split(' ');

let longestWord2 = '';
for (let i = 0; i < splitArray.length; i++) {
	if (longestWord2.length < splitArray[i].length) {
		longestWord2 = splitArray[i];
	}
}
console.log(longestWord2.length);
console.log(longestWord2);

// Problem B.
let arr = [ 'a', 'n', 't', 'h', 'o', 'n', 'y', 't', 'a', 'p', 'i', 'a' ];
function oddPositions() {
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 == 1) {
			console.log(arr[i]);
		}
	}
}

oddPositions();

// Problem C.
function factorial(n) {
	let total = 1;
	for (let i = n; i >= 1; i--) {
		total = total * i;
	}
	console.log(total);
}
factorial(4);

// Problem D.

let mpg = 120;

if (mpg <= 10) {
	console.log('gas guzzler');
} else if (mpg >= 11 && mpg <= 16) {
	console.log('Planet still frowns upon this, and so does your wallet');
} else if (mpg >= 17 && mpg <= 20) {
	console.log('it’s palpable');
} else if (mpg >= 21 && mpg <= 29) {
	console.log('Atmosphere smiles at your decision');
} else if (mpg >= 30 && mpg <= 35) {
	console.log('Not many gas stops will be taken');
} else if (mpg == 120) {
	console.log('if you are using the Tom Ogle fuel system, props');
} else if (mpg > 35) {
	console.log('The fish of the sea smile at your conservation');
}
