let board = ['', '', '', '', '', '', '', '', ''];
let timePlayer = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let winState = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[timePlayer];

        gameOver = isWin();

        if (gameOver == false) {

            timePlayer = (timePlayer == 0)?1:0;
        }
    }
    return gameOver;
}

function isWin() {

    for (let i = 0; i < winState.length; i++) {
        let sequence = winState[i];

        let pos1 = sequence[0];
        let pos2 = sequence[1];
        let pos3 = sequence[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {

            return true;
        }
    }
    return false;
}
