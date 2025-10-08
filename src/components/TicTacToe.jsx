import {useState} from "react" 

function TicTacToe(){

 const [currentPlayer, setCurrentPlayer] = useState("X")
 const [winner, setWinner] = useState("")
 const [rows, setRows] = useState(3)
 const [cols, setCols] = useState(3)
 const [data, setData] = useState(Array(rows).fill(null).map(()=>  {
    let result = []
    for(let i=0; i<rows; i++){
       result.push("")
    }
    return result
 } ))
const checkWinner = (index1, index2)=>{
   //check rows
   
   for(let i=0; i<rows; i++){
   
    if(data[i].every((value)=> value === currentPlayer)){
        return true
    }
    
   }
   //check cols

   for(let i=0; i<rows ; i++){
    let colsResult = true
    for(let j=0; j<cols; j++){
       if(data[j][i] !== currentPlayer){
         colsResult = false
         break
       }
    }
    if(colsResult) return true
   }
    
   let diagonalResult = true
   //diagonal
   for(let i=0; i<rows; i++ ){
    if(data[i][i] !== currentPlayer){
        diagonalResult = false
        break;
    }
   }
   let antiDiagonal = true
    for(let i=0; i<rows; i++){
        if(data[i][(rows-1) - i] !== currentPlayer){
            antiDiagonal = false
            break
        }
    }
 




   if(diagonalResult ||antiDiagonal) return true

}
const handleButton = (i , j) =>{
   if(data[i][j] !== "" || winner) return
   let updatedArray = [...data]
   updatedArray[i][j] = currentPlayer
   setData(updatedArray)

if(checkWinner(i, j )){
    setWinner(currentPlayer)
}
else{
    setCurrentPlayer(currentPlayer === "X" ? "O":"X")
}    





}


return(

<div>
<h1>{currentPlayer}</h1>
<h1>curren Winner {winner}</h1>
    {data.map((value1, index1)=>{
        return <div>
            {
                value1.map((value2, index2)=>{
                    return    <button 
                    
                    onClick = {()=>handleButton(index1, index2)}
                    style ={{fontSize:"100px",textAlign:"center",margin:"5px",height:"150px", width:"150px", padding:"5px"}}>{value2}</button>
                })
            }
        </div>
    })}
</div>

)



}
export default TicTacToe