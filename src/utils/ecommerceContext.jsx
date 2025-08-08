import {createContext,useState, useEffect} from "react"

export const ecommerceContext = createContext()


const EcommerceContextProvider = ({children}) =>{
   const [productsList, setProductsList] = useState([])
   const [cartData, setCartData] = useState([])
   const [totalAmount, setTotalAmount] = useState(0)
   const fetchingData = async() =>{
      try{
        const response = await fetch('https://dummyjson.com/products')
        if(!response.ok) throw new Error("!failed to fetch Products")
        const result = await response.json()
        setProductsList(result.products)
      }catch(error){
        console.log(error)
      }
   }
   useEffect(()=>{
const finalPrice = cartData.reduce((total, item) => {
  return total + Math.ceil(item.price * 83 * item.quantity);
}, 0);
  setTotalAmount(finalPrice)
},[cartData])
   useEffect(()=>{
     fetchingData()
   },[])
  
  const handleQuantityChange = (item,e) =>{
   const result = cartData.map((pro)=> pro.id === item.id ? {...item, quantity:e.target.value} : pro)
  setCartData(result)
}
   const addToCart = (item) =>{
      let updatedData = [...cartData]
      setCartData([...updatedData, {...item, quantity  :1}])
   }

    return(
        <ecommerceContext.Provider value = {{totalAmount,productsList,handleQuantityChange, addToCart, cartData}}>
            {children}
        </ecommerceContext.Provider>
    )
}
export default EcommerceContextProvider


















