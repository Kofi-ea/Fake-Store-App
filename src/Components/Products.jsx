import React from 'react'

const Products = ({ name, price, image, about }) => {
  return (
    <div className='product-design'>
   
      <img className='product-image' src={image} alt= {about} />
      <div className='product-info'>
      <p style={{fontSize:"1.3rem", fontWeight:"bold"}}>{name.substring(0, 20) + '...'}</p>
      <p style={{fontSize:"1.2rem"}}>${price}</p>
      </div>
    
    </div>
  )
}

export default Products
