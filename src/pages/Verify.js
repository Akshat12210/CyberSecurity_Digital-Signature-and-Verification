import React from 'react'
import Navbar from '../components/Navbar'
import DigitalSignatureVerifier from '../components/DigitalSignatureVerifier'
import img_1 from '../assets/svg/img_1.svg';


const Verify = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className='font-bold text-center mt-10 text-2xl text-black'>Verify Signature</h1>
      </div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl space-y-8  shadow-lg p-10 rounded bg-white ">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src={img_1}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl mb-6 tracking-tight text-gray-900">
              Upload File
            </h2>
            {/* <h2 className="mt-6 text-center text-xl mb-6 tracking-tight text-gray-900">
              (Either upload seprate files or zip)
            </h2> */}
                <DigitalSignatureVerifier />
          </div>
        </div>
      </div >
      <div>
      </div>
    </>
  )
}

export default Verify