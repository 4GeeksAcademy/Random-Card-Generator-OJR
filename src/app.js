/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateRandomCard();
};

const suits = ["hearts", "spades", "clubs", "diamonds"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "K",
  "Q",
  "J",
  "A"
];

function generateRandomCard() {
  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomValueIndex = Math.floor(Math.random() * values.length);

  const randomSuit = suits[randomSuitIndex];
  const randomValue = values[randomValueIndex];

  document.getElementById("cardIconTop").innerHTML = getSuitSymbol(randomSuit);
  document.getElementById("cardIconBottom").innerHTML = getSuitSymbol(
    randomSuit
  );
  document.getElementById("cardSuit").textContent = randomValue;

  const card = document.getElementById("card");
  card.className = `card ${randomSuit}`;
}

function getSuitSymbol(suit) {
  switch (suit) {
    case "hearts":
      return '<i class="fas fa-heart"></i>';
    case "spades":
      return '<i class="fas fa-spade"></i>';
    case "clubs":
      return '<i class="fas fa-club"></i>';
    case "diamonds":
      return '<i class="fas fa-diamond"></i>';
  }
}
