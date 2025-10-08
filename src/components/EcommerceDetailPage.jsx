import {Container, Row, Col} from "react-bootstrap"
import {Card} from "react-bootstrap"
import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"
function EcommerceDetailPage(){
    const [productData, setProductData] = useState([])
   const {id} = useParams()
   const fetchingData = async() =>{
    try{
       const response = await fetch("https://dummyjson.com/products/"+id )
       if(!response.ok) throw new Error("!failed to fetch resources")
        const result = await response.json()
        setProductData(result)
    }catch(error){
          console.log(error)
    }
   }
    useEffect(()=>{
     fetchingData()
    },[])
    console.log(productData)
    const {title, description, price, thumbnail}  = productData 
    return(
       <Container>
        <Row>
            <Col sm= {3}>
            <Card>
            <h1>{title}</h1>
           {thumbnail ? <img src = {thumbnail} alt  = "product-image"/> : <span style = {{height:"100px", width:"100px", backgroundColor:"lightblue"}}></span>}
            <p>{description}</p>
            <h3>{price}</h3>
            <button>Select Size</button>
          
            </Card>
            </Col>
        </Row>
       </Container>
    )
}
export default EcommerceDetailPage












