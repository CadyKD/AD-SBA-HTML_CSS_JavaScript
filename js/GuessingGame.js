var text1 = document.getElementById("textbox1");
var text2 = document.getElementById("textbox2");
var text3 = document.getElementById("textbox3");
var guessesLeft = 10;
var numberGuesses = 10;
var rangeLow = 0;
var rangeHigh = 100;
var randPick = 0;

function setupGame() {
	rangeLow = parseInt(document.getElementById("lowEnd").value);
//	console.log('Low Number', rangeLow);
	rangeHigh = parseInt(document.getElementById("highEnd").value);
//	console.log('High Number', rangeHigh);
//	numberGuesses = parseInt(document.getElementById("numberGuesses").value);
	numberGuesses = Math.ceil(Math.log2(rangeHigh - rangeLow + 1))
//	console.log('Guesses Allowed', numberGuesses);
	guessesLeft = parseInt(numberGuesses);
//	console.log('Guesses Left', guessesLeft);
	randPick = (Math.floor(Math.random() * (Number(rangeHigh) - Number(rangeLow)) + Number(rangeLow)));

	text1.textContent="";
	text2.textContent="Guesses Remaining: " + guessesLeft + "/" + numberGuesses;
	text3.textContent="";
//	console.log('Random Number', randPick)
}

function guessingGame() {
	var userGuess = parseInt(document.getElementById("userGuess").value);
	//console.log('User Guess', userGuess);
	if((userGuess < rangeLow) || (userGuess > rangeHigh)) {
		text1.textContent="!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
		text2.textContent="Please Enter a number between " + rangeLow + " and " + rangeHigh;
		text3.textContent="!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
		//console.log('Range Low', rangeLow);
		//console.log('Range High', rangeHigh);
		//console.log('Check Low', (userGuess < rangeLow));
		//console.log('Check High', (userGuess > rangeHigh));
		//console.log('Check Both', ((userGuess < rangeLow) || (userGuess > rangeHigh)));
		return;
	}else{
		guessesLeft -= 1;
		//console.log('Guesses Left', guessesLeft);
	}

	if(guessesLeft > 0) {
		if(randPick === userGuess) {
			text1.textContent="You Win!";
			text2.textContent="The number was: " + userGuess;
			text3.textContent="Guesses Remaining: " + guessesLeft + "/" + numberGuesses;
		} else if(randPick > userGuess) {
			rangeLow = userGuess + 1;
			text1.textContent="Your Guess is too low.";
			text2.textContent="Guesses Remaining: " + guessesLeft + "/" + numberGuesses;
			text3.textContent="Range is now " + rangeLow + " to " + rangeHigh;
		} else {
			rangeHigh = userGuess - 1;
			text1.textContent="Your Guess is too High.";
			text2.textContent="Guesses Remaining: " + guessesLeft + "/" + numberGuesses;
			text3.textContent="Range is now " + rangeLow + " to " + rangeHigh;
		}
	}
	else if(randPick === userGuess) {
		text1.textContent="You Win!";
		text2.textContent="The number was: " + userGuess;
		text3.textContent="Guesses Remaining: " + guessesLeft + "/" + numberGuesses;
	}
	else if(randPick != userGuess) {
		text1.textContent="Sorry, You ran out of guesses.";
		text2.textContent="The number was: " + randPick;
		text3.textContent="Guesses Remaining: " + guessesLeft + "/" + numberGuesses;
	}
}
