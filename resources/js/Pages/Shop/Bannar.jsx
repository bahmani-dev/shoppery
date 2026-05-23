import React from 'react'
import Deal from './Deal';

const Bannar = () => {
  return (
    <div className='mt-4 mx-2'>
      <Deal />
      <img src="/images/Bannar.png" alt="bannar" 
      className='w-full object-cover rounded-lg h-[300px] sm:h-[350px] md:h-[360px] lg:h-[440px]'/>
    </div>
  )
}

export default Bannar;