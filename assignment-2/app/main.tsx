'use client'

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="dark bg-gray-800 relative overflow-hidden h-screen">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-white font-black text-3xl">
            BlogSnap
          </div> 
        </div>
      </header>
      
      <div className="bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-white mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-7xl font-black flex flex-col leading-none text-white">
              Read Less, 
              <span className="text-5xl sm:text-6xl">
                Know More
              </span>
            </h1>
            <p className="text-sm sm:text-base text-white mt-4">
              Effortlessly turn any blog URL into a clear, concise summary with an instant Urdu translation. Designed for fast insights and simplified reading in just one click.
            </p>
            <div className="flex mt-8">
              <Link 
                href="/URL" 
                className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400 transition-colors"
              >
                
                Get started

              </Link>
            </div>
          </div>
          <div className="flex items-start ">
            <img 
              src="/blog_new.png" 
              alt="blog"
              className="ml-[+390px] mt-[-90px]"

            />
          </div>

        </div>
      </div>
    </main>
  );
}