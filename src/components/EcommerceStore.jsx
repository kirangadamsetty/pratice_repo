import {useContext, useEffect, useState, useRef} from "react"
import {ecommerceContext} from "../utils/ecommerceContext"
import {Card} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
function EcommerceStore(){
    const {productsList, addToCart, cartData}  = useContext(ecommerceContext)
    const navigate = useNavigate()
   const totalProductsPerPage = 10
   const totalProducts = productsList.length
   const totalPages = totalProducts/totalProductsPerPage
   const [currentProducts, setCurrentProducts]  = useState([])
   const [currentPage, setCurrentPage]  = useState(1)
     const loadingRef  = useRef()
   useEffect(()=>{
     const startIndex = (currentPage-1) * totalProductsPerPage
     const endIndex = startIndex + totalProductsPerPage
     const slicedProducts = productsList.slice(startIndex, endIndex)
     setCurrentProducts(prev => [...prev, ...slicedProducts])
   },[currentPage])
 
   useEffect(()=>{
      
    const observer = new IntersectionObserver(([entry])=>{
        if(entry.isIntersecting){
            setCurrentPage(prev =>prev + 1)
        }
        },
        {threshold : 1}
    )

        if(loadingRef.current) observer.observe(loadingRef.current)
        return () =>{
          if(loadingRef.current) observer.unobserve(loadingRef.current)
        }
   },[])
 console.log(cartData)
   return(
    <>
    <button onClick = {()=>navigate("/cart")}>Open Cart</button>
    <div style = {{display:"flex"  , flexWrap:"wrap", gap:"10px"}}>
        {currentProducts.map((item)=>{
            return(
                <Card onClick = {()=>navigate("/ecommerceDetail/"+item.id)} style = {{border:"1px solid black",width:"300px",padding:"5px"}}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <h3>{item.price}</h3>
                    <button onClick = {()=>{addToCart(item);alert(`${item.title} added to cart`)}}>Add to cart</button>
                </Card>
            )
        })}
    </div>
  {totalPages !== currentPage && <h3 ref = {loadingRef}>Loading....</h3>}
    </>
   )
}
export default EcommerceStore


