import React from 'react'
export default function AppFooter() {
  return (
    <div className='footer'>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-md-4 text-center">
            <h3 className='text-white fs-2 py-2'>LOCATION</h3>
            <p className='text-white fs-5'>2215 John Daniel Drive</p>
            <p className='text-white fs-5'>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-center">
            <h3 className='text-white fs-2 py-2'>AROUND THE WEB</h3>
            <div className="social">
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h3 className='text-white fs-2 py-2'>ABOUT FREELANCER</h3>
            <p className='text-white fs-5'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>

      </div>

      <div className="copRight d-flex justify-content-center align-item-center py-5">
        <p className='text-white fs-5 '>
          Copyright © Your Website 2021
        </p>
      </div>

    </div>
  )
}

