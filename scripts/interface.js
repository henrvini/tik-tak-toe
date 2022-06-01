document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    });
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMovement(position)) {
        setTimeout(() => {
            alert(
                `Game Over - ${
                    playerTime == 0 ? "Player 1" : "Player 2"
                } is the winner`
            );
        }, 10);
    }
    updateBoard(position);
}

function updateBoard(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];

    symbol != "" ? (square.innerHTML = `<div class='${symbol}'></div>`) : "";
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.innerHTML = "<div></div>";
    });
}
