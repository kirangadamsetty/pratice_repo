import useInnerWidth from "./utils/useInnerWidth.jsx"

function WindowSizeCalculator(){
    const currentWidth = useInnerWidth()
    return(
      <div>
        <h1>width - {currentWidth}</h1>
      </div>
    )
}
export default WindowSizeCalculator