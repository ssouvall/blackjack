//Deal button gets clicked to start the game
    //Deal button initially displayed as block. Onclick, change display to none and change card container display to block to show game
        function hideDealButton() {
            document.getElementById('deal').style.display = "none";
        }

        function showCards() {
            document.getElementById('cards-container').style.display = "block";
        }

    
//Randomly deal two cards to the player when game is initiated
    //Create an array with the possible cards in it
    var possibleCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
    //Create a function that randomly selects two numbers from the array and displays them in the card1 and card2 elements when "deal" is clicked
        function getPlayerCards() {
            //Randomly select player cards
            var selectFirstPlayerCard = possibleCards[Math.floor(Math.random() * possibleCards.length)];
            var selectSecondPlayerCard = possibleCards[Math.floor(Math.random() * possibleCards.length)];
            //Display player cards in document
            document.getElementById('card1').innerHTML = selectFirstPlayerCard;
            document.getElementById('card2').innerHTML = selectSecondPlayerCard;
        }

//Display hit and stay buttons
    function displayHitAndStayButtons() {
        document.getElementById('hit').style.display = "inline-block";
        document.getElementById('stay').style.display = "inline-block";
    }

// Create a startGame function that executes when clicking the deal button. Hides the deal button, shows the cards, and deals the player's hand.
//After a delay, show hit and stay buttons
    function startGame() {
        //hide the deal button
        hideDealButton();
        //show the player and dealer's card interface
        showCards();
        //deal the player's cards
        getPlayerCards();
        //after brief pause, show hit and stay buttons
        setTimeout(displayHitAndStayButtons, 2000);
    }

//Create a function that deals the dealer's cards
    function getDealerCards() {
        //randomly deal two cards to the dealer
        var selectFirstDealerCard = possibleCards[Math.floor(Math.random() * possibleCards.length)];
        var selectSecondDealerCard = possibleCards[Math.floor(Math.random() * possibleCards.length)];
        //Display in document
        document.getElementById('dealer-card1').innerHTML = selectFirstDealerCard;
        document.getElementById('dealer-card2').innerHTML = selectSecondDealerCard;
    }

//Create a function that add's the dealers' cards together
    function addDealerCards() {
        //get the dealer's first card
        var firstCard = document.getElementById('dealer-card1').innerHTML;
        //if the card is a royal card or an Ace, convert to corresponding integer
        if (firstCard === 'J' || firstCard === 'Q' || firstCard === 'K') {
            firstCard = 10;
        } else if (firstCard === 'A') {
            firstCard = 11;
        }
        //get dealer's second card
        var secondCard = document.getElementById('dealer-card2').innerHTML;
        //if the card is a royal or an ace, convert to corresponding integer
        if (secondCard === 'J' || secondCard === 'Q' || secondCard === 'K') {
            secondCard = 10;
        } else if (secondCard === 'A') {
            secondCard = 11;
        }
        //convert cards from string to int, then add together to get dealer's score
        var cardOneInt = parseInt(firstCard);
        var cardTwoInt = parseInt(secondCard);
        var cardSum = (cardOneInt + cardTwoInt)
        return cardSum;
    }

//Create a function that adds the player's cards together
    function addPlayersCards() {
        //get player's first card
        var firstCard = document.getElementById('card1').innerHTML;
        //check to see if it's a royal or an Ace and assign it its corresponding number
        if (firstCard === 'J' || firstCard === 'Q' || firstCard === 'K') {
            firstCard = 10;
        } else if (firstCard === 'A') {
            firstCard = 11;
        }
        //get player's second card
        var secondCard = document.getElementById('card2').innerHTML;
        //if it's a royal or an Ace assign it to its corresponding number
        if (secondCard === 'J' || secondCard === 'Q' || secondCard === 'K') {
            secondCard = 10;
        } else if (secondCard === 'A') {
            secondCard = 11;
        }
        //get player's third card
        var thirdCard = document.getElementById('card3').innerHTML;
        //if it's a royal or an Ace, assign it to its corresponding number
        if (thirdCard === 'J' || thirdCard === 'Q' || thirdCard === 'K') {
            thirdCard = 10;
        } else if (thirdCard === 'A') {
            thirdCard = 11;
        }
        //get player's fourth card
        var fourthCard = document.getElementById('card4').innerHTML;
        //if it's a royal or an Ace, assign it to its corresponding number
        if (fourthCard === 'J' || fourthCard === 'Q' || fourthCard === 'K') {
            fourthCard = 10;
        } else if (fourthCard === 'A') {
            fourthCard = 11;
        }
        //get player's fifth card
        var fifthCard = document.getElementById('card5').innerHTML;
        //if it's a royal or an Ace, assign it to its corresponding number
        if (fifthCard === 'J' || fifthCard === 'Q' || fifthCard === 'K') {
            fifthCard = 10;
        } else if (fifthCard === 'A') {
            fifthCard = 11;
        }
        //convert player cards from string to int and add together
        var cardOneInt = parseInt(firstCard);
        var cardTwoInt = parseInt(secondCard);
        var cardThreeInt = parseInt(thirdCard);
        var cardFourInt = parseInt(fourthCard);
        var cardFiveInt = parseInt(fifthCard)
        var cardSum = (cardOneInt + cardTwoInt)
        //if player hit and thirdCard has a value, add all three values together, otherwise add first and second card
        if (thirdCard !== "") {
            cardSum = (cardOneInt + cardTwoInt + cardThreeInt)
        }
        // If player hits again, add fourth card
        if (fourthCard !== "") {
            cardSum = (cardOneInt + cardTwoInt + cardThreeInt + cardFourInt)
        }
        // If player hits again, add fifth card
        if (fifthCard !== "") {
            cardSum = (cardOneInt + cardTwoInt + cardThreeInt + cardFourInt + cardFiveInt)
        }
        return cardSum;
    }
   
var clicks = 0;
//Allow player to hit if desired. If hit, add another card to the player's hand.
function hitMe() {
    clicks += 1;
    //Randomize number and assign to variable newCard
    var newCard = possibleCards[Math.floor(Math.random() * possibleCards.length)];
     //If there haven't been any clicks, get element card3 and change innerHTML to newCard
    if (clicks == 1) {
        document.getElementById('card3').innerHTML = newCard;
    } else if (clicks == 2) {
        document.getElementById('card4').innerHTML = newCard;
    } else if (clicks == 3) {
        document.getElementById('card5').innerHTML = newCard;
    }
    //Add the player's cards
    var playerScore = addPlayersCards();
    //If new cards score adds up to >21, the player loses and dealerScore shows
    if (playerScore > 21) {
        document.getElementById('win-or-lose').innerHTML = `Sorry, ${playerScore} is a BUST. You lose!`
        getDealerCards()
        //make hit and stay buttons disappear
        document.getElementById('hit').style.display = "none";
        document.getElementById('stay').style.display = "none";
        //make play again button appear
        document.getElementById('play-again').style.display = "block";
    //Else, make hit and stay buttons disappear and reappear
    } else {
    document.getElementById('hit').style.display = "none";
    document.getElementById('stay').style.display = "none";
    setTimeout(displayHitAndStayButtons, 2000);
    }
    
}


 //Make a function that scores the game and determines the winner
    function scoreGame() {
        //assign dealer's score and player's score from previous functions to respective variables
        var dealerScore = addDealerCards();
        var playerScore = addPlayersCards();
        //if player's score is less than dealer's score, or player's score is > 21, player loses.
        if (dealerScore > playerScore || playerScore > 21) {
            document.getElementById('win-or-lose').innerHTML = "Sorry, you lose!"
        //otherwise, player wins
        } else {
            document.getElementById('win-or-lose').innerHTML = "You WIN!"
        }
    }

//Create a stay function connected to stay button. This initiates getting and scoring dealer cards and determining game winner
    function stay() {
        //get the dealer's cards
        getDealerCards();
        //call function scoreGame()
        scoreGame()   
        //make hit and stay buttons disappear
        document.getElementById('hit').style.display = "none";
        document.getElementById('stay').style.display = "none";
        //make play again button appear
        document.getElementById('play-again').style.display = "block";
    }

//Create play again button that loops back to start
    function playAgain() {
        //set button to refresh page
        location.reload()
    }





