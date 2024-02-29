var array = ['😂', '😂', '😊', '😊', '😜', '😜', '☹️', '☹️', '😴', '😴', '😰', '😰', '🥳', '🥳', '🤯', '🤯', '🤐', '🤐', '☠️', '☠️', '🥶', '🥶', '🤑', '🤑', '😎', '😎', '😀', '😀', '👻', '👻']

for (let i = 0; i < array.length; i++) {
  
}


const flipCard = (id) => {
  var card = document.getElementById(id);
      card.classList.toggle('flipped');
      setTimeout(function() {
      card.classList.remove('flipped');
    }, 5000); // 5000 milliseconds = 5 seconds
}

