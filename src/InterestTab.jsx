
function InterestTab({formData, setFormData}){
    const {interests} = formData
    
   const style ={
     margin:"10px",
    
   }

   const handleChange = (item) =>{
     if(interests.includes(item)){
         let filterData = interests.filter((data) => data !== item)
         setFormData(prev => ({...prev, interests : filterData}))
     }else{
        let updatedData = [...interests,item]
        setFormData(prev => ({...prev , interests : updatedData}))
     }
   }

    return(
       <div style = {{display:"flex", flexDirection:"column", marginTop:"20px"}}>
        <lable style = {style}> <input onChange = {()=> handleChange("coding")} name = "coding" type = "checkbox" checked = {interests.includes("coding")}/>coding</lable>
       
        <lable style = {style}> <input onChange = {()=> handleChange("playing")} name = "playing" type = "checkbox" checked = {interests.includes("playing")}/>playing</lable>
       
        <lable style = {style}>  <input onChange = {()=>handleChange("watching netflix")} name = "watching netflix" type = "checkbox" checked ={interests.includes("watching netflix")}/>watching netflix</lable>
      
       </div>
    )
}
export default InterestTab








