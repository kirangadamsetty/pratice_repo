import {useState, useEffect} from "react"
import ProductCards from "./ProductCards"
import useOnlineStatus from "../utils/useOnlineStatus.jsx"
import {withOffers} from "./ProductCards.jsx"
 import {data} from "../utils/productData.jsx"

function Product(){
    const OffersCards = withOffers(ProductCards)
     
   const onlineStatus = useOnlineStatus()
    const [currentPage, setCurrentPage] = useState(1)
    const [currentProducts, setCurrentProducts] = useState([])
    const productsPerPage = 10
    const totalPages = data.length/productsPerPage


   useEffect(()=>{
    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage
    const slicedProducts = data.slice(firstIndex, lastIndex)
     setCurrentProducts(slicedProducts)
   },[currentPage])


    return(
        <div>
           <div style = {{display:"flex", flexWrap:"wrap", gap:"20px"}}> 
            {currentProducts.map((item)=>{
                 return item.offers ?  <OffersCards data = {item}/> :  <ProductCards data = {item}/>
            })}
           </div>
           <div>
            {Array.from({length: totalPages}, (_, id)=>{
                return <button onClick = {()=> setCurrentPage(id+1)}>{id}</button>
            })}
           </div>
        </div>
    )
}
export default Product


