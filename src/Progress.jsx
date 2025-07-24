function Progress({percentage}){
    return(
<div style  = {{width:"100%", border:"1px solid black", height:"30px"}}>
<div style = {{width:`${percentage}%`,height:"100%", boxSizing:"border-box", backgroundColor:"red"}}></div>
</div>
    )
}
export default Progress
