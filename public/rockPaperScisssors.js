function startGame() {
    let move = getUserMove();
    alert("User's move: " + move)
}

function getUserMove() {
    let options = document.getElementsByName('userMove');
    let move = "null";
    for(i=0; i<options.length; i++) {
        if(options[i].checked) {
            move = options[i].value;
        }
    }
    return move;
}