import React from 'react'
import Product from './Product'

function ProductTable({data}) {
    return (
        <div className='table-product'>
            {data.map((elem,index) =>{
                return <Product key={index} 
                image={elem.image}
                price={elem.price}
                name={elem.name}
                category={elem.category}/>
            })}
            
            
        </div>
    )
}

export default ProductTable
