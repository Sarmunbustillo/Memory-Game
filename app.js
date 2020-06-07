document.addEventListener('DOMContentLoaded', () => {
  // card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
  ];

  const grid = document.querySelector('.grid');

  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create board
  function createBoard() {
    cardArray.forEach((card, i) => {
      card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    });
  }

  //sort the arraz randomly
  cardArray.sort(() => 0.5 - Math.random());

  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    let resultDisplay = document.querySelector('#result');
    // grap first and second items of the chosenId array
    let [optionOneId, optionTwoId, ...rest] = cardsChosenId;
    // const optionTwoId = cardsChosenId[1];
    console.log(optionOneId, optionTwoId, rest);
    if (cardsChosen[0] === cardsChosen[1]) {
      //   alert('You found a match!');
      //set the matched pics to white default
      //   cards[optionOneId].setAttribute('src', 'images/white.png');
      //   cards[optionTwoId].setAttribute('src', 'images/white.png');

      //store the matched pair
      //   classList.add('.success');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      //   alert('Sorry, Try again!');
    }
    //either waz reset the two arrays to start flipping again
    cardsChosen = [];
    cardsChosenId = [];

    //set the score to the amount of pairs in  cardswon
    resultDisplay.textContent = cardsWon.length;

    //check if we have all the cards. since we add them as pairs divide the total by 2
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all';
    }
  }

  //check for matches
  function flipCard() {
    //get the data id for the index
    let cardId = this.getAttribute('data-id');
    //added the name to the clicked array
    cardsChosen.push(cardArray[cardId].name);
    //add the id to the  id array
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    //only allow 2 cards to be checked for match
    if (cardsChosen.length == 2) {
      //so it does not happen to quickly
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
