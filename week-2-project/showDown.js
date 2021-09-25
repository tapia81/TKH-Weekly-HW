function fight() {
	let hero = prompt('What hero is fighting');
	let monster = prompt('What monster are you fighting');
	let villainHealth = 50;
	let heroHealth = 50;

	while (heroHealth > 0 && villainHealth > 0) {
		let heroDice = Math.floor(Math.random() * 20) + 1;
		switch (true) {
			case heroDice <= 2:
				heroHealth -= 5;
				alert(
					`${hero} accidentally stab themselves losing 5 health!!! \n${hero} remaining health = ${heroHealth} \n${monster} remaining health = ${villainHealth}`
				);
				break;
			case heroDice <= 10:
				villainHealth -= 0;
				alert(
					`${hero} has missed!!! \n${hero} remaining health = ${heroHealth} \n${monster} remaining health = ${villainHealth}`
				);
				break;
			case heroDice <= 18:
				villainHealth -= 10;
				alert(
					`${hero} has landed hit on villain dealing 10 damage!!! \n${hero} remaining health = ${heroHealth} \n${monster} remaining health = ${villainHealth}`
				);
				break;
			case heroDice <= 20:
				villainHealth -= 20;
				alert(
					`${hero} has landed a critical hit on villain dealing 20 damage!!! \n${hero} remaining health = ${heroHealth} \n${monster} remaining health = ${villainHealth}`
				);
				break;
		}
		if (villainHealth > 0) {
			let monsterDice = Math.floor(Math.random() * 20) + 1;
			switch (true) {
				case monsterDice <= 2:
					villainHealth -= 5;
					alert(
						`${monster} accidentally stab themselves losing 5 health!!! \n${hero} remaining health = ${heroHealth} \n${monster} remaining health = ${villainHealth}`
					);
					break;
				case monsterDice <= 10:
					heroHealth -= 0;
					alert(
						`${monster} has missed!!! \n${hero} remaining health = ${heroHealth} \n${monster} remaining health = ${villainHealth}`
					);
					break;
				case monsterDice <= 18:
					heroHealth -= 10;
					alert(
						`${monster} has landed hit on hero dealing 10 damage!!! \n${hero} remaining health = ${heroHealth} \n${monster} remaining health = ${villainHealth}`
					);
					break;
				case monsterDice <= 20:
					heroHealth -= 20;
					alert(
						`${monster} has landed a critical hit on hero dealing 20 damage, \n${hero} remaining health = ${heroHealth} \n${monster} remaining health = ${villainHealth}`
					);
					break;
			}
		}

		if (heroHealth <= 0) {
			alert(`${monster} has won!!!!`);
		} else if (villainHealth <= 0) {
			alert(`${hero} has won!!!!`);
		}
	}
	replay();
}

fight();

function replay() {
	let playerReset = prompt('Do you want to play again?');

	if (playerReset.toLowerCase() == 'yes' || playerReset.toLowerCase() == 'y') {
		fight();
	} else if (playerReset.toLowerCase() == 'no' || playerReset.toLowerCase() == 'n') {
		alert('Game Over');
	} else {
		replay();
	}
}
