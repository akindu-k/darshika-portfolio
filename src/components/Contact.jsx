import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'darshikaprabhashwara@gmail.com',
    href: 'mailto:darshikaprabhashwara@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+94 78 908 4354',
    href: 'tel:+94789084354',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Darshika Prabhashwara',
    href: 'https://www.linkedin.com/in/darshika-prabhashwara-15a76423b',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Moratuwa, Sri Lanka',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-400 font-medium tracking-widest uppercase text-sm mb-2">Let's connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in Touch</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Have a project in mind, want to collaborate, or just say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-5 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-slate-200 hover:text-teal-400 transition-colors text-sm font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-200 text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative quote */}
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <p className="text-slate-300 text-sm italic leading-relaxed">
                "With a strong analytical mindset, I like solving real-world challenges and continuously learning through hands-on experience."
              </p>
              <p className="text-teal-400 text-xs font-semibold mt-3">— Darshika</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 text-teal-400 hover:text-teal-300 text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-teal-500 hover:bg-teal-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  {!loading && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
