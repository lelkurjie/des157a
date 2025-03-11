(function(){
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['1die.png', '2die.png', '3die.png', 
               '4die.png', '5die.png', '6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function (){
        // Randomly set the gameData.index here, which will choose the player
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna quit?</button>';

        document.querySelector('#quit').addEventListener('click', function (){
            location.reload();
        })

        // console.log('set up the turn');
        setUpTurn();
    })

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the ${gameData.players
        [gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">ROLL/button>';
        document.querySelector('#roll').addEventListener('click', function(){
            // console.log('roll the dice');
            throwDice();
        })
    }

    function throwDice(){
        actionArea.innerHTML='';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        // console.log(gameData.roll1);
        // console.log(gameData.roll2);
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}"> 
        <img src="images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData.rollSum);

        //for testing purposes
            // gameData.rollSum = 2;
            // gameData.roll1 = 1;
            // gameData.roll2 = 1;

        // if two 1's are rolled 
        if (gameData.rollSum === 2){
            // console.log('snake eyes!');
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            //zero out score
            gameData.score[gameData.index] = 0;
            //switch player using ternary operator
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            // we will add showCurrentScore() function here
            // wait two seconds
            setTimeout(setUpTurn, 2000);
        }

        // if either die is a 1
        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log('one of the two dice rolled is a 1');
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.score[gameData.index]}</p>`;
            // wait two seconds
            setTimeout(setUpTurn, 2000);
        }

        // if neither die is a 1
        else {
            console.log('neither dice was a 1, game continues');
            //update score
            gameData.score[gameData.index] = gameData.score[gameData.index]+ gameData.rollSum;
            gameData.rollSum;
            actionArea.innerHTML = '<button id= "rollagain">Roll again </button> or <button id= "pass">Pass</button>';

            document.querySelector('#rollagain').addEventListener('click', function(){
                    //setUpTurn(); you could set up the turn again or just throw the dice again
                    throwDice();
                });
            
            document.querySelector('#pass').addEventListener('click', function (){
                //switch player using 
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
            //checkWinningCondition function will be added here
            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]
            } wins with ${gameData.score[gameData.index]} points! </h2>`;

            actionArea.innerHTML = '';
            document.querySelector('#quit').innerHTML = 'Start a new game?';
        }else {
            //show current score function here
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}:
        ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: 
        ${gameData.score[1]}</strong></p>`;
    }
})();