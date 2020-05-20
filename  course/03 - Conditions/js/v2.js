

function guess() {
    var secret = 22;
    var guess = document.getElementById("number").value;

    if (guess == secret) {
        alert("You've guessed it - congratulations! It's number "+secret+".");
    }
    else {
        alert("Sorry, your guess is not correct... The secret number is not " + guess);
    }
}