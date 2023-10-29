import React from 'react'
import { FaShare, FaSignOutAlt } from 'react-icons/fa'
import Button from '../Components/Button/Button'

function NavBar() {
  return (
    //TODO: Hide on scroll down, and show back if scrolled up
    <div className='bg-blue-100 px-3 py-2 h-16 flex items-center justify-between sticky top-0 z-50'>
        <h2 className='text-xl'>TravelPlan</h2>
        <ul className='flex space-x-2 items-center'>
            <Button icon={<FaShare/>}>Share</Button>
            <li><FaSignOutAlt/></li>
        </ul>
    </div>
  )
}

export default NavBar