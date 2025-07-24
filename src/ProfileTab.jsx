function ProfileTab({formData, setFormData}){
    const {name, age, email} = formData
    const handleChange = (e, item) =>{
        setFormData(prev => ({...prev, [item] : e.target.value}))
    }
    const style = {
        margin:"10px",
         padding:"2px"
    }
    return(
        <div style = {{display:"flex", flexDirection:"column", alignItems:"start", marginTop:"20px"}}>
            <input style = {style} type = "text" placeholder = {name} value = {name} onChange = {(e)=>handleChange(e, "name")}/>
            <input style = {style} type = "number" placeholder = {age} value = {age} onChange = {(e)=>handleChange(e, "age")}/>
            <input style = {style} type = "email" placeholder = {email} value = {email} onChange = {(e)=>handleChange(e, "email")}/>
        </div>
    )
}
export default ProfileTab






