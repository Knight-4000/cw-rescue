import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsVimeo } from 'react-icons/bs';

export default function Footer() {
  return (

    <div className="container mx-auto ">
      <h2 className="text-center follow-us">Follow Us</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 container mx-auto px-4">
          <div className="flex justify-center relative p-6 text-center">
              <FaFacebook className='facebook-icon cursor-pointer'/>
            </div>
            <div className="flex justify-center relative p-6 text-center">
              <BsTwitter className='twitter-icon cursor-pointer'/>
            </div>
            <div className="flex justify-center relative p-6 text-center">
              <BsVimeo className='vimeo-icon cursor-pointer'/>
            </div>
          </div>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-6 sm:grid-cols-1 container mx-auto px-4">
            <div className="flex justify-center relative p-6 text-center">
            <h1 className='text-center footer-banner'>Coldwater Rescue</h1>
          </div>
          <div className="flex justify-center relative p-6 text-center">
            <a href="/cats" className="footer-links mt-4">Cats</a>
          </div>
          <div className="flex justify-center relative p-6 text-center">
            <a href="/dogs" className="footer-links mt-4">Dogs</a>
          </div>
          <div className="flex justify-center relative p-6 text-center">
            <a href="/others" className="footer-links mt-4">Other</a>
          </div>
          <div className="flex justify-center relative p-6 text-center">
            <a href="/mission" className="footer-links mt-4">Mission</a>
          </div>
          <div className="flex justify-center relative p-6 text-center">
            <a href="/needed" className="footer-links mt-4">Needed</a>
          </div>
        </div>
          <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 container mx-auto px-4">
            <div className="flex justify-center relative p-6 text-center">
             <p className='footer-contact'>Address:</p>
             <p className='footer-sublinks'>4242 Franklin Highway, Coldwater PA 17692</p>
          </div>
          <div className="flex justify-center relative p-6 text-center">
            <p className='footer-contact'>Phone:</p>
            <p className='footer-sublinks'>(444)444-4444</p>
          </div>
        </div>
      </div>
  )
}
