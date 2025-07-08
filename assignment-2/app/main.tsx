'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={`${isDarkMode ? 'dark bg-gray-800' : 'bg-white'} relative overflow-hidden h-screen`}>
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
            Watch.ME
          </div>
          <div className="flex items-center">
            <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <Link href="#" className="py-2 px-6 flex hover:text-pink-500 transition-colors">
                Home
              </Link>
              <Link href="#" className="py-2 px-6 flex hover:text-pink-500 transition-colors">
                Watch
              </Link>
              <Link href="#" className="py-2 px-6 flex hover:text-pink-500 transition-colors">
                Product
              </Link>
              <Link href="#" className="py-2 px-6 flex hover:text-pink-500 transition-colors">
                Contact
              </Link>
              <Link href="#" className="py-2 px-6 flex hover:text-pink-500 transition-colors">
                Career
              </Link>
            </nav>
            <button 
              onClick={toggleDarkMode}
              className="hidden lg:block ml-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button className="lg:hidden flex flex-col ml-4" aria-label="Open menu">
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            </button>
          </div>
        </div>
      </header>
      
      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              Be on
              <span className="text-5xl sm:text-7xl">
                Time
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-4">
              Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
            </p>
            <div className="flex mt-8">
              <Link 
                href="#" 
                className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400 transition-colors"
              >
                Get started
              </Link>
              <Link 
                href="#" 
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md transition-colors"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img 
              src="https://www.tailwind-kit.com/images/object/10.png" 
              alt="Watch product"
              className="max-w-xs md:max-w-sm m-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}