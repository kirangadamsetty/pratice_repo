
import {useState, useEffect} from "react"
function PaginationWithUrl(){
    const [currentProducts , setCurrentProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const totalProducts = 10
    const fetchingData = async() =>{
       const skip  = (currentPage - 1) * totalProducts
        const response = await fetch(`https://dummyjson.com/products?limit=${totalProducts}&skip=${skip}&select=title,price`)
        
        if(!response.ok) throw new Error("failed to fetch Data")
        const result = await response.json()
        setCurrentProducts(result.products)
    }

    useEffect(()=>{
     fetchingData()
    },[currentPage])

    return(
      <>
        <ul>
            {
                currentProducts.map((item)=>{
                    return <li>{item.title} - {item.price}</li>
                })
            }
        </ul>
       {currentPage >=1 && <button onClick = {()=>setCurrentPage(prev => prev-1)}>Previous</button>}
        <button onClick = {()=>setCurrentPage(prev=>prev+1)}>next</button>
      </>

    )
}

export default PaginationWithUrl






















