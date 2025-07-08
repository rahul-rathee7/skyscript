import React from 'react'

const responsive_nav = () => {
  return (
    <div className='absolute z-[-1] top-0 left-0 w-full h-full'>
      <div className='bg-black/85 w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center'>
          <div className="w-full lg:block md:mx-auto md:w-auto" id="navbar-default">
            <ul className=" font-medium flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
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
      </div>
    </div>
  )
}

export default responsive_nav
