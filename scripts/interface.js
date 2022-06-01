document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    });
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    handleMovement(position);
    updateBoard();
}

function updateBoard() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        symbol != ""
            ? (square.innerHTML = `<div class='${symbol}'></div>`)
            : "";
    });
}
