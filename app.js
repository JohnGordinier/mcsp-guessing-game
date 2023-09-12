let playerHistory = {}; //Object to story player data
let firstRound = true;

function getName() {
  let name = prompt("What is your name?");
  return String(name);
}

function getGuess() {
  let guess = prompt("Guess a number!");
  let number = Number(guess);
  if (Number.isNaN(number)) {
    alert("Sorry, that's not a number. Please try again " + name + ".");
    return NaN;
  } else {
    return number;
  }
}

function playTheGame() {
  let name = getName();
  let guessCount = 0;
  let guessesArray = []; //Array to store the guess numbers
  const SECRET_NUMBER = Math.round(Math.random() * 10 + 1); //This states that the random

  while (number != SECRET_NUMBER) {
    const number = getGuess();
    if (Number.isNaN(number)) {
      continue;
    }
    if (number > SECRET_NUMBER) {
      alert("That's too high " + name + " , guess lower.");
      guessesArray.push(number);
      guessCount++;
    } else if (number < SECRET_NUMBER) {
      alert("That's too low " + name + " , guess higher.");
      guessesArray.push(number);
      guessCount++;
    } else if (number === SECRET_NUMBER) {
      guessesArray.push(number); // Add the correct guess to the array
      guessCount++;
      alert(
        "You nailed it " +
          name +
          "! You guessed " +
          guessesArray.join(", ") +
          ". GOOD JOB!"
      );

      if (!playerHistory[name] || guessCount < playerHistory[name]) {
        //This looks to see if there is a player history by looking at the name.
        if (!playerHistory[name]) {
          //if there is no player history, it adds the first round "guessCount" to the object.
          playerHistory[name] = guessCount;
        } else {
          //if there is player history, previous guessCount become the new guessCount and adds the new number, or loads the new data for the next game.
          //if there is data to compare it to, it will subract the previous number from the new number  and say you've done better.
          //if there is data to compare it to, it will subract the new number from the previous number and say you've done worse.
          playerHistory[name] += guessCount; //this adds in the new data
        }
        alert(
          "That's Correct " +
            name +
            "! And you beat your previous attempt by " + //taking your old guessCount and subrating it by the new guessCount to give you
            //the number you did better by
            (playerHistory[name] - guessCount) +
            " fewer guesses!"
        );
      } else {
        alert(
          "That's Correct " +
            name +
            "! You did better in your last game by " + //if you did worse, your did worse by the number of current minus the previous.
            (guessCount - playerHistory[name]) +
            " fewer guesses."
        );
      }
    }
  }
}

let playAgain = true;
while (playAgain) {
  console.log("In play again loop");
  playTheGame(name);
  playAgain = confirm("Press OK to play again " + name + ".");
}

console.log("Adios, great playing with you.");
