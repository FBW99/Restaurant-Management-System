import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-[50] shadow-lg shadow-white/10 bg-black/30 px-8 py-6 backdrop-blur-sm'>
        <div className="flex justify-around">
            <div className="text-2xl font-bold text-orange-500">
                WorldPlate
            </div>
            <div>
                <ul className='md:flex items-center gap-8 hidden'>
                    <li className="hover:underline text-md"><a href="#">Home</a></li>
                    <li className="hover:underline"><a href="#">Menu</a></li>
                    <li className="hover:underline"><a href="#">About us</a></li>
                    <li className="hover:underline"><a href="#">Special</a></li>
                    <li className="hover:underline"><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="text-sm font-normal text-gray-700">
                <a href="#" className="cursor-pointer text-orange-500 hover:text-gray-500 transition-colors px-1">Sign in</a>
                <span className='text-gray-400 ml-1 mr-1'>/</span><a href="#" className="cursor-pointer text-gray-400 hover:text-gray-500 transition-colors px-1">Register</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar   