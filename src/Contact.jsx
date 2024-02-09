import React from 'react'
import Form from 'react-bootstrap/Form';


export default function Contact() {
  return (
    <div className='contactContainer py-5 '>
     <div className='text-center py-3'>
<h2 className='contacthead'>CONATCT SECTION</h2>
   <div className="headerAbout d-flex justify-content-center align-item-center pt-3 pb-4 ">
   
    <div className="linedark px-5 mt-2"></div>
    <i className="fa-solid fa-star fs-3 mx-3"></i>
   <div className="linedark px-5 mt-2"></div>
   </div>
</div>
      <Form.Floating className='mt-5 mb-4 w-50 '>
        <Form.Control
          id="floatinguserNameCustom"
          type="text"
          placeholder="userName"
        />
        <label htmlFor="floatinguserNameCustom">userName</label>
      </Form.Floating >
      <Form.Floating  className=' mb-4 w-50 '>
        <Form.Control
          id="floatinguserAgeCustom"
          type="text"
          placeholder="userAge"
        />
        <label htmlFor="floatinguserAgeCustom">userAge</label>
      </Form.Floating>
      <Form.Floating  className=' mb-4 w-50 '>
        <Form.Control
          id="floatinguserEmailCustom"
          type="email"
          placeholder="userEmail"
        />
        <label htmlFor="floatinguserEmailCustom">userEmail</label>
      </Form.Floating>
      <Form.Floating  className=' mb-4 w-50 '> 
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="userPassword"
        />
        <label htmlFor="floatingPasswordCustom">userPassword</label>
      </Form.Floating>
      <button className='btn '>send Massege</button>
    </div>
  )
}
