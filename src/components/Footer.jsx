import React from 'react'

const Footer = () => {

  const array = [23, 12, 33, 23, 21, 3, 34, 12, 3, 123]
 const array2 = new Set(array)
 
  const result = [...array2].sort((a, b)=>{
    return a - b
  })
  console.log(result.reverse()[1])
  return (
    <div>
      Footer
    </div>
  )
}

export default Footer
