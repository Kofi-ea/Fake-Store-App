import React from 'react'

const Footer = () => {

    const newDate = new Date();
    let year = newDate.getFullYear();





  return (
    <>
        <div className='footer'>
        <p>Copyright &copy; {year}</p>
        </div>
    </>
    
  )
}

export default Footer
