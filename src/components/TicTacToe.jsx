import {useState} from "react"
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses"

function TicTacToe(){
     const [rows, setRows] = useState(3)
     const [cols, setCols] = useState(3)
     const [currentPlayer, setCurrentPlayer] = useState("X")
     const [winner, setWinner] = useState("")

     const [board, setBoard] = useState(Array(rows).fill(null).map(()=>Array(cols).fill("")))
     console.log(board)

     const handleButton = (i, j) =>{
        if(board[i][j] !== "" || winner) return

        let newBoard = [...board]
        newBoard[i][j] = currentPlayer
        setBoard(newBoard)
        if(checkWinner(newBoard)){
            setWinner(currentPlayer)
        }else{
            setCurrentPlayer(prev => prev === "X"? "O": "X")
        }
    }


    const checkWinner = (newBoard) =>{
        //checkrows
        for(let i=0; i<rows; i++){
            if(newBoard[i].every((val)=>val === currentPlayer)){
                return true
            }
        }

        //check cols
        for(let i=0; i<rows; i++){
            let result = true
            for(let j=0; j<cols; j++){
                 if(newBoard[j][i] !== currentPlayer){
                     result = false
                     break
                 }
            }
           if(result) return result
        }


       let result = true;
for (let j = 0; j < cols; j++) {
    if (newBoard[j][j] !== currentPlayer) {
        result = false;
        break;
    }
}

let antiColResult = true;
 for(let i=0; i<cols; i++){
    if(newBoard[i][cols - (i+1)] !== currentPlayer){
        antiColResult = false
        break
    }
  
    }
if(result || antiColResult) return true
}


       


    return(
      <div>
      

               <h1>currentPlayer : {currentPlayer}</h1>
               <h2>winner : {winner}</h2>
        {board.map((array, index1)=>{
            return (
              
                <div>

                    {array.map((value, index2)=>{
                        return <button 
                        onClick = {()=>handleButton(index1, index2)}
                        style ={{height:"150px", width:"150px",border:"1px solid black" , margin:"10px"}}>
                          {value}

                        </button>
                    })}
                </div>
               
            )
        })}
      </div>
    )
}
export default TicTacToe