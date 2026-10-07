"use client"
import { useState } from "react"

export default function Home() {
  const [prompt, setPrompt] = useState("From Roommates to Lovers, TATA & OSAS Nollywood drama")
  const [title, setTitle] = useState("FROM ROOMMATES TO LOVERS")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)

  const generate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setGenerated(true)
    }, 1800)
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-black text-black">T</div>
          <span className="font-black text-xl tracking-tight">TARGET<span className="text-yellow-400">AI</span></span>
        </div>
        <div className="text-[11px] bg-white/10 border border-white/10 px-3 py-1.5 rounded-full">A VIDEO GENERATING TOOL FOR ALL NIGERIANS</div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
        {/* Left - Controls */}
        <div>
          <h1 className="text-4xl md:text-5xl font-black leading-[0.95] tracking-tight">
            CREATE THAT<br/>
            <span className="text-yellow-400">VIRAL QUALITY</span><br/>
            YOU SHOWED ME
          </h1>
          <p className="text-zinc-400 mt-4 text-[15px] leading-6 max-w-lg">
            4K ultra sharp faces, vibrant Nollywood colors, dramatic expressions. No blur, no waxy AI look.
            Built for Facebook, YouTube, TikTok thumbnails.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <label className="text-xs text-zinc-400 font-bold tracking-widest">STORY PROMPT</label>
              <textarea
                value={prompt}
                onChange={e=>setPrompt(e.target.value)}
                className="mt-2 w-full bg-zinc-900 border border-white/10 rounded-2xl p-4 text-sm h-28 outline-none focus:border-yellow-400/50"
                placeholder="Describe your story..."
              />
            </div>

            <div>
              <label className="text-xs text-zinc-400 font-bold tracking-widest">BOLD TITLE (like your screenshot)</label>
              <input
                value={title}
                onChange={e=>setTitle(e.target.value)}
                className="mt-2 w-full bg-zinc-900 border border-white/10 rounded-2xl p-4 text-sm font-black outline-none focus:border-yellow-400/50 uppercase"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-3">
                <div className="text-[10px] text-zinc-500">RESOLUTION</div>
                <div className="font-bold text-sm mt-1">4K Ultra</div>
              </div>
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-3">
                <div className="text-[10px] text-zinc-500">FACES</div>
                <div className="font-bold text-sm mt-1">Crystal Clear</div>
              </div>
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-3">
                <div className="text-[10px] text-zinc-500">STYLE</div>
                <div className="font-bold text-sm mt-1">Nollywood Drama</div>
              </div>
            </div>

            <button
              onClick={generate}
              disabled={isGenerating}
              className="w-full bg-yellow-400 text-black font-black py-4 rounded-full text-[16px] hover:bg-yellow-300 disabled:opacity-50 transition"
            >
              {isGenerating? "GENERATING HIGH QUALITY..." : "GENERATE NOW"}
            </button>

            <p className="text-[11px] text-zinc-500 text-center">✓ Character Lock ✓ Vibrant Colors ✓ 3D Text Overlay ✓ No Blur</p>
          </div>
        </div>

        {/* Right - Preview */}
        <div className="bg-zinc-900/60 border border-white/10 rounded-[24px] p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-zinc-400">PREVIEW - Exactly the quality you want</span>
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">LIVE</span>
          </div>

          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a2a6b] via-[#102a5a] to-black relative flex items-center justify-center">
            {!generated? (
              <div className="text-zinc-500 text-sm">Your high-quality thumbnail will appear here</div>
            ) : (
              <div className="w-full h-full relative bg-[radial-gradient(ellipse_at_top,_#1e3a8a,_#050505)] p-3">
                <div className="w-full h-full rounded-xl overflow-hidden relative bg-black/40 border border-white/10 flex">
                  {/* Simulated faces area */}
                  <div className="flex-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                      <h2 className="font-black text-[22px] leading-none drop-shadow-[0_3px_0px_rgba(0,0,0,1)] tracking-tight">
                        <span className="text-yellow-300">{title.split(" ").slice(0,2).join(" ")}</span><br/>
                        <span className="text-[#ff5aa5]">{title.split(" ").slice(2).join(" ")}</span>
                      </h2>
                      <p className="text-[10px] mt-2 text-white/80">TATA & OSAS • Generated with TargetAI • 4K</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-[11px] text-white/30">
                      [ Your 4 sharp faces - no blur - will be here ]
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {generated && (
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="bg-white text-black font-bold py-3 rounded-full text-sm">Download 4K</button>
              <button className="bg-white/10 border border-white/10 font-bold py-3 rounded-full text-sm">Create Video</button>
            </div>
          )}

          <div className="mt-5 text-xs text-zinc-500 leading-5">
            This matches your screenshot: yellow + pink 3D text, dark blue cinematic background, sharp focus, drama expressions.
            Next we will connect real AI model to replace this preview.
          </div>
        </div>
      </main>
    </div>
  )
}
