import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between z-[10] absolute w-full'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='text-white pr-4 py-2 rounded cursor-pointer'>Sign Up</button>
            <button className='text-white bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar