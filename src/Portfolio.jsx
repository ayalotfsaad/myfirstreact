import React, { useState } from 'react'
import img from './assets/poert1.png'
import imgTwo from './assets/port2.png'
import imgThree from './assets/port3.png'


export default function Portfolio() {
  let [model, setmodel] = useState(false)
  let [modelTwo, setmodelTwo] = useState(false)
  let [modelthree, setmodelThree] = useState(false)


  function toggleModel() {
    setmodel(!model)
  }

  function toggleModelTwo() {
    setmodelTwo(!modelTwo)
  }

  function toggleModelThree() {
    setmodelThree(!modelthree)
  }

  return (
    <div>
      <div className="container text-center py-5">
        <h2 className='contacthead'>PORTFOLIO COMPONENT</h2>
        <div className="headerAbout d-flex justify-content-center align-item-center pt-3 pb-4 text-center ">

          <div className="linedark px-5 mt-2"></div>
          <i className="fa-solid fa-star fs-4 mx-3 "></i>
          <div className="linedark px-5 mt-2"></div>
        </div>

        <div className="row gy-5">
          <div className="col-md-4 " onClick={toggleModel}>
            <div className='position-relative overflow-hidden rounded-3'>
              <img src={img} alt="" className='w-100 rounded-3' />

              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus text-white icons"></i>
              </div>

            </div>

          </div>


          <div className="col-md-4 " onClick={toggleModelTwo}>
            <div className='position-relative overflow-hidden rounded-3'>
              <img src={imgTwo} alt="" className='w-100 rounded-3' />

              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus text-white icons"></i>
              </div>

            </div>

          </div>  <div className="col-md-4 " onClick={toggleModelThree}>
            <div className='position-relative overflow-hidden rounded-3'>
              <img src={imgThree} alt="" className='w-100 rounded-3' />

              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus text-white icons"></i>
              </div>

            </div>

          </div>  <div className="col-md-4 " onClick={toggleModel}>
            <div className='position-relative overflow-hidden rounded-3'>
              <img src={img} alt="" className='w-100 rounded-3' />

              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus text-white icons"></i>
              </div>

            </div>

          </div>  <div className="col-md-4 " onClick={toggleModelTwo}>
            <div className='position-relative overflow-hidden rounded-3'>
              <img src={imgTwo} alt="" className='w-100 rounded-3' />

              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus text-white icons"></i>
              </div>

            </div>

          </div>  <div className="col-md-4 " onClick={toggleModelThree}>
            <div className='position-relative overflow-hidden rounded-3'>
              <img src={imgThree} alt="" className='w-100 rounded-3' />

              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                <i className="fa-solid fa-plus text-white icons"></i>
              </div>

            </div>

          </div>
        </div>
      </div>
      {model && <div onClick={toggleModel} className="model position-fixed start-0 w-100 top-0  
         bg-primary bg-opacity-25 d-flex justify-content-center 
         align-items-center z-1">
        <img src={img} alt="" className='w-50 rounded' />
      </div>}
      {modelTwo && <div onClick={toggleModelTwo} className="model position-fixed start-0 w-100 top-0  
         bg-primary bg-opacity-25 d-flex justify-content-center 
         align-items-center z-1">
        <img src={imgTwo} alt="" className='w-50 rounded' />
      </div>}
      {modelthree && <div onClick={toggleModelThree} className="model position-fixed start-0 w-100 top-0  
         bg-primary bg-opacity-25 d-flex justify-content-center 
         align-items-center z-1">
        <img src={imgThree} alt="" className='w-50 rounded' />
      </div>}

    </div>
  )
}
