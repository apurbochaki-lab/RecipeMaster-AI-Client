import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="py-32 bg-neutral-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-text">About RecipeMaster AI</h1>
            <p className="text-lg text-secondary-text leading-relaxed">
              We are passionate about making cooking accessible, healthy, and enjoyable for everyone. Our AI-driven platform helps you discover recipes tailored to your taste and nutritional goals.
            </p>
            <p className="text-lg text-secondary-text leading-relaxed">
              Founded by a team of chefs and tech enthusiasts, we believe that good food brings people together.
            </p>
          </div>
          <div className="flex-1 relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80" alt="Our kitchen" fill className="object-cover" />
          </div>
        </div>

        {/* Premium Contact Us Email Box */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border-light text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-text mb-4">Want to work with us?</h2>
          <p className="text-secondary-text mb-8">Reach out to our team for partnerships, press, or general inquiries.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Your email address" className="px-6 py-3 rounded-full border border-border-light focus:outline-none focus:border-primary flex-grow max-w-md text-primary-text" />
            <button className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-md cursor-pointer">Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
