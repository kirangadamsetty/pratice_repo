import {useState,useEffect, useRef} from "react"
import {useSelector} from "react-redux"
function FashionStore(){
  const products = useSelector(store => store.fashionProducts)
  const [currentProducts, setCurrentProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage  = 10
  const totalPages = products.length/productsPerPage
   let loadingRef = useRef()

  useEffect(()=>{
   const endIndex = currentPage * productsPerPage
   const startIndex = endIndex - productsPerPage
   const finalProducts = products.slice(startIndex, endIndex)
   setCurrentProducts(prev => ([...prev, ...finalProducts]))
  },[currentPage, products])   


 useEffect(()=>{
  const observer = new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){
      setCurrentPage(prev => prev +1)
    }
  },
  {threshold: 1}
)

  if(loadingRef.current) return observer.observe(loadingRef.current) 
  return () =>{
      if(loadingRef.current)  observer.unobserve(loadingRef.current)
  }
 },[])

  return(
    <>
  <div style ={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
    {currentProducts.map((item)=>{
       return (
       
        <div key  = {item.id} style = {{border:"1px solid black",height:"300px", width:"200px", padding:"50px"}}>
          <h1>{item.name}</h1>
        </div>
       )
    })}
  </div>
 {currentPage !== totalPages && <h1 ref = {loadingRef}>Loading.....</h1>}
  </>
  )
}
export default FashionStore




