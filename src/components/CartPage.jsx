import {useContext} from "react"
import {ecommerceContext} from "../utils/ecommerceContext.jsx"
import {Container, Row, Col} from "react-bootstrap"
function CartPage(){
    const {cartData,totalAmount,handleQuantityChange} = useContext(ecommerceContext)
    console.log(cartData)
    return(
    <Container>
        <Row>
            <Col sm = {6}>
                {cartData && cartData.map((item)=>{
                    return(
                        <div className = "border rounded-1 border-primary p-1 m-2">
                           <h2>{item.title}</h2>
                           <p>{item.description}</p>
                            <h3>{Math.ceil(item.price*83)} Rs/-</h3>
                            <select value = {item.quantity} onChange = {(e)=>handleQuantityChange(item,e)}>
                                {Array(10).fill("").map((_, index)=>{
                                    return <option value = {index+1}>{index+1}</option>
                                })}
                            </select>
                        </div>
                    )
                })}
            </Col>
            <Col sm = {6}>
                <div>
                    <h1>TotalProducts - {cartData.length}</h1>
                    <h3>Total Price = {totalAmount}</h3>
                </div>
            </Col>
        </Row>
    </Container>
    )
}
export default CartPage







