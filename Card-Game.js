var emojiArray = ['😂', '😂', '😊', '😊', '😜', '😜', '☹️', '☹️', '😴', '😴', '😰', '😰', '🥳', '🥳', '🤯', '🤯', '🤐', '🤐', '☠️', '☠️', '🥶', '🥶', '🤑', '🤑', '😎', '😎', '😀', '😀', '👻', '👻']

var cardsFlipped = 0

var card1, index1

var card2, index2

var checkingMatch = false

shuffleArray(emojiArray)

for (let i = 0; i < emojiArray.length; i++) {
  document.getElementById(String("h" + i)).innerHTML = emojiArray[i]
}

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
  var card = document.getElementById(id);
    card.classList.toggle('flipped');

  if (cardsFlipped == 0) {
    card1 = document.getElementById(String("h" + (id - 1))).innerHTML
    index1 = id
    cardsFlipped++
  } else if ((cardsFlipped == 1) && (id != index1)) {
    card2 = document.getElementById(String("h" + (id - 1))).innerHTML
    index2 = id
    cardsFlipped++
    checkingMatch = true
  }

  if ((card1 === card2) && (cardsFlipped == 2) && (index1 != index2)) {
    console.log("Match!");
    document.getElementById(index1).style.pointerEvents = "none"
    document.getElementById(index2).style.pointerEvents = "none"
    // Reset cardsFlipped to 0, indicating that no cards are flipped
    cardsFlipped = 0;
    checkingMatch = false
    index1, index2 = 0
  } else if ((card1 != card2) && (cardsFlipped == 2)) {
    console.log("Not a match!");
    // If the cards don't match, flip them back after a delay
    setTimeout(function() {
      // Flip the first card back
      document.getElementById(index1).classList.remove('flipped');
      document.getElementById(index2).classList.remove('flipped');
      // Flip the second card back
      card.classList.remove('flipped');
      // Reset cardsFlipped to 0, indicating that no cards are flipped
      cardsFlipped = 0;
      checkingMatch = false
    }, 1000); // 1000 milliseconds = 1 second
  }
}

