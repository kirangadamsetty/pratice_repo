
import qrCode from "/qr-code.png"
import {Button} from "react-bootstrap"
function ImageDownload(){
    const handleDownload  = async() =>{
        const response = await fetch(qrCode)
        const blob = await response.blob()
        console.log(blob)
        const url =  window.URL.createObjectURL(blob)
        console.log(url)
        const link = document.createElement("a")
        link.href = url
        link.download = "your_qr_code"
        document.body.appendChild(link)
        link.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(link)
    }
    const handleCopy  = async() =>{
       const text = "9876543210@qpay"
       try{
         await navigator.clipboard.writeText(text)
         alert("upi is copied")
       }catch(error){
        console.log(error)
       }
    }
    return(
      <div>
        <img src = {qrCode} width = "200" height= "200"/>
        <Button onClick = {handleDownload}>Download</Button>
        <h3>UPI ID : 9876543210@qpay</h3>
        <Button onClick = {handleCopy}>Copy UPIID</Button>
      </div>
    )
}
export default ImageDownload




