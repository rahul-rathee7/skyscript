'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import profile from '../../../public/assets/icons/account_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import Login from '../userAuth/Login'
import Signup from '../userAuth/Singup'
import Link from 'next/link'
import Responsive_nav from './responsive_nav'

const Navbar = () => {
  const [isLoginSection, setisLoginSection] = useState(false);
  const [isSignupSection, setisSignupSection] = useState(false);
  const [ismenu, setismenu] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full z-99'>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SkyScript
            </span>
          </Link>
          <button
            onClick={() => setismenu(!ismenu)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {
            ismenu && <Responsive_nav />
          }
          <div className="hidden w-full lg:block md:mx-auto md:w-auto" id="navbar-default">
            <ul className="font-medium flex items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  My Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Categories
                </a>
              </li>
              <li>
              </li>
            </ul>
          </div>
            <div className='hidden md:block'>
              <Image className='bg-black border-2 rounded-full p-1' src={profile} onClick={() => setisLoginSection(true)} alt='profile' width={35} height={35} />
            </div>
          <div className='hidden px-20 gap-2 md:flex'>
            <div>
              <Image className='bg-black border-2 rounded-full p-1' src={profile} onClick={() => setisLoginSection(true)} alt='profile' width={35} height={35} />
            </div>
            <div className='pr-20 hover:bg-red-500'>
              <Image className='bg-black border-2 rounded-full p-1' src={profile} onClick={() => setisLoginSection(true)} alt='profile' width={35} height={35} />
            </div>
          </div>
        </div>
      </nav>
      {
        isLoginSection &&
        <Login
          closeLogin={() => setisLoginSection(false)}
          openSignup={() => setisSignupSection(true)}
        />
      }
      {isSignupSection && (
        <Signup
          closeSignup={() => setisSignupSection(false)}
          openLogin={() => setisLoginSection(true)}
        />
      )}
    </div>
  )
}

export default Navbar
