var array = [] // Make this an array of emojis

window.onload = resetBoard(array)

const resetBoard = (arr) => {

}

const flipCard = (id) => {
  var card = document.getElementById(id);
      card.classList.toggle('flipped');
      setTimeout(function() {
      card.classList.remove('flipped');
    }, 5000); // 5000 milliseconds = 5 seconds
}

