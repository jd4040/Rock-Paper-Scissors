function computerPlay() {
    let randomAct = Math.floor(Math.random() * 3);
    let result = ""
    switch (randomAct) {
        case 0:
            result = "Rock"
            break;

        case 1:
            result = "Paper"
            break;
        case 2:
            result = "Scissors"
            break;
        default:
            result = "Error!"
    }

    console.log(result);
}

function computerSelection() {
    let selection = Math.floor(Math.random() * 3);
    return selection;
}

function playRound(playerSelection, computerSelection) {
    let pSelection = playerSelection.toLowerCase();

    if(pSelection == 'rock')
    {
        switch(computerSelection){
            case 0:
                return 'Tie! Rock ties with Rock!';
                break;
            case 1:
                return 'Lose! Rock loses to Paper!';
                break;
            case 2:
                return 'Win! Rock beats Scissors!';
                break;
            default:
                return 'Uh oh, an error occured with the computer!';
        }
    }

    else if(pSelection == 'paper'){
        switch (computerSelection) {
            case 0:
                return 'Win! Paper beats Rock!';
                break;
            case 1:
                return 'Tie! Paper ties with Paper';
                break;
            case 2:
                return 'Lose! Paper loses to Scissors';
                break;
            default:
                return 'Uh oh, an error occured with the computer!';
        }
 
    }

    else if (pSelection == 'scissors') {
        switch (computerSelection) {
            case 0:
                return 'Lose! Scissors loses to Rock';
                break;
            case 1:
                return 'Win! Scissors beats Paper';
                break;
            case 2:
                return 'Tie! Scissors ties with Scissors';
                break;
            default:
                return 'Uh oh, an error occured with the computer!';
        }

    }

    else{
        return 'Uh oh, an error occured! Make sure you used an appropriate action!'
    }
}