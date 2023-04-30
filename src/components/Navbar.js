import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            {/* <div className='flex justify-stretch'>
        <div>
            Logo and Name
        </div>
        <div>
            Links
        </div>
    </div> */}
            <div className="sticky top-0 z-50 backdrop-blur-sm ">
                <div className="max-w-6xl  mx-auto  pt-8 md:pt-15">
                    <div className="flex  md:flex-row justify-between items-center">
                        {/* Logo / Home / Text */}
                        <div className="flex flex-col">
                            <Link to="/">
                                <a>
                                    <h1 className="font-semibold text-xl text-#181818">
                                        Cyber Security
                                    </h1>
                                </a>
                            </Link>
                        </div>



                        <div className="space-x-4 flex flex-row items-center">
                            <div className='hover:shadow-md'>
                                <Link to="/generate" className='bg-[#4fc4cf] text-white font-semibold py-2 px-4 rounded'>Generate Signature</Link>
                            </div>
                            <div className='hover:shadow-md'>
                                <Link to="/verify" className='bg-[#4fc4cf] text-white font-semibold py-2 px-4 rounded'>Verify Signature</Link>
                            </div>
                        </div>
                    </div>
                    <center>
                        <div className="space-x-8 block md:hidden mt-4">
                            <Link href="/about">
                                <a className={`text-base  ${true
                                    ? "text-gray-800 font-semibold "
                                    : "text-gray-600  font-normal"
                                    }`} >
                                    About
                                </a>
                            </Link>
                            <Link href="/projects">
                                <a className={`text-base  ${false
                                    ? "text-gray-800 font-semibold "
                                    : "text-gray-600  font-normal"
                                    }`}>
                                    Projects
                                </a>
                            </Link>
                            <Link href="/experience">
                                <a className={`text-base  ${false
                                    ? "text-gray-800 font-semibold "
                                    : "text-gray-600  font-normal"
                                    }`}>
                                    Experience
                                </a>
                            </Link>
                            <Link href="/contact">
                                <a className={`text-base  ${false
                                    ? "text-gray-800 font-semibold "
                                    : "text-gray-600  font-normal"
                                    }`}>
                                    Contact
                                </a>
                            </Link>
                        </div>
                    </center>
                </div>
            </div>


        </>
    )
}

export default Navbar