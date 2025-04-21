import React from 'react'

const Header = () => {
  return (
    <nav className='flex items-center justify-center py-5'>
      <h1 className='text-[4vmax] font-semibold'>To-Do <span className='font-mono text-[1.4rem] text-yellow-300 font-bold'>List.</span></h1>


      {/* <p className='text-[2vmax] text-[rgb(158,158,158)] font-mono'>"Productivity starts with a single checkmark."</p> */}

      {/* <button className='add-btn text-white py-2 px-3 rounded-full text-[16px] font-semibold border'>Add Task</button> */}
    </nav>
  )
}

export default Header
