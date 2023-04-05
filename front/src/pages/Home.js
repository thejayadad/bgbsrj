import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='flex'>
        <Sidebar />
        <Category />

        </div>

    </div>
  )
}

export default Home