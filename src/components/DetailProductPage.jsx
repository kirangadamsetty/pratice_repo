import {data} from "../utils/productData.jsx"
import {useParams} from "react-router-dom"
function DetailProductPage(){
    const {id} = useParams()
     const item = data.find((li) => li.id === parseInt(id))
     const {name, price, description, offers} = item
     return(
     <div>
       <h1>{name}</h1>
       <h2>{price}</h2>
       <p>{description}</p>
       <p>{offers}</p>
     </div>
    )
}
export default DetailProductPage














