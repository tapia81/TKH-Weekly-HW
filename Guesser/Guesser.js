function letterGuesser() {
	let lettersArray = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];
	let randomNumber = Math.floor(Math.random() * lettersArray.length) + 1;
	let randomLetter = lettersArray[randomNumber];
	while (isNaN((userGuess = prompt(`Your letter is ${randomLetter}. Guess ${randomLetter}'s index number`))));
	if (userGuess == randomNumber) {
		alert('You definitely know the alphabet!');
	} else {
		alert(
			`incorrect, you will have to re-learn the abc's. The index of ${randomLetter} is actually ${randomNumber}.`
		);
	}
}

letterGuesser();
