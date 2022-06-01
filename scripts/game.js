// DECLARAR AS VARIÁVEIS PARA GERENCIAR ESTADO DO JOGO

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["player1", "player2"];

function handleMovement(position) {
    if (board[position] == "") {
        board[position] = symbols[playerTime];

        playerTime == 0 ? (playerTime = 1) : (playerTime = 0);
    }
}
