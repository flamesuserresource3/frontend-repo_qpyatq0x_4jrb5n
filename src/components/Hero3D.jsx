import Spline from "@splinetool/react-spline";

export default function Hero3D() {
  return (
    <section id="top" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-gradient-to-b from-white to-white dark:from-black dark:to-zinc-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* soft gradient overlay for readability - does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent dark:from-black/70 dark:via-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 dark:bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for 2025 projects
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            UI/UX Designer crafting playful, modern product experiences
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            I design interactive interfaces that balance aesthetics and clarity. From brand-new ideas to redesigns, I help teams ship faster with confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white dark:bg-white dark:text-black px-6 py-3 font-medium shadow hover:opacity-90 transition"
            >
              Book a discovery call
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg bg-white/70 dark:bg-white/10 backdrop-blur text-gray-900 dark:text-white px-6 py-3 font-medium border border-gray-200/60 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/20 transition"
            >
              View selected work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
