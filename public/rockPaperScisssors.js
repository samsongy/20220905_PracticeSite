function startGame() {
    let userMove = getUserMove();
    console.log("User's move: " + userMove);
    let compMove = getCompMove();
    console.log("Computer's move: " + compMove);
    let result = gameLogic(userMove, compMove);
    console.log("Result: " + result);
    document.getElementById("compMove").innerHTML=compMove;
    document.getElementById("result").innerHTML=result;
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

function gameLogic(userMove, compMove) {
    let result = "";
    //tie
    if(userMove==compMove) {
        result = "Tie";
    //wins
    } else if(userMove=="Rock" && compMove=="Scissors"){
        result = "Win";
    } else if(userMove=="Paper" && compMove=="Rock"){
        result = "Win";
    } else if(userMove=="Scissors" && compMove=="Paper"){
        result = "Win";
    //loses
    } else if(userMove=="Rock" && compMove=="Paper"){
        result = "Loss";
    } else if(userMove=="Paper" && compMove=="Scissors"){
        result = "Loss";
    } else if(userMove=="Scissors" && compMove=="Rock"){
        result = "Loss";
    }
    return result;
}