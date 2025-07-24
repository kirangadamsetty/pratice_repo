import {useRef} from "react"
import Product from "./Products"
import FashionStore from "./FashionStore.jsx"
import ReduxStore from "./utils/ReduxStore.jsx"
import {Provider} from "react-redux"
import Counter from "./Counter.jsx"
import ProgressBar from "./ProgressBar.jsx"
import TabsContainer from "./TabsContainer.jsx"
import WindowSizeCalculator from "./WindowSizeCalculator"
import Faq from "./Faq.jsx"
import OtpGenerator from "./OtpGenerator.jsx"
import UserContextProvider from "./utils/UserContext.jsx"
import UsersProfile from "./UsersProfile.jsx"
import StateandCapital from "./StateandCapital.jsx"
import StopWatch from "./StopWatch.jsx"
import Throttling from "./Throttling.jsx"
import Debouncing from "./Debouncing.jsx"
function App(){
  
const inputRef = useRef(null)

const handleSubmit = () =>{
  console.log(inputRef.current.value)
}

   return(
     <>
     <Provider store  = {ReduxStore}>
     <UserContextProvider>
<input type = "text" ref = {inputRef}/>
<button onClick = {handleSubmit}>submit</button>
{/* <FashionStore/>
<Counter/>
<Faq/>
<ProgressBar/>
 <TabsContainer/>
<WindowSizeCalculator/>
<StateandCapital/>
<StopWatch/>
<Debouncing/>
<Throttling/> */}
<OtpGenerator/>
<UsersProfile/>
</UserContextProvider>
</Provider> 


     </>
   )
} 

export default App 


