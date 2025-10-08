import {useState, useMemo} from "react"

import {Container, Row , Col, Button} from "react-bootstrap"

function UseMemoExample(){
    const [number, setNumber] = useState("")
    const [theme, setTheme] = useState(false)
    const expensiveCalculation = (num) =>{
      let count = 0
      console.log("calling FUnction")
      for(let i=0 ; i< 1e8; i++)  {
        count = count + i
    }
      num*2
    }
   const doubleNumber =  useMemo(()=>{
     return expensiveCalculation(number)
   },[number])
 
   return(
    <Container className = {`${theme ? "bg-dark" : "bg-danger"}`} style = {{height:"100dvh"}}> 
        <Row>
            <Col>
            <h2>{doubleNumber}</h2>
            <input type = "text" value = {number} onChange = {(e)=>setNumber(e.target.value)}/>
                <Button variant = "primary" onClick = {()=>setTheme(!theme)}>Change Theme</Button>
            </Col>
        </Row>
    </Container>
   )
}
export default UseMemoExample