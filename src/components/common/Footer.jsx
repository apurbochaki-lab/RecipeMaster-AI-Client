import { ChefHat } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-border-light mt-auto">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              <ChefHat size={24} className="text-[#FF7A00]" />
              RecipeMaster AI
            </Link>
            <p className="text-secondary-text text-sm leading-relaxed">
              Discover, share, and manage recipes with nutrition insights and personalized recommendations. Making everyday cooking healthy and fun.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-bg flex items-center justify-center text-primary-text hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-bg flex items-center justify-center text-primary-text hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-bg flex items-center justify-center text-primary-text hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary-text mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-secondary-text hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/explore" className="text-secondary-text hover:text-primary transition-colors">Explore Recipes</Link></li>
              <li><Link href="/categories" className="text-secondary-text hover:text-primary transition-colors">Categories</Link></li>
              <li><Link href="/community" className="text-secondary-text hover:text-primary transition-colors">Community</Link></li>
              <li><Link href="/extras/about" className="text-secondary-text hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-primary-text mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/extras/faq" className="text-secondary-text hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/extras/contact-us" className="text-secondary-text hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/extras/privacy-policy" className="text-secondary-text hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/extras/terms-of-service" className="text-secondary-text hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-primary-text mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0 mt-0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span className="text-secondary-text">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0 mt-0.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span className="text-secondary-text">hello@recipemaster.ai</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0 mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-secondary-text">123 Culinary Avenue, Food City, FC 90210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-light text-center">
          <p className="text-secondary-text text-sm">
            &copy; {new Date().getFullYear()} RecipeMaster AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
