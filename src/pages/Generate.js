import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import img_1 from '../assets/svg/img_1.svg';
import DigitalSignatureGenerator from '../components/DigitalSignatureGenerator';
const Generate = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className='font-bold text-center mt-10 text-2xl text-black'>Generate Signature</h1>
      </div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8  shadow-lg p-10 rounded bg-white ">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src={img_1}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl mb-6 tracking-tight text-gray-900">
              Upload File
            </h2>
            {/* <FileUploader /> */}
            <DigitalSignatureGenerator />
          </div>
        </div>
      </div >
    </>
  )
}

export default Generate