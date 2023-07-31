import React from 'react'
import { FaShare, FaSignOutAlt } from 'react-icons/fa'
import Button from '../Components/Button/Button'

function NavBar() {
  return (
    <div className='bg-blue-100 px-3 py-2 flex items-center justify-between'>
        <h2 className='text-xl'>TravelPlan</h2>
        <ul className='flex space-x-2 items-center'>
            <Button icon={<FaShare/>}>Share</Button>
            <li><FaSignOutAlt/></li>
        </ul>
    </div>
  )
}

export default NavBar