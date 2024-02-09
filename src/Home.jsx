import React from 'react'
import img from './assets/avataaars.svg'

export default function Home() {
  return (
    <div className='home py-5'>
      <div className="container d-flex justify-content-center align-items-center text-white py-5 flex-column">
         <img src={img} />
        <h1 className='py-2 pt-5 '>START FRAMEWORK</h1>
        <div className="headerAbout d-flex justify-content-center align-item-center pt-3 pb-4 flex-cc">

          <div className="line px-3 mt-2"></div>
          <i className="fa-solid fa-star fs-3 mx-3 text-white"></i>
          <div className="line px-3 mt-2"></div>
        </div>
        <div className='fs-4'>Graphic Artist - Web Designer - Illustrator</div>
      </div>



    </div>
  )
}
