export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-teal-400 font-medium tracking-widest uppercase text-sm mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Hi, I'm <span className="text-teal-400">Darshika</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-8">
            A final-year undergraduate in Transport Management and Logistics Engineering at the University of Moratuwa,
            with a genuine passion for supply chain innovation, digital transformation, and making a meaningful impact through leadership.
            I enjoy taking initiative, leading large-scale projects, and turning ideas into real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-slate-500 hover:border-teal-400 text-slate-300 hover:text-teal-400 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Profile image placeholder */}
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-slate-700 border-4 border-teal-500/40 flex flex-col items-center justify-center text-slate-400 shadow-2xl">
            <svg className="w-20 h-20 mb-2 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
            <span className="text-xs text-slate-500">Profile Photo</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}
