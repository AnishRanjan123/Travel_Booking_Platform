import React from 'react'

export default function Header ({ searchTerm, setSearchTerm }) {
  return (
    <>
       <nav className="bg-white border-b border-gray-200 dark:bg-gray-100">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              Traval Delight
            </span>
          </a>

          {/* Right Side */}
          <div className="flex items-center gap-3 md:order-2">
            {/* Refined Search Bar */}
            <form className="relative w-64 md:w-72">
             <input
                   type="search"
                   id="default-search"
                   className="block w-full p-2.5 ps-10 text-sm text-black 
                      rounded-2xl bg-gray-50 
                      focus:outline-none focus:ring-0
                      placeholder-gray-400
                      dark:bg-gray-200 dark:placeholder-gray-500 dark:text-black shadow-sm"
                   placeholder="Search by name or place..."
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
               />

              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </form>
            <button
            
              type="button"
              className="text-black bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 
              font-medium rounded-2xl text-sm px-5 py-2.5 transition-all duration-200 
              shadow-md hover:shadow-lg dark:bg-amber-400 dark:hover:bg-blue-600 
              dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      </nav>

    </>
  )
}
