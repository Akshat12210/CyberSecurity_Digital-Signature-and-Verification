import React from 'react'
import Navbar from '../components/Navbar'
import Display from '../components/Display'
const Home = () => {
    return (
        <>
            <Navbar />
            <div className='mt-5'>
                <Display />
            </div>
        </>
    )
}

export default Home