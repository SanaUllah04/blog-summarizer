'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function URLPage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)
    try {
      const res = await fetch(
        'https://sanaullah041.app.n8n.cloud/webhook-test/1a038fcf-7626-402f-b84d-02b92c2a1d9c', // ← your webhook URL
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ targetUrl: url }),
        }
      )
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="dark bg-gray-800 relative overflow-hidden h-screen">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="mt-30 container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-white font-black text-3xl">
            Blog <br />
            <div className="text-7xl">Snap</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 flex relative py-16">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span className="w-50 h-2 bg-white mb-12"></span>
        </div>
      </div>

      <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Enter Blog URL
              </h1>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  <div>
                    <div className="relative">
                      <input
                        type="url"
                        id="url"
                        name="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm bg-white-100 focus:ring-blue-500 shadow-sm"
                        placeholder="https://example.com"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                      Please include a valid URL
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-pink-500 text-white text-md mr-4 hover:bg-pink-400 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Scraping…' : 'Submit'}
                  </button>
                </div>
              </form>

              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
              {success && <p className="text-green-600 text-sm mt-2">Workflow triggered!</p>}
            </div>
          </div>
        </div>
      </main>
    </main>
  )
}
