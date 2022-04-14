function computerPlay(){
    let randomAct = Math.floor(Math.random()*3);
    let result = ""
    switch(randomAct){
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

function computerSelection(){
    let selection = Math.floor(Math.random()*3);
    return selection;
}

function playRound(playerSelection, computerSelection){
    let playerSelection = playerSelection.toLowerCase();

}