document.addEventListener('DOMContentLoaded', function () {
    const btnStart = document.getElementById('btnStart');
    const btnRock = document.getElementById('btnRock');
    const btnPaper = document.getElementById('btnPaper');
    const btnScissor = document.getElementById('btnScissor');
    // const resetScore = document.getElementById('resetScore'); // Add a reset button

    let round = 1;
    let playerScore = 0;
    let computerScore = 0;

    function resetGame() {
        round = 1;
        playerScore = 0;
        computerScore = 0;
        btnStart.innerText = 'Start';
        btnRock.classList.add('hidden');
        btnPaper.classList.add('hidden');
        btnScissor.classList.add('hidden');
        document.querySelectorAll('#containerAnswer h2, #containerAnswer h3').forEach(element => element.remove());
    }
 
    // resetScore.addEventListener('click', () => {
    //     resetGame();
    // });

    btnStart.addEventListener('click', () => {
        if (round <= 3) {
            if (round === 1) {
                btnStart.innerText = 'Start Again';
                btnStart.style.backgroundColor = 'yellow';
                btnStart.style.color = 'black';
                btnRock.classList.remove('hidden');
                btnPaper.classList.remove('hidden');
                btnScissor.classList.remove('hidden');
            } else {
                document.querySelectorAll('#containerAnswer h3').forEach(element => element.remove());
            }
    
            let startMessage = document.createElement('h2');
            let startMessageNode = document.createTextNode('Round ' + round + ': Which one would you like to select? \nRock, Paper, or Scissor?');
            startMessage.appendChild(startMessageNode);
            let elementStartMessage = document.getElementById('containerAnswer');
    
            let existingMessage = document.querySelector('#containerAnswer h2');
    
            if (existingMessage) {
                existingMessage.innerText = 'Round ' + round + ': Which one would you like to select? \nRock, Paper, or Scissor?';
            } else {
                elementStartMessage.appendChild(startMessage);
            }
        } else {
            resetGame();
        }
    });        

    function getComputerChoice() {
        const randomNumberComputer = Math.floor(Math.random() * 3);
        
        if (randomNumberComputer === 0) {
            return 'Rock';
        } else if (randomNumberComputer === 1) {
            return 'Paper';
        } else {
            return 'Scissor';
        };
    }

    function playRound(playerChoice) {
        const computerChoice = getComputerChoice();

        let resultMessage = 'You chose '+ playerChoice + ' and the computer has chosen ' + computerChoice + '. ';

        if (playerChoice === computerChoice) {
            resultMessage += 'It\'s a tie!';
        } else if (
            (playerChoice === 'Rock' && computerChoice === 'Scissor') ||
            (playerChoice === 'Paper' && computerChoice === 'Rock') ||
            (playerChoice === 'Scissor' && computerChoice === 'Paper')
        ) {
            resultMessage += 'You win!';
            playerScore++;
        } else {
            resultMessage += 'You lose!';
            computerScore++;
        }

        let resultElement = document.createElement('h3');
        let resultTextNode = document.createTextNode(resultMessage);
        resultElement.appendChild(resultTextNode);
        let elementStartMessage = document.getElementById('containerAnswer');

        elementStartMessage.appendChild(resultElement);

        round++;

        if (round > 3) {
            let finalScoreMessage = document.createElement('h2');
            let finalScoreMessageNode = document.createTextNode('Final Scores:\nYou: ' + playerScore + ', Computer: ' + computerScore);
            finalScoreMessage.appendChild(finalScoreMessageNode);
            elementStartMessage.appendChild(finalScoreMessage);
            btnStart.innerText = 'Start Again';
            btnRock.classList.add('hidden');
            btnPaper.classList.add('hidden');
            btnScissor.classList.add('hidden');
        }
    }

    btnRock.addEventListener('click', () => {
        if (round <= 3) {
            playRound('Rock');
        }
    });

    btnPaper.addEventListener('click', () => {
        if (round <= 3) {
            playRound('Paper');
        }
    });

    btnScissor.addEventListener('click', () => {
        if (round <= 3) {
            playRound('Scissor');
        }
    });
});