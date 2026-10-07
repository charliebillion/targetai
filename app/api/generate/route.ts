import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest){
  const { prompt, negativePrompt, seconds, quality, ratio, camera } = await req.json()
  
  const FAL_KEY = process.env.FAL_KEY
  if(!FAL_KEY) return NextResponse.json({error:"FAL_KEY missing in Vercel env"}, {status:500})

  // Use fal.ai queue - prevents Vercel timeout
  const res = await fetch("https://queue.fal.run/fal-ai/ltx-video-13b-distilled", {
    method:"POST",
    headers:{ "Authorization":`Key ${FAL_KEY}`, "Content-Type":"application/json" },
    body: JSON.stringify({
      prompt: prompt,
      negative_prompt: negativePrompt,
      num_frames: Math.min(121, seconds*8), // fal uses frames
      aspect_ratio: ratio.includes("16:9")?"16:9":ratio.includes("9:16")?"9:16":"1:1",
    })
  })
  const data = await res.json()
  // fal returns request_id and response_url - frontend polls this
  return NextResponse.json(data)
}

export async function GET(req: NextRequest){
  const requestId = req.nextUrl.searchParams.get("id")
  const FAL_KEY = process.env.FAL_KEY
  const statusRes = await fetch(`https://queue.fal.run/fal-ai/ltx-video-13b-distilled/requests/${requestId}/status`, {
    headers:{ "Authorization":`Key ${FAL_KEY}` }
  })
  const statusData = await statusRes.json()
  return NextResponse.json(statusData)
}
