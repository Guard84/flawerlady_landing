const gallery = document.querySelector('.reviews-track');
let cardIndex = 0;

function autoScroll() {
  const cards = document.querySelectorAll('.reviews-card');
  cardIndex++;

  if (cardIndex >= cards.length) {
    cardIndex = 0;
  }

  gallery.style.transform = `translateX(-${cardIndex * 100}%)`;
}

setInterval(autoScroll, 4000);
