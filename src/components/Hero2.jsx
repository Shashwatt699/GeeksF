import React from 'react'
import N from '../assets/N.png'

export const Hero2 = () => {
  return (
    <div className='flex  justify-center items-center bg-black'>

    <div className="flex flex-col">
    <div className='mt-20 flex flex-row '>

    {/* Left side divs */}
    <div className="flex-col text-white text-3xl w-4xl ml-16">
        <div className="font-bold text-6xl">Enjoy on your TV</div>
        <div className="font-mono mt-14">Watch on smart TVs, PlayStation, Xbox, Chromecast, 
            Apple TV, Blu-ray players and more.</div>
    </div>

    {/* right side div */}
    <div className="flex-col"> <img src={N} alt="Netflix sign" /></div>
    </div>


    <div className=""><hr className='bg-red-600 mt-40'/></div>
    </div>

    </div>
    
  )
}
export default Hero2;