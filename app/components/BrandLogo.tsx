export default function BrandLogo() {
  return (
    <div className="flex items-center gap-4">

      {/* logo */}
      <div className="relative flex items-center justify-center">

        {/* subtle glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl" />

        <img
          src="/logo.png"
          alt="MXB Logo"
          className="relative h-16 w-auto object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.18)]"
        />
      </div>

      {/* text */}
      <div className="leading-tight">

        <div className="text-2xl font-black tracking-[0.08em] text-white">
          MXB
        </div>

        <div className="relative mt-1 text-sm font-medium text-slate-400">
        Hausmeisterservice & Dienstleistung

          {/* subtle underline */}
          <div className="mt-2 h-px w-full bg-gradient-to-r from-cyan-400/50 via-cyan-300/10 to-transparent" />
        </div>

      </div>

    </div>
  )
}