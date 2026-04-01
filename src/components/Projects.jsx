const projects = [
  {
    title: 'AI-Assisted Decision Support Tool',
    tags: ['AI', 'Web App', 'Supply Chain', 'API Integration'],
    description:
      'A web-based AI-powered decision support tool designed for supply chain and logistics planners. Integrates Ranil Sugathadasa\'s 10 Lenses framework to provide structured, multi-perspective analysis for complex decision-making scenarios.',
    detail:
      'The tool generates insights across different dimensions, helping users evaluate decisions more effectively rather than relying solely on intuition. Delivers real-time, AI-generated decision support to improve clarity, reduce bias, and enhance strategic thinking.',
    link: 'https://tenlensesdecisionsupporttool.lovable.app',
    linkLabel: 'View Live Tool',
    icon: '🤖',
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Leo Bot – Telegram-Based Resource Platform',
    tags: ['Telegram Bot', 'Automation', 'Document Management'],
    description:
      'A Telegram bot designed for Leo members across Sri Lanka to easily access and download essential Leo documents and resources provided by the council.',
    detail:
      'Simplifies document distribution by enabling users to quickly search and retrieve materials through a user-friendly interface, eliminating the need for manual sharing. Improved accessibility and ensured members stay updated with the latest official resources.',
    link: null,
    icon: '🤝',
    color: 'from-orange-500 to-amber-500',
  },
    {
    title: 'ParkSmart – Smart Car Parking IoT Solution',
    tags: ['IoT', 'Smart City', 'Mobile App', 'Dynamic Pricing'],
    description:
      'An IoT-based smart parking system aimed at improving parking efficiency in urban environments such as shopping malls. Focuses on reducing congestion, minimizing search time, and enhancing user convenience through real-time parking availability.',
    detail:
      'Key features include dynamic slot allocation, real-time occupancy tracking using IoT sensors, and a mobile-based interface for navigation and booking. Explores dynamic pricing strategies and value-added services such as EV charging and car wash integration.',
    link: null,
    icon: '🅿️',
    color: 'from-teal-500 to-cyan-600',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-medium tracking-widest uppercase text-sm mb-2">What I've built</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Projects</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${project.color} p-6 flex items-center gap-4`}>
                <span className="text-4xl">{project.icon}</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{project.description}</p>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{project.detail}</p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm group"
                  >
                    {project.linkLabel}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
