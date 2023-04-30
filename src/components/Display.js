import { Link } from 'react-router-dom'
import img_7 from '../assets/images/img_7.png'



export default function Display() {
    return (
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-10 px-4 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
                <div className="sm:max-w-lg">
                    <h1 className="font text-4xl font-bold tracking-normal text-gray-900 sm:text-6xl">
                        Digital Signature and Verification
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                        A digital signature is a way to verify the authenticity and integrity of a digital document or messag
                    </p>
                </div>
                <Link
                    to="/generate"
                    type='button'
                    className='mt-5 py-2.5 px-3.5  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'
                >
                    Get Started
                </Link>
            </div>
            <div className="grid gap-4 sm:gap-6 lg:gap-8">
                <img
                    src={img_7}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100"
                />
            </div>
        </div>
    )
}
