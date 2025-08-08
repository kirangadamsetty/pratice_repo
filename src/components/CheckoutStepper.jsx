import {checkoutSteps} from "../utils/checkoutSteps"
import {useState, useEffect, useRef} from "react"
import "./checkout.css"
function CheckoutStepper(){
 const [currentStep , setCurrentStep] = useState(1)
 const [isCompleted , setIsCompleted] = useState(false)
 const inputRef = useRef([])
 const [margins, setMargins] = useState({
    marginLeft:0,
    marginRight  : 0
 })
 console.log(checkoutSteps.length)
useEffect(()=>{
  setMargins({
    marginLeft : inputRef.current[0].offsetWidth/2,
    marginRight : inputRef.current[checkoutSteps.length -1].offsetWidth/2
  })
},[])
const calculateProgress = () => {
  return ((currentStep - 1) / (checkoutSteps.length - 1)) * 100;
};

 return(
    <>
<div className = "stepper">
        {checkoutSteps.map((step  , index)=>{
            return(
            
               <div 
               
               key = {index} ref = {(ele)=>inputRef.current[index] = ele } className = "stepper-container">
 <h1 className = {`step ${currentStep > index + 1 || isCompleted ? "complete" : "" }
 ${ currentStep === index + 1 ? "active" : ""}`}>
 
 {index}
 </h1>
                <p>{step.name}</p>
               </div>
               

            )
        })}
    </div>
    <div className = "progress-bar" style = {
        {    width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft : margins.marginLeft, marginRight : margins.marginRight}}>
        <div className="progress" style={{ /* existing styles */ }}>
  <div
    className="progress"
    style={{ width: `${calculateProgress()}%` }}
  />
</div>
    </div>
    </>
    


 )
}
export default CheckoutStepper