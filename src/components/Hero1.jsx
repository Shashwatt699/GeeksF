import React from 'react'

export const Hero1 = () => {
  return (
    <div className='flex flex-col justify-center text-center text-white bg bg-black'>
        <div className="font-serif mt-20 text-2xl">Welcome back!</div>
        <div className="font-bold mt-2 text-4xl">Unlimited movies, TV shows and more</div>
        <div className="font-serif mt-10 text-2xl">Watch anywhere. Cancel anytime.</div>
        <div className="px-96 ml-96"><div className="font-semibold mt-20 text-4xl bg-red-600 pl- w-96 border-4 border-cyan-400 cursor-pointer ">Restart your Membership</div></div>
        <hr className='bg-red-600 mt-40'/>
    </div>
  )
}
 
export default Hero1;