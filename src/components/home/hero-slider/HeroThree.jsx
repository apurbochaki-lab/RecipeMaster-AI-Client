import Image from "next/image";
import Link from "next/link";

export default function HeroThree() {
    return (
        <section className="relative bg-neutral-bg overflow-hidden py-24 md:py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6 text-center md:text-left z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text leading-tight">
                        Connect, Cook & <br className="hidden md:block" />
                        <span className="text-primary">Inspire Others</span>
                    </h1>
                    <p className="text-lg md:text-xl text-secondary-text max-w-2xl mx-auto md:mx-0">
                        Join a vibrant community of home cooks and professional chefs. Share your secret recipes and culinary achievements with the world.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mt-8">
                        <Link
                            href="/recipes"
                            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                        >
                            Yummy Recipes
                        </Link>
                        <Link
                            href="/extras/about"
                            className="w-full sm:w-auto px-8 py-3.5 bg-white text-primary-text border border-border-light font-medium rounded-full hover:bg-neutral-50 transition-colors text-center"
                        >
                            Join with us
                        </Link>
                    </div>
                </div>
                <div className="flex-1 relative w-full max-w-lg mx-auto md:max-w-none">
                    <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop"
                            alt="Chefs cooking in kitchen"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-primary-text">50k+</p>
                            <p className="text-xs text-secondary-text">Active Cooks</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}