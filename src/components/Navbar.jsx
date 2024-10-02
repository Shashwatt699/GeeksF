import React from 'react'
import Nlogo from "../assets/nlogo.png"
export const Navbar = () => {
    return (
        <div className='bg-black flex'>

            <div className='flex flex-row'>
                <div className="flex p-10"><img src={Nlogo} alt="" className='w-1/6 ' /></div>
            </div>

            <div className="flex flex-row justify-center text-center text-xl text-white font-semibold m-10">

                <div className=" ">
                    <div className="dropdown mr-8   ">
                        <div tabIndex={0} role="button" className="btn m-1">Select Language</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>English</a></li>
                            <li><a>Hindi</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex bg-red-500 h-8 w-24 ml-4 rounded-lg text-center cursor-pointer mt-3"> Sign Out</div>

            </div>


        </div>


    )
}
export default Navbar;