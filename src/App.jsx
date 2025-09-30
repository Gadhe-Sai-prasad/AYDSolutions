import React, { useState } from 'react'
import Card from './components/Card'
import Person from './components/Person'


export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [demoEmail, setDemoEmail] = useState('')


  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }
  const submitForm = (e) => {
    e.preventDefault()
    const safeMessage = form.message || ''
    const safeName = form.name || ''
    const safeEmail = form.email || ''
    const safeCompany = form.company || ''
    const subject = form.subject || 'Business Inquiry'
    const body = encodeURIComponent(`${safeMessage}\n\nFrom: ${safeName} (${safeEmail})\nCompany: ${safeCompany}`)
    window.location.href = `mailto:contact@aydsolutions.com?subject=${encodeURIComponent(subject)}&body=${body}`
  }
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold">AY</div>
            <div>
              <div className="font-bold">AYD Solutions</div>
              <div className="text-xs text-gray-500">Technology · CX · BPO</div>
            </div>
          </div>


          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#industries" className="hover:text-indigo-600">Industries</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#careers" className="hover:text-indigo-600">Careers</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="#contact" className="text-xs px-3 py-1 border rounded">Request a Demo</a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMobileOpen((s) => !s)} aria-label="Toggle menu" className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>


        {mobileOpen && (
          <div className="md:hidden border-t">
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#industries">Industries</a>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </header>
      <main id="home">
        <section className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">AYD Solutions</h1>
              <p className="mt-4 text-lg opacity-90">Technology-enabled CX & BPO services that combine nearly two decades of operational leadership with automation, analytics, and responsible governance.</p>


              <div className="mt-6 flex gap-4">
                <a href="#services" className="bg-white text-indigo-600 px-5 py-3 rounded shadow font-semibold">Our Services</a>
                <a href="#contact" className="border border-white px-5 py-3 rounded">Request a Demo</a>
              </div>


              <div className="mt-6 text-sm opacity-90">
                <strong>Headquarters:</strong> [Madhapur, India] &nbsp;|&nbsp; <strong>Email:</strong> Aydsolutions@aydsol.com
              </div>
            </div>
            <div className="rounded-lg p-6 bg-white/10">
              <div className="p-6 rounded bg-white/5">
                <h3 className="font-semibold">Why clients choose AYD</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>Scalable & compliant CX solutions (GDPR, HIPAA)</li>
                  <li>Automation-first approach with human-centric delivery</li>
                  <li>Industry experience across telecom, healthcare, BFSI, retail</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="mt-2 text-gray-600">Integrated CX, BPO and Digital Transformation services tailored to regulated and high-compliance sectors.</p>


          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card title="Omnichannel Contact Center" subtitle="Voice, chat, email, messaging & social platforms">Customer engagement across channels with performance analytics and quality assurance.</Card>
            <Card title="Finance & Accounting" subtitle="AP/AR, payroll, reconciliation">End-to-end finance & accounting operations with reporting and compliance.</Card>
            <Card title="Automation & AI" subtitle="RPA, chatbots, ML">Process automation and intelligent assistants that reduce cost and improve accuracy.</Card>
            <Card title="Customer Onboarding & KYC" subtitle="Secure, compliant onboarding">Secure onboarding for BFSI and regulated industries with audit-ready workflows.</Card>
            <Card title="Analytics & BI" subtitle="Predictive analytics & reporting">Actionable insights and dashboards to drive operational decisions.</Card>
            <Card title="Operational Consulting" subtitle="CX Strategy, Change Management">Strategy, process re-engineering and change programs to sustain transformation.</Card>
          </div>
        </section>
        <section id="industries" className="bg-gray-50 py-14 border-t">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold">Industries Served</h2>
            <p className="mt-2 text-gray-600">We deliver domain-specific solutions across a wide range of sectors.</p>


            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {["Telecom & Utilities", "Healthcare & Life Sciences", "Banking, Financial Services & Insurance (BFSI)", "Retail & Consumer Goods", "Travel & Hospitality", "Technology & IT Services", "Manufacturing & Logistics", "Public Sector"].map((item) => (
                <div key={item} className="p-4 bg-white rounded shadow-sm">
                  <h4 className="font-semibold">{item}</h4>
                  <p className="mt-2 text-sm text-gray-600">Tailored operations, compliance and CX for {item}.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold">About AYD Solutions</h2>
              <p className="mt-4 text-gray-700">AYD Solutions was established in 2023, built on nearly two decades of deep industry experience and operational leadership in customer experience (CX) and business process outsourcing (BPO). Our management team has partnered with major brands across telecom, healthcare, financial services, and retail, delivering scalable, secure, and compliant solutions.</p>


              <h3 className="mt-6 font-semibold">Vision</h3>
              <p className="text-gray-600">To be a globally respected partner, empowering organizations with technology-enabled, customer-centered operations that build market leadership.</p>


              <h3 className="mt-4 font-semibold">Mission</h3>
              <p className="text-gray-600">To deliver measurable operational value by combining deep domain expertise, advanced technology, and responsible governance for sustained client success.</p>


              <h3 className="mt-6 font-semibold">Core Values</h3>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Diversity & Inclusion</li>
                <li>Collaboration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Leadership Team</h3>
              <div className="mt-4 space-y-4">
                <Person name="N V Shiva Kumar" title="Founder & Director" bio="20+ years of CX and BPO leadership with strategic growth focus." />
                <Person name="Uday Kumar" title="CEO & Director" bio="Operational strategist focused on technology enablement and scalable delivery." />
              </div>


              <div className="mt-6">
                <h4 className="font-semibold">Corporate Social Responsibility</h4>
                <p className="text-gray-600 mt-2">We invest in digital literacy initiatives, promote workplace diversity, and pursue sustainable business practices.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="careers" className="bg-white py-14 border-t">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold">Careers</h2>
            <p className="mt-2 text-gray-600">A progressive, inclusive workplace where innovation drives growth. Explore roles across operations, technology, HR, finance and leadership.</p>


            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded border">
                <h4 className="font-semibold">Current Openings</h4>
                <p className="mt-2 text-sm text-gray-600"></p>
              </div>


              <div className="p-6 rounded border">
                <h4 className="font-semibold">Internship & Training Programs</h4>
                <p className="mt-2 text-sm text-gray-600">Structured programs for skill building and new talent pipeline entry.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold">Contact Us</h2>
               


              <div className="mt-6 space-y-4">
                <div>
                  
                  <p className="text-sm text-gray-600 mt-1">Email: contact@aydsolutions.com</p>
                  <p className="text-sm text-gray-600">Phone: +91-9000372586,+91-8686210162</p>
                </div>


                <div>
                  <h4 className="font-semibold">Business Inquiry</h4>
                  <p className="text-sm text-gray-600 mt-1">Use the contact form to send a message or request a demo.</p>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={submitForm} className="space-y-4 bg-white p-6 rounded shadow">
                <div className="grid md:grid-cols-2 gap-4">
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" />
                  <input required name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
                </div>


                <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="w-full border p-2 rounded" />
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="w-full border p-2 rounded" />
                <textarea required name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Message" className="w-full border p-2 rounded" />


                <div className="flex items-center justify-between">
                  <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Send Message</button>
                  <button type="button" onClick={() => setForm({ name: '', email: '', company: '', subject: '', message: '' })} className="text-sm text-gray-500">Reset</button>
                </div>
              </form>
            </div>
          </div>
        </section>
         
      </main>


      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-bold">AYD Solutions</div>
            <p className="text-sm text-gray-600 mt-2">Technology-enabled CX & BPO services for regulated industries.</p>
            <div className="mt-4 text-sm text-gray-500">© AYD Solutions. All rights reserved.</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Company</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#legal">Legal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Resources</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li><a href="#services">Services</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Stay updated</h4>
            <p className="text-sm text-gray-600 mt-2">Subscribe to our newsletter for updates and insights.</p>
            <form className="mt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Subscribed: ' + demoEmail); setDemoEmail('') }}>
              <input value={demoEmail} onChange={(e) => setDemoEmail(e.target.value)} placeholder="Your email" className="border p-2 rounded w-full" />
              <button className="px-3 py-2 bg-indigo-600 text-white rounded">Subscribe</button>
            </form>


             
          </div>
        </div>
      </footer>
    </div>
  )
}