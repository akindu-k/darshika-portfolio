const highlights = [
  { icon: '🎓', label: 'University of Moratuwa', sub: 'Transport Management & Logistics Engineering' },
  { icon: '🦁', label: 'Leo Club President', sub: 'Large-scale community & development projects' },
  { icon: '🚀', label: 'PickMe Internship', sub: 'Supply-demand dynamics & operational strategy' },
  { icon: '⚙️', label: 'Tech Interests', sub: 'ERP, SAP, Maritime & Aviation Operations' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-medium tracking-widest uppercase text-sm mb-2">Get to know me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About Me</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-80 bg-slate-100 rounded-2xl border-2 border-slate-200 flex flex-col items-center justify-center text-slate-400 shadow-lg">
                <svg className="w-24 h-24 mb-3 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
                <span className="text-sm text-slate-400">About Photo</span>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-72 h-80 border-2 border-teal-400 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-slate-600 leading-relaxed mb-4">
              I am a final year undergraduate at the <span className="font-semibold text-slate-800">University of Moratuwa, Faculty of Engineering</span>, specializing in Transport Management and Logistics Engineering. I am deeply passionate about supply chain and logistics systems, with a particular interest in maritime and aviation operations, project management, and emerging technologies such as ERP and SAP solutions.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Beyond academics, I have developed strong leadership, organizational, and strategic thinking skills through my journey in the <span className="font-semibold text-slate-800">Leo Club movement</span>. Serving as the President of Leo Club of University of Moratuwa, I led a dynamic team to execute large-scale community service and development projects, managing significant budgets and coordinating multidisciplinary teams.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              My internship at <span className="font-semibold text-slate-800">PickMe</span> enhanced my understanding of supply-demand dynamics, operational strategy, and data-driven problem solving in the mobility and logistics sector. I aim to build a career contributing to innovative and sustainable solutions on a global scale.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-2xl">{h.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{h.label}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{h.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
