const events = [
  {
    title: 'Phoenix – Live in Concert',
    icon: '🎵',
    color: 'bg-violet-100 text-violet-700 border-violet-200',
    accent: 'bg-violet-500',
    tag: 'Fundraising Concert',
    description:
      'Led the organization of a large-scale musical concert as a major fundraising initiative. Managed end-to-end planning including sponsorships, ticketing systems, marketing, and operations.',
    highlight: 'Introduced a digital ticketing system with QR-based validation, ensuring smooth event execution and enhanced attendee experience.',
    image: null,
  },
  {
    title: 'Miracle Steps – Marathon & Walk',
    icon: '🏃',
    color: 'bg-teal-100 text-teal-700 border-teal-200',
    accent: 'bg-teal-500',
    tag: 'Community Event · Independence Square',
    description:
      'Organized a community-focused marathon and walk promoting health, unity, and social awareness. Coordinated logistics, participant management, and on-ground operations.',
    highlight: 'Ensured a safe and impactful event with strong public engagement at Independence Square.',
    image: null,
  },
  {
    title: 'Devthon – Web Development Competition',
    icon: '💻',
    color: 'bg-blue-100 text-blue-700 border-blue-200',
    accent: 'bg-blue-500',
    tag: 'Tech Competition',
    description:
      'Initiated and organized a competitive platform for young developers to showcase their web development skills. The event encouraged innovation, teamwork, and problem-solving.',
    highlight: 'Contributed to the growth of tech talent within the student community.',
    image: null,
  },
  {
    title: 'Verde Vogue – Upcycling Fashion Show',
    icon: '♻️',
    color: 'bg-green-100 text-green-700 border-green-200',
    accent: 'bg-green-500',
    tag: 'Sustainability · Fashion',
    description:
      'Conceptualized and executed a sustainable fashion show promoting environmental awareness through upcycling. Highlighted creativity and sustainability.',
    highlight: 'Encouraged participants to transform waste materials into fashionable designs.',
    image: null,
  },
  {
    title: 'Tharka – Mahesh Abeywickrama Memorial Debate & Oratory Competition',
    icon: '🎙️',
    color: 'bg-red-100 text-red-700 border-red-200',
    accent: 'bg-red-500',
    tag: 'Education · Helakuru Collaboration',
    description:
      'One of Sri Lanka\'s large-scale school-level debating initiatives, organized in collaboration with Helakuru to empower communication skills among school students.',
    highlight: 'Expanded the scope by introducing an oratory competition alongside the debate segment, nurturing confident and articulate young leaders across the country.',
    image: null,
  },
  {
    title: 'VR Wandhana',
    icon: '🥽',
    color: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    accent: 'bg-indigo-500',
    tag: 'Innovation · Elder Care · VR',
    description:
      'An innovative initiative utilizing virtual reality technology to provide elderly residents of a care home in Horana with the opportunity to virtually visit Sri Lanka\'s most sacred religious sites.',
    highlight: 'Bridged the gap between physical limitations and spiritual fulfillment, demonstrating how emerging technologies can enhance emotional well-being and quality of life for the elderly.',
    image: null,
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-medium tracking-widest uppercase text-sm mb-2">Leadership in action</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Key Events & Initiatives</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className={`h-1.5 ${event.accent}`} />
              <div className="p-6 flex flex-col flex-1">
                <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full border ${event.color} mb-3`}>
                  {event.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{event.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{event.description}</p>
                <p className="text-slate-500 text-sm leading-relaxed italic">"{event.highlight}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
