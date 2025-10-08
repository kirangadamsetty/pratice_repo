import {useLocation} from "react-router-dom"
import {useEffect} from "react"


function ScrollToTop(){
    const {pathname}  = useLocation()
    useEffect(()=>{
          window.scrollTo({top:0, behaviour:"smooth"})
    },[pathname])
}

export default ScrollToTop





