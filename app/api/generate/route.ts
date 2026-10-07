import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest){
  try{
    const body = await req.json()
    const FAL_KEY = process.env.FAL_KEY
    if(!FAL_KEY) return NextResponse.json({error:"Add FAL_KEY in Vercel Env Variables"}, {status:500})

    // Use Kling or LTX - best for realistic black boy walking to school
    const falRes = await fetch("https://queue.fal.run/fal-ai/kling-video/v2.1/master/text-to-video", {
      method:"POST",
      headers:{ "Authorization":`Key ${FAL_KEY}`, "Content-Type":"application/json" },
      body: JSON.stringify({
        prompt: body.prompt + ", high fidelity, Nollywood standard, hyper realistic, 4K, natural skin texture, school uniform, morning light",
        negative_prompt: body.negativePrompt || "cartoon, bunny, butterfly, blurry, waxy skin, distorted face",
        duration: String(Math.min(10, Math.ceil(body.seconds/5))),
        aspect_ratio: body.ratio?.includes("9:16")?"9:16":body.ratio?.includes("21:9")?"21:9":"16:9",
        cfg_scale: 0.5
      })
    })
    const data = await falRes.json()
    return NextResponse.json(data)
  }catch(e:any){
    return NextResponse.json({error:e.message},{status:500})
  }
}

export async function GET(req: NextRequest){
  const id = req.nextUrl.searchParams.get("id")
  const FAL_KEY = process.env.FAL_KEY
  if(!id) return NextResponse.json({error:"no id"})
  const r = await fetch(`https://queue.fal.run/fal-ai/kling-video/v2.1/master/requests/${id}`, {
    headers:{ "Authorization":`Key ${FAL_KEY}` }
  })
  const d = await r.json()
  return NextResponse.json(d)
}
