const awards = [
  {
    title: 'Winner – Best New Camper',
    event: 'Annual District Youth Camp 2023/24',
    venue: 'Kuda Oya Army Regiment Camp',
    year: '2024',
    icon: '🏆',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    title: 'Winner – Most Outstanding New Leo',
    event: 'A2 Conference 2024',
    venue: '',
    year: '2024',
    icon: '🥇',
    color: 'from-teal-400 to-cyan-500',
  },
  {
    title: 'Winner – Most Outstanding Vice President',
    event: 'A2 Conference 2024',
    venue: '',
    year: '2024',
    icon: '🌟',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Winner – Best Camper',
    event: 'Annual District Youth Camp 2024/25',
    venue: 'Rajaskanda State, Galle',
    year: '2025',
    icon: '🏕️',
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Winner – Most Outstanding Club President',
    event: 'A2 Conference 2025',
    venue: '',
    year: '2025',
    icon: '👑',
    color: 'from-purple-400 to-violet-500',
  },
  {
    title: '1st Runner-Up – Most Outstanding Club President in Sri Lanka',
    event: 'Multiple District Conference 2025',
    venue: '',
    year: '2025',
    icon: '🥈',
    color: 'from-rose-400 to-pink-500',
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-medium tracking-widest uppercase text-sm mb-2">Recognition</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Awards & Achievements</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm">
            A recognition of leadership, commitment, and impact through continuous excellence in both service and performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div
              key={award.title}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${award.color}`} />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center text-2xl shadow-sm flex-shrink-0`}>
                    {award.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{award.year}</span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1 leading-snug">{award.title}</h3>
                    <p className="text-slate-500 text-xs mt-1">{award.event}</p>
                    {award.venue && (
                      <p className="text-slate-400 text-xs mt-0.5 italic">{award.venue}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
