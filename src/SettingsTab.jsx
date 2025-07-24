function SettingsTab({formData, setFormData}){
    const {theme} = formData
    const style ={
     margin:"10px",
    
   }
   const handleChange = (item) =>{
    setFormData(prevData => ({...prevData, theme : item}))
   }
    return(
        <div style = {{marginTop:"20px", display:"flex", flexDirection:"column"}}>
                    <lable style = {style}> <input onChange = {()=>handleChange("dark")} name = "dark" type = "radio" checked = {theme.includes("dark")}/>dark</lable>
<lable style = {style}> <input onChange = {()=>handleChange("light")} name = "light" type = "radio" checked = {theme.includes("light")}/>light</lable>
        </div>
    )
}
export default SettingsTab


