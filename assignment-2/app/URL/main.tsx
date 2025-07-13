'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface Summary {
  id: string
  summary: string
  created_at: string
  // Add other fields as needed based on your Supabase schema
}

export default function URLPage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [summary, setSummary] = useState<Summary | null>(null)
  const [retrieving, setRetrieving] = useState(false)

  const retrieveLatestSummary = async (retryCount = 0): Promise<Summary | null> => {
  const maxRetries = 10
  const retryDelay = 15000

  try {
    const response = await fetch('/api/get-latest-summary') // ✅ GET request with no body

    if (!response.ok) {
      throw new Error(`Failed to fetch summary: ${response.status}`)
    }

    const data = await response.json()

    if (data.summary) {
      return data.summary
    } else if (retryCount < maxRetries) {
      console.log(`Summary not ready yet, retrying in ${retryDelay / 1000} seconds... (${retryCount + 1}/${maxRetries})`)
      await new Promise(resolve => setTimeout(resolve, retryDelay))
      return retrieveLatestSummary(retryCount + 1)
    } else {
      throw new Error('Summary not found after maximum retries')
    }
  } catch (error) {
    if (retryCount < maxRetries) {
      console.log(`Error retrieving summary, retrying... (${retryCount + 1}/${maxRetries})`)
      await new Promise(resolve => setTimeout(resolve, retryDelay))
      return retrieveLatestSummary(retryCount + 1)
    }
    throw error
  }
}


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)
    setSummary(null)
    
    try {
      // Step 1: Trigger the n8n workflow
      const res = await fetch(
        'https://sanaullah041.app.n8n.cloud/webhook-test/1a038fcf-7626-402f-b84d-02b92c2a1d9c',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ targetUrl: url }),
        }
      )
      
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setSuccess(true)
      
      // Step 2: Wait a bit and then start retrieving the summary
      setRetrieving(true)
      console.log('Workflow triggered, waiting for summary...')
      
      // Wait 30 seconds before first attempt (adjust based on your workflow timing)
      await new Promise(resolve => setTimeout(resolve, 30000))
      
      const summaryResult = await retrieveLatestSummary()
      
      if (summaryResult) {
        setSummary(summaryResult)
        console.log('Summary retrieved successfully!')
      }
      
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
      console.error('Error:', err)
    } finally {
      setLoading(false)
      setRetrieving(false)
    }
  }

  return (
    <main className="dark bg-gray-800 relative overflow-hidden min-h-screen">
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

      <main id="content" role="main" className="w-full max-w-4xl mx-auto p-6">
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
                        aria-describedby="url-error"
                      />
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="url-error">
                      Please include a valid URL
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || retrieving}
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-pink-500 text-white text-md mr-4 hover:bg-pink-400 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Scraping…' : retrieving ? 'Retrieving Summary…' : 'Submit'}
                  </button>
                </div>
              </form>

              {error && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}
              
              {success && !summary && !retrieving && (
                <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                  Workflow triggered successfully!
                </div>
              )}

              {retrieving && (
                <div className="mt-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded">
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-700 mr-2"></div>
                    Waiting for summary to be generated... This may take a few minutes.
                  </div>
                </div>
              )}

              {summary && (
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    Summary Generated
                  </h2>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Submitted URL:</strong> {url}
                    </p>
                    <div className="mt-3">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Summary:
                      </p>
                      <div className="p-3 bg-white dark:bg-gray-800 rounded border">
                        <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                          {summary.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </main>
  )
}