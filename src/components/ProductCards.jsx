import {useNavigate} from "react-router-dom"
const ProductCards = ({data}) => {
    const navigate = useNavigate()
  return (
    <div onClick = {()=>navigate(`/detailproductInfo/${data.id}`)} style = {{border:"1px solid black",height:"400px", width:"200px", padding:"10px"}}>
      <h1>{data.name}</h1>
    </div>
  )
}
export default ProductCards

export const withOffers  = (Component) =>{
    return ({data}) =>{
        return(
            <div style = {{position:"relative"}}>
                <h5 style = {{position:"absolute", bottom:"0",left:"50%",right:"50%", transfrom :"translate(-50%,-50%)"}}>OffersApplies</h5>
                <Component data  = {data}/>
            </div>
        )
    }
}

