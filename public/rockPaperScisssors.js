function startGame() {
    let userMove = getUserMove();
    console.log("User's move: " + userMove);
    let compMove = getCompMove();
    console.log("Computer's move: " + compMove);
}

function getUserMove() {
    let options = document.getElementsByName('userMove');
    let move = "";
    for(i=0; i<options.length; i++) {
        if(options[i].checked) {
            move = options[i].value;
        }
    }
    return move;
}

function getCompMove() {
    let random = Math.floor(Math.random() * 3);
    let move ="";
    if(random==0) {
        move="Rock";
    } else if(random==1) {
        move="Paper";
    } else if(random==2) {
        move="Scissors";
    }
    return move;
}