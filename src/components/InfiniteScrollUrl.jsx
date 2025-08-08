import {useState, useEffect, useRef} from "react"


function InfiniteScrollUrl(){
  const [currentProducts, setCurrentProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const totalProductsPerPage = 10
  const loadingRef = useRef()
   const fetchingData = async()=>{
    const skip = (currentPage -1) * totalProductsPerPage
    try{
      const response = await fetch(`https://dummyjson.com/products?limit=${totalProductsPerPage}&skip=${skip}&select=title,price`)
      if(!response.ok) throw new Error("Filed to fetch resource")
      const result = await response.json()
      setCurrentProducts(prev =>[...prev, ...result.products])
   
    }catch(error){
        console.log(error)
    }
   }

    useEffect(()=>{
        fetchingData()
    },[currentPage])


    useEffect(()=>{
       const observer = new IntersectionObserver(([event])=>{
        if(event.isIntersecting){
            setCurrentPage(prev => prev + 1)
        }
       },
       {threshold : 1}
    )

    if(loadingRef.current) observer.observe(loadingRef.current)
    return () =>{
     if(loadingRef.current) observer.unobserve(loadingRef.current)
    }
    },[])



    return(
       <>
        <ul style = {{display:"flex", flexWrap:"wrap", gap:"10px"}}>
            {currentProducts.map((item)=>{
                return <li style = {{height:"400px", width:"300px", border:"1px solid black", padding:"5px"}}>{item.title} - {item.price}</li>
            })}
        </ul>
        <h1 ref  = {loadingRef}>Loading....</h1>
       </>
    )
}
export default InfiniteScrollUrl
























