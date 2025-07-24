import React from "react"

function Parent({handleClick}){
    console.log("Child Rendered")
    return(
      <div>
        <button onClick = {handleClick}>clicked</button>
      </div>
    )
}
export default React.memo(Parent)