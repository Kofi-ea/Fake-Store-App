import React from 'react'

const Products = ({ name, category, price, image,about }) => {
  return (
    <div className='product-design'>
      <h3>{name}</h3>
      <img className='product-image' src={image} alt= {about} />
      <p>{category}</p>
      <p>{price}</p>
    </div>
  )
}

export default Products
