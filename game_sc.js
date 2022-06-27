let card_flipped = false;
let first_click;
let second_click;

let cards = document.querySelectorAll(".food_card");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", flipCard);
}

function flipCard() {
  this.classList.add("opacity_one");
  this.classList.remove("opacity_zero");
  if (!card_flipped) {
    card_flipped = true;
    first_click = this;
  } else {
    card_flipped = false;
    second_click = this;
  }

  if (
    first_click.querySelector("#foody").src ==
    second_click.querySelector("#foody").src
  ) {
    first_click.removeEventListener("click", flipCard);
    second_click.removeEventListener("click", flipCard);
    first_click = "";
    second_click = "";
    return;
  } else {
    setTimeout(() => {
      first_click.classList.remove("opacity_one");
      first_click.classList.add("opacity_zero");
      second_click.classList.remove("opacity_one");
      second_click.classList.add("opacity_zero");
      first_click = "";
      second_click = "";
      return;
    }, 300);
  }
}
