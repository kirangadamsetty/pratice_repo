import {createContext, useState, useEffect} from "react"


export const UserContext = createContext()



function UserContextProvider({children}){
    const [formData, setFormData]  = useState({
        name : "",
        email : "", 
        gender : "male",
        status : ""
    })    
  const [usersData , setUsersData]  =useState([])
  const [updateKey, setUpdateKey] = useState(null)


  useEffect(()=>{
    const fetchingData = async() =>{
        try{
            let response = await fetch("https://gorest.co.in/public/v2/users",{
                method : "GET"
            })
            if(!response.ok){
                throw new Error("Error occured on server")
            }
            let result = await response.json()
            setUsersData(result)
        }catch(error){
            console.log(error)
        }
    }
      fetchingData()
  },[])


  const handleAddingData = async (data) =>{
     try{
          const response = await fetch("https://gorest.co.in/public/v2/users", {
            method:"POST",
            headers :{
                "Content-Type" : "application/json",
                Accept : "application/json",
                Authorization:"Bearer 221f55519d6804d85dad5824be750b54e3de0313d2a5e7c1ffcabc8e6fa8b517"
            },
            body : JSON.stringify(data)
          })
          const result = await response.json()
          let updatedData  = [...usersData, result]
     
          setUsersData(updatedData)

     }catch(error){
         console.log(error)
     }
    }

    const handleDeleteData = async (data) =>{
        try{
           const response = await fetch("https://gorest.co.in/public/v2/users/"+ data.id, {
            method  : "DELETE",
            headers : {
                "Content-Type" :"application/json",
                Accept : "application/json",
                Authorization: "Bearer 221f55519d6804d85dad5824be750b54e3de0313d2a5e7c1ffcabc8e6fa8b517"
            }

           })
           const result = await response.status
           if(result === 204){
            const filteredData = usersData.filter(((item)=>item.id !== data.id))
            setUsersData(filteredData)
           }
        }catch(error){
            console.log(error)
        }
    }
const handleUpdate = async(key) =>{
const response = await fetch("https://gorest.co.in/public/v2/users/"+ key, {
        method : "PUT",
        headers : {
            "Content-Type" :"application/json",
             Accept : "application/json",
             Authorization: "Bearer 221f55519d6804d85dad5824be750b54e3de0313d2a5e7c1ffcabc8e6fa8b517"
        },
        body : JSON.stringify(formData)
     })
    const result = await response.json()
    const index = usersData.findIndex((item)=> item.id === result.id)
    const newData = [...usersData]
    newData[index] = result
    setUsersData(newData)
 
}



    const handleSubmit  = (e, data) => {
        e.preventDefault()
        if(updateKey === null){
         handleAddingData(data)
        }else if(updateKey){
            handleUpdate(updateKey)
        }
       setUpdateKey(null)
       setFormData( ({name : "", email : "", gender : "male", status : ""}))
    }
 
  const handleUpdateData = async (data) =>{
    setUpdateKey(data.id)
     setFormData(data)     

  }


   return(
    <UserContext.Provider value = {{updateKey, handleUpdateData,handleDeleteData,handleSubmit,usersData, setUsersData,formData, setFormData}}>
        {children}
    </UserContext.Provider>
   )
}
export default UserContextProvider






