document.addEventListener('DOMContentLoaded', ()=>{

    const squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){
    const square = event.target;
    const position = square.id;
    if(handleMove(position)){

        setTimeout(()=>{
            alert("O jogo acabou = O vencedor foi " +timePlayer);
        }, 20);
        
    };
    updateSquares(position);
}

function reset(){
    document.getElementById("0").innerHTML = ""
    document.getElementById("1").innerHTML = ""
    document.getElementById("2").innerHTML = ""
    document.getElementById("3").innerHTML = ""
    document.getElementById("4").innerHTML = ""
    document.getElementById("5").innerHTML = ""
    document.getElementById("6").innerHTML = ""
    document.getElementById("7").innerHTML = ""
    document.getElementById("8").innerHTML = ""
    x=[]
    o=[]
    timePlayer = 0;
    gameOver = false;
    board = ['', '', '', '', '', '', '', '', ''];
}

function updateSquares(position){
    let square = document.getElementById(position.toString())
    const symbols = board[position];
    square.innerHTML = `<div class='${symbols}'></div>`
}
