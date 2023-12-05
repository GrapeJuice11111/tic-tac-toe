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

})();