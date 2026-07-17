export default function ContactUsPage() {
  return (
    <div className="py-32 bg-neutral-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-text mb-6">Contact Us</h1>
          <p className="text-lg text-secondary-text">We'd love to hear from you. Please fill out the form below or reach out via email.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-border-light flex flex-col md:flex-row">
          <div className="bg-primary p-10 text-white md:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="mt-1">📍</span>
                  <span>123 Culinary Avenue, Food City, FC 90210</span>
                </li>
                <li className="flex items-center gap-4">
                  <span>📞</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-4">
                  <span>✉️</span>
                  <span>hello@recipemaster.ai</span>
                </li>
              </ul>
            </div>
            <div className="mt-12 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/40 font-bold text-sm">FB</div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/40 font-bold text-sm">TW</div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/40 font-bold text-sm">IG</div>
            </div>
          </div>
          
          <div className="p-10 md:w-2/3">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-text mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-primary-text" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-text mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-primary-text" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-text mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-primary-text" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-text mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-primary-text" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-md cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
