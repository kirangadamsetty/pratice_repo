import {useState, useEffect, useRef} from "react"
import Card from "react-bootstrap/Card"
import {Container, Row, Col} from "react-bootstrap"
import Modal from "./Modal.jsx"
import {Button} from "react-bootstrap" 
function InfiniteScroll(){
  const [showModal, setShowModal] = useState(false)
  const [products, setProducts] = useState(Array.from({length:"100"}, (_, index)=>{
    return {
      id : `product ${index}`,
      name : `product ${index}`,
      price : `${index * 1000}`,
      description : `This product belongs to index ${index}`
    }
  }))
  const loadingRef = useRef(null)
 const [currentProducts, setCurrentProducts] = useState([])
 const [currentPage, setCurrentPage] = useState(1)
 const numberOfProducs = 10
 useEffect(()=>{
  const startIndex  = (currentPage -1 ) * numberOfProducs
  const endIndex = startIndex + numberOfProducs
  const updatedData = [...products]
  const slicedProducts = updatedData.slice(startIndex, endIndex)
  setCurrentProducts(prev => ([...prev, ...slicedProducts]))
  },[currentPage])
  useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){
        setCurrentPage(prev => prev + 1)
      }
    }, {thresold : 1})
    
    if(loadingRef.current) observer.observe(loadingRef.current)
    return () =>{
    if(loadingRef.current) observer.unobserve(loadingRef.current)
    }


  },[])
  return(
    <Container>
    <Row>

   
      {
        currentProducts.map((data, index)=>{
          return (
            <Col lg = {3} className = "gap-2 my-2">

          
            <Card key  = {data.id} style= {{height:"300px"}}>
               <h1>{data.name}</h1>
               <h2>{data.price}</h2>
               <button onClick = {()=>setShowModal(!showModal)}>Add to cart</button>
            </Card>
              </Col>
              
          )
        })
      }
 <h2 ref = {loadingRef}>Loading...</h2>
{ showModal &&<Modal>
  <h3>Thanks you for choosing the product add to cart </h3>
  <Button variant = "secondary">Add to cart</Button>
  <Button variant = "danger" className = "ms-1" onClick = {()=>setShowModal(!showModal)}>Close</Button>
 </Modal>}
       </Row>
    </Container>
  )
}
export default InfiniteScroll









     










