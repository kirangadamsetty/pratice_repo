import {useState, useRef,useEffect} from "react"
import ProductCards from "./ProductCards.jsx"
 import {data} from "../utils/productData.jsx"

function InfiniteScroll(){
    const [currentProducts, setCurrentProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const productsperPage = 10
    const totalPages = (data.length)/productsperPage
    
    const loadingRef = useRef()
    useEffect(()=>{
     
      const end = currentPage * productsperPage
       const start = end - productsperPage
      const slicedProducts = data.slice(start, end)
      console.log(slicedProducts)
      setCurrentProducts(prev => ([...prev, ...slicedProducts]))
      
    },[currentPage])
      useEffect(()=>{
         const observer = new IntersectionObserver(([entry])=>{
              if(entry.isIntersecting){
                setCurrentPage(prev => prev + 1)
            }
         }
        , {threshold: 1}
        )

         if(loadingRef.current) observer.observe(loadingRef.current)
            return () =>{
        if(loadingRef.current) observer.unobserve(loadingRef.current)
            }
      },[])

    return(
        <div>
<div style = {{display:"flex", flexWrap:"wrap", gap:"20px"}}>
        {currentProducts.map((data)=>{
            return <ProductCards data= {data}/>
        })}
       </div>
   {totalPages !== currentPage && <h1 ref = {loadingRef}>Loading......</h1>}
        </div>
       
    )
}
export default InfiniteScroll