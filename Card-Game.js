// Makes an array of emojis
var emojiArray = ['😂', '😂', '😊', '😊', '😜', '😜', '☹️', '☹️', '😴', '😴', '😰', '😰', '🥳', '🥳', '🤯', '🤯', '🤐', '🤐', '☠️', '☠️', '🥶', '🥶', '🤑', '🤑', '😎', '😎', '😀', '😀', '👻', '👻']

// Makes a lot of variables that'll be used later on
var cardsFlipped = 0
var card1text
var secondCard
var card2text
var score = 1000
var checkingMatch = false
var matches = 0
var gameIsOver = false
let timeElapsed = 0
let timerInterval = null

// Shuffles the array when the pages reloads so that the board in the page is always different
shuffleArray(emojiArray)

// Adds the emoji's to the back of the cards on the page
for (let i = 0; i < emojiArray.length; i++) {
  document.getElementById(String("h" + i)).innerHTML = emojiArray[i]
}

// This starts the timer
function startTimer() {
  if (timerInterval === null) {
    timerInterval = setInterval(() => {
      timeElapsed++
      updateTimerDisplay()
    }, 1000) // Update every second (1000 milliseconds)
  }
}

// This will be used to stop the timer when someone wins
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// Every second the timer on the page will update 
function updateTimerDisplay() {
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = formatTime(timeElapsed);
}

// Converts the time into minutes every 60 seconds
function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// This is used to shuffle the array of emoji's
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const flipCard = (id) => {
  // If true, do not allow flipping any other cards
  if (checkingMatch) {
    return
  }

  // Flips card that was clicked
  var firstCard = document.getElementById(id);

  // Check if the card is already flipped
  if (firstCard.classList.contains('flipped')) {
    return
  }

  firstCard.classList.toggle('flipped');

  // If it's the 1st pair of cards flipped, save its information and update cardsFlipped
  if (cardsFlipped == 0) {
    card1text = document.getElementById(String("h" + (id - 1))).innerHTML
    secondCard = id
    cardsFlipped++
    startTimer();
  } else if //If it's the second card flipped, also save it info, update cardsFlipped and checkingMatch
  ((cardsFlipped == 1)) {
    card2text = document.getElementById(String("h" + (id - 1))).innerHTML
    cardsFlipped++
    checkingMatch = true
  }

  // When 2 cards are clicked, it checks if the pair are a match and keeps them flipped while making it unclickable
  if ((card1text === card2text) && (cardsFlipped == 2)) {
    console.log("Match!")
    console.log(timeElapsed)
    document.getElementById(secondCard).style.pointerEvents = "none"
    firstCard.style.pointerEvents = "none"
    // Reset cardsFlipped to 0, indicating that no cards are flipped
    cardsFlipped = 0
    checkingMatch = false
    secondCard = 0
    matches++
  } else if 
  ((card1text != card2text) && (cardsFlipped == 2)) {
    console.log("Not a match!")
    // If the cards don't match, flip them back after a delay
    setTimeout(function() {
      // Flip the first card back
      document.getElementById(secondCard).classList.remove('flipped')
      // Flip the second card back
      firstCard.classList.remove('flipped')
      // Reset cardsFlipped to 0, indicating that no cards are flipped
      cardsFlipped = 0
      checkingMatch = false
    }, 1000); // 1000 milliseconds = 1 second
  }

  // Checks to see if every match was found, if yes then update gameIsOver
  if (matches == 15) {
    gameIsOver = true
  }

  // If gameIsOver is true, stop time and update score based on time taken
  if (gameIsOver) {
    stopTimer();
    score -= timeElapsed
    document.getElementById('score').innerHTML = "Score: " + score
  }
  
}

