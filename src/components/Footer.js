import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {

  return (
    <>
    <footer id='footer' className="z-20 min-h-32 h-fit py-10 px-2 bg-white relative font-classic text-sm sm-450:text-xl">
        <div className="grid md:grid-cols-3-auto w-full">
            <div>
                <h2 className="text-lg sm-450:text-2xl font-bold">Redirect Links</h2>
                <ul className="mx-5">
                    <li className='cursor-pointer'><Link to={`/`}>HomePage</Link></li>
                    <li className='cursor-pointer'><Link to={`/Menu`}>MenuPage</Link></li>
                    <li className='cursor-pointer'><Link to={`/About`}>AboutUsPage</Link></li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg sm-450:text-2xl font-bold text-right md:text-left">Contact Us</h2>
                <ul className="mx-5 text-right md:text-left">
                    <li>+91 9456790295</li>
                    <li>+91 9412129175</li>
                    <li>varunkh12345@gmail.com</li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg sm-450:text-2xl font-bold">Links to Credentials</h2>
                <ul className="mx-5 ">
                    <li>www.bakerheavans/googlemaps.com</li>
                    <li>www.bakerhaven/onlinemenu.com</li>
                    <li>www/bakershaven/thiswebsite.com</li>
                </ul>
            </div>
        </div>
        <h6 className="text-center italic absolute bottom-1 right-4 text-sm">@Copywrite-BakersHeaven 2023</h6>
    </footer>
    </>
  )
}
