(function gameTicTacToe(){

    function gameBoard(){
        rows = 3
        column = 3
        board = []
        
        //creates a 2d array to store marker values "X" or "O"
        for(let i = 0; i < rows; i++){
            board[i] = [];  
            for(let j = 0; j < column; j++){
                board[i].push(cell());  
            } 
        }
        // to get the board latest instance
        const getBoard = () => board

            // func to set marker
        const putMarker =  (row,column,player) => {
            if(board[row][column].getValue() === ""){
                board[row][column].addMarker(player)
               
            }
            }
            
           

        return { getBoard, putMarker}
            
    }

    function cell(){
        let value =  "";

        const addMarker = (marker) => {
            value = marker;
        };

        const getValue = () => value;

        return {
            addMarker,
            getValue
        }
    }

    function gameController(){
        const player = [{
            name: "Player 1",
            marker: "X"
        },
        {
            name: "Player 2",
            marker: "O"
        }
    ];

    const board = gameBoard();

    let activePlayer = player[0];

    const switchPlayerTurn = () => {
        activePlayer = (activePlayer === player[0]) ? player[1] : player[0];  
    }

    const getActivePlayer = () => activePlayer;





    
    let win = 0;
    let winner = ""
    const playRound = (row,column) => {
        board.putMarker(row,column,getActivePlayer().marker)
        
        // for win condition
        //player 1 wins
        if((board.getBoard()[0][0].getValue()) === (board.getBoard()[0][1].getValue()) 
        && (board.getBoard()[0][1].getValue()) === (board.getBoard()[0][2].getValue())
        && (board.getBoard()[0][2].getValue()) === "X") {
            win = 1
            winner = player[0].name
        }
        else  if((board.getBoard()[1][0].getValue()) === (board.getBoard()[1][1].getValue()) 
        && (board.getBoard()[1][1].getValue()) === (board.getBoard()[1][2].getValue())
        && (board.getBoard()[1][2].getValue()) === "X") {
            win = 1
            winner = player[0].name
        }
        
        else  if((board.getBoard()[2][0].getValue()) === (board.getBoard()[2][1].getValue()) 
        && (board.getBoard()[2][1].getValue()) === (board.getBoard()[2][2].getValue())
        && (board.getBoard()[2][2].getValue()) === "X") {
            win = 1
            winner = player[0].name
        }
        
        else if((board.getBoard()[0][0].getValue()) === (board.getBoard()[1][1].getValue())
        && (board.getBoard()[1][1].getValue()) === (board.getBoard()[2][2].getValue())
        && (board.getBoard()[2][2].getValue() === "X")){
            win = 1;
            winner = player[0].name
        }
        else if((board.getBoard()[0][2].getValue()) === (board.getBoard()[1][1].getValue())
        && (board.getBoard()[1][1].getValue()) === (board.getBoard()[2][0].getValue())
        && (board.getBoard()[2][0].getValue()) === "X"){
            win = 1;
            winner = player[0].name
        }
        else if((board.getBoard()[0][0].getValue()) === (board.getBoard()[1][0].getValue())
        && (board.getBoard()[1][0].getValue()) === (board.getBoard()[2][0].getValue())
        && (board.getBoard()[2][0].getValue()) === "X"){
            win = 1;
            winner = player[0].name
        }
        else if((board.getBoard()[0][1].getValue()) === (board.getBoard()[1][1].getValue())
        && (board.getBoard()[1][1].getValue()) === (board.getBoard()[2][1].getValue())
        && (board.getBoard()[2][1].getValue()) === "X"){
            win = 1;
            winner = player[0].name
        }
        else if((board.getBoard()[0][2].getValue()) === (board.getBoard()[1][2].getValue())
        && (board.getBoard()[1][2].getValue()) === (board.getBoard()[2][2].getValue())
        && (board.getBoard()[2][2].getValue()) === "X"){
            win = 1;
            winner = player[0].name
        }


        else if((board.getBoard()[0][0].getValue()) === (board.getBoard()[0][1].getValue()) 
        && (board.getBoard()[0][1].getValue()) === (board.getBoard()[0][2].getValue())
        && (board.getBoard()[0][2].getValue()) === "O") {
            win = 2
            winner = player[1].name
        }

        else  if((board.getBoard()[1][0].getValue()) === (board.getBoard()[1][1].getValue()) 
        && (board.getBoard()[1][1].getValue()) === (board.getBoard()[1][2].getValue())
        && (board.getBoard()[1][2].getValue()) === "O") {
            win = 2;
            winner = player[1].name
        }
        
        else  if((board.getBoard()[2][0].getValue()) === (board.getBoard()[2][1].getValue()) 
        && (board.getBoard()[2][1].getValue()) === (board.getBoard()[2][2].getValue())
        && (board.getBoard()[2][2].getValue()) === "O") {
            win = 2;
            winner = player[1].name
        }
        
        else if((board.getBoard()[0][0].getValue()) === (board.getBoard()[1][1].getValue())
        && (board.getBoard()[1][1].getValue()) === (board.getBoard()[2][2].getValue())
        && (board.getBoard()[2][2].getValue() === "O")){
            win = 2;
            winner = player[1].name
        }
        else if((board.getBoard()[0][2].getValue()) === (board.getBoard()[1][1].getValue())
        && (board.getBoard()[1][1].getValue()) === (board.getBoard()[2][0].getValue())
        && (board.getBoard()[2][0].getValue()) === "O"){
            win = 2;
            winner = player[1].name
        }

        else if((board.getBoard()[0][0].getValue()) === (board.getBoard()[1][0].getValue())
        && (board.getBoard()[1][0].getValue()) === (board.getBoard()[2][0].getValue())
        && (board.getBoard()[2][0].getValue()) === "O"){
            win = 2;
            winner = player[1].name
        }
        else if((board.getBoard()[0][1].getValue()) === (board.getBoard()[1][1].getValue())
        && (board.getBoard()[1][1].getValue()) === (board.getBoard()[2][1].getValue())
        && (board.getBoard()[2][1].getValue()) === "O"){
            win = 2;
            winner = player[1].name
        }
        else if((board.getBoard()[0][2].getValue()) === (board.getBoard()[1][2].getValue())
        && (board.getBoard()[1][2].getValue()) === (board.getBoard()[2][2].getValue())
        && (board.getBoard()[2][2].getValue()) === "O"){
            win = 2;
            winner = player[1].name
        }
    

        switchPlayerTurn();

    }


    return{
        playRound,
        getActivePlayer,
        getBoard: board.getBoard,
        win,
        winner
    };
    
    }



})();