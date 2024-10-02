import React from 'react'
import N from '../assets/N.png'

export const Hero3 = () => {
  return (
    <div className='flex justify-center items-center bg-black'>

<div className="flex flex-col">
<div className='mt-20 flex flex-row '>

    {/* Left side divs */}
    <div className=""> <img src={N} alt="Netflix sign" /></div>

    {/* right side div */}
    <div className="flex-col text-white text-3xl w-4xl">
        <div className="font-bold text-6xl">Download your shows to watch offline</div>
        <div className="font-mono mt-14">Save your favourites easily and always have something to watch.</div>
    </div>

    </div>
    <div className=""><hr className='bg-red-600 mt-40 '/></div>
    </div>

    



    </div>
  )
}
export default Hero3;