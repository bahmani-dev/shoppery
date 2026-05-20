import React from 'react'
import Timer from './Timer'

const Deal = () => {
  return (
    <div className='absolute ml-5'>
      <p className='text-white font-semibold text-[15px] sm:text-[17px] mt-4'>BEST DEALS</p>
      <h1 className='text-white mt-1 font-bold sm:text-[33px] text-[25px] mb-4'>Sale of the<br /> Month</h1>
      <Timer />
      <button className='mt-24 bg-[#00B207] sm:px-8 sm:mt-[110px] sm:py-4 sm:text-[14px] px-5 py-3 rounded-[40px] text-white text-[13px] font-semibold '>Shop NOW</button>
    </div>
  )
}

export default Deal
