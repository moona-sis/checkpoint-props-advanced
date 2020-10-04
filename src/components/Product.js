import React from 'react'

function Product({image,price,name,category}) {
    return (
        <div className='product'>
            <img alt='product' className='image'src ={image}/>
            <div className='name'>{name}</div>
            <div className='price'>{price} DA</div>
            
            <div className='category'>Categorie : {category}</div>
        </div>
    )
}

export default Product
