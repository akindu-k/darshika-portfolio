import heroImg from '../assets/hero.jpeg'
import darshikaCV from '../assets/darshika_cv.pdf'

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = darshikaCV;
    link.download = 'Darshika_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
              href="#contact"
              className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-center"
            >
              Get in Touch
            </a>
            <button
              onClick={handleDownload}
              className="border border-slate-500 hover:border-teal-400 text-slate-300 hover:text-teal-400 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </button>
          </div>
        </div>

        {/* Profile image placeholder */}
        <div className="flex-shrink-0">
          <img
            src={heroImg}
            alt="Darshika"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-teal-500/40 shadow-2xl"
          />
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
