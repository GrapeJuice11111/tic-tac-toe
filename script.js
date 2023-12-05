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
    
    }



})();