import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'


// Get the latest summary entry
export async function GET() {

  // Initialize Supabase client
  const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role key for server-side operations
  )




  try {
    const { data, error } = await supabase
      .from('summaries')
      .select('id, summary')
      .order('id', { ascending: false }) // Get the latest entry by highest ID
      .limit(1)

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    return NextResponse.json({ summary: data?.[0] || null }, { status: 200 })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}