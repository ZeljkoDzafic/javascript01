var secret = 33;
var guess = prompt("What is the secret number?");


if (guess == secret) {
    alert("You've guessed it - congratulations! It's number 33.");
}
else {
    alert("Sorry, your guess is not correct... The secret number is not " + guess);
}