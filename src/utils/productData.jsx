 export const data  = Array.from({length  :100}, (_, id)=>{
        return {
            id : id,
            name : `product-${id}`,
            offers : id%2 === 0 ? true : false,
            price : id * 340,
            description : `product-${id} is soo good, with positive reviews from customers`
        }
    })





    