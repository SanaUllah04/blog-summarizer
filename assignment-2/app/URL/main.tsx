'use client'

import React from 'react'
import Link from 'next/link'

export default function URLPage() {
  return (
    <main className="dark bg-gray-800 relative overflow-hidden h-screen">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-white font-black text-3xl">
            BlogSnap
          </div>
        </div>
      </header>

      <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Enter Blog URL
              </h1>
            </div>

            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        id="url"
                        name="url"
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm bg-white-100 focus:ring-blue-500 shadow-sm"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                      Please include a valid email address so we can get back to you
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

       
      </main>
    </main>
  )
}
