import React from 'react'
import Timer from './Timer'

const Deal = () => {
  return (
    <div className='absolute ml-5 md:ml-9 sm:ml-9 lg:ml-20'>
      <p className='text-white lg:text-[20px] font-semibold text-[15px] sm:text-[17px] mt-4'>BEST DEALS</p>
      <h1 className='text-white mt-1 lg:text-[40px] font-bold sm:text-[33px] text-[25px] mb-4'>Sale of the<br /> Month</h1>
      <Timer />
      <div className='absolute hidden left-[360px] lg:left-[750px] xl:left-[850px] xl:w-52 xl:h-52 lg:bottom-[100px] bottom-[85px] md:left-[400px] md:absolute md:bottom-[100px] bg-[#FF8A00] w-28 h-28 lg:w-40 lg:h-40 rounded-[50%] sm:flex sm:flex-col sm:justify-center sm:items-center'>
        <h1 className='text-white xl:text-[55px] text-[30px] lg:text-[40px] font-semibold'>56%</h1>
        <p className='text-white xl:text-[30px] xl:mt-[-9px] lg:text-[22px] text-[19px] mt-[-5px]'>OFF</p>
      </div>
      <button className='mt-24 bg-[#00B207] lg:mt-[150px] lg:px-9 lg:py-5 lg:text-[18px] sm:px-8 md:mt-[120px] sm:mt-[100px] sm:py-4 sm:text-[14px] px-5 py-3 rounded-[40px] text-white text-[13px] font-semibold '>Shop NOW</button>
    </div>
  )
}

export default Deal;