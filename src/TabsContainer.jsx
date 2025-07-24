import ProfileTab from "./ProfileTab.jsx"
import {useState} from "react"
import InterestTab from "./InterestTab.jsx"
import SettingsTab from "./SettingsTab.jsx"
function TabsContainer(){
  const [currentTab, setCurrentTab] = useState(0)
    const tabs = [
        {
            name : "Profile",
            component : ProfileTab,
        },
        {
            name : "Interest",
            component : InterestTab,
        },
        {
            name : "Settings",
            component : SettingsTab,
        },
    ]
    const [formData, setFormData] = useState({
         name : "Kiran", 
        age : 24, 
        email : "gadamsettykiran514@gmail.com",
        interests : ["coding", "playing", "watching netflix"], 
        theme : "dark"
    })
    
   const handlePreviousButton = () =>{
       if(currentTab > 0){
        setCurrentTab(prev => prev-1)
       }
   }
   const handleNextButton  = () =>{
         if(currentTab < tabs.length-1){
            setCurrentTab(prev => prev + 1)
         }
   }
   const handleSubmit = () =>{
    console.log(formData)
   }
   const ActiveTab = tabs[currentTab].component
    return(
      <div>
        {tabs.map((data, index)=>{
            return <button onClick = {()=>setCurrentTab(index)} style = {{padding:"20px",cursor:"pointer"}}>{data.name}</button>
        })}
        <div style = {{border:"1px solid black", width:"40%", height:"300px", marginTop:"-10px"}}>
            <ActiveTab formData = {formData} setFormData = {setFormData}/>
        </div>
       {currentTab > 0 && <button onClick = {handlePreviousButton}>Previous</button>}
        {currentTab !== tabs.length-1 && <button onClick = {handleNextButton}>Next</button>}
        {currentTab === tabs.length-1 && <button onClick = {handleSubmit}>Submit</button>}
      </div>
    )
}
export default TabsContainer






