import React from 'react'
import { BsBoxFill} from "react-icons/bs"
import {  } from "react-icons"
const Orders = () => {
  return (
    <div className='absolute left-32 md:left-64 top-28'>
      <h1>Orders Page</h1>

      <div className="border border-orange-400 py-8 w-[300px]  md:w-[500px]">
        <div className=' flex flex-col md:flex-row w-full ml-3 md:justify-around  text-lg'>
        <div className=''>
        <BsBoxFill size={30} fill='#ff9a17' className='mx-3'/>
        </div>
          <p>product name</p>
          <p>items: 2</p>
          <p>$55</p>
      
        <select name="foodstatus" id="foodstatus" className='px-3 py-1 w-[70%] md:w-fit md:px-2 md:py-2 border-2 border-orange-500 outline-none rounded-md bg-orange-100'>
          <option value="Food Processing" className=' '>Food Processing</option>
          <option value="Out for delivery" className=' '>Out for delivery</option>
          <option value="Delivered" className=' '>Delivered</option>
        </select>
        </div>
      </div>
    </div>
  )
}

export default Orders