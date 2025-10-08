import ReactDOM from "react-dom" 
function Modal({children}){
 return ReactDOM.createPortal(
    <div className = "modal-overlay">
    <div className = "modal-container"> 
     {children}

    </div>

    </div>, document.getElementById("modal-root")
 )
}
export default Modal