import React from 'react'
import Products from '../Components/Products'
import { availableMovies } from './Dump'
import { useState, useEffect } from 'react'

const Page = () => {

    const [counter, setCounter] = useState(0);
    const [store, setStore] = useState([])

    const received = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);

        const data = await response.json();
        console.log(data);

        setStore(data);
        
      } catch (error) {
        console.log('Something went wrong', error)
        
      }
      
    }


    console.log(store)

    useEffect(()=>{

      received();

    }, [])

 

    let update = store.map((product)=>{

      return  <Products 
       key ={product.id}
       name = {product.title} 
       category = {product.category}
       about = {product.description}
       price = {product.price}
       image = {product.image}
       />

    })

 





  return (
    <>
      
      <div className='main-page'>
       
          <div style={{display:"grid",gridTemplateColumns:"320px 320px 320px 320px", gap:"20px", padding:"50px"}}>
          {update}
          </div>
              
     
    
      </div>
    </>
 
  )
}

export default Page
