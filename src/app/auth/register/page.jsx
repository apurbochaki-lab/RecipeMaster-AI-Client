'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Eye, EyeSlash, Envelope, Lock, ArrowRight, ShieldCheck, Person, Link as LinkIcon, StarFill } from "@gravity-ui/icons";
import Image from 'next/image';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        image: ''
    });

    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const { error } = await authClient.signUp.email({
            name: formData?.name,
            email: formData?.email,
            password: formData?.password,
            image: formData?.image
        });

        if (!error) {
            toast.success("Welcome Home...");
            router.push("/");
        } else {
            toast.error("Something went wrong! Try later");
        }
    };

    const handleGoogleRegister = async () => {
        const login = await authClient.signIn.social({
            provider: "google"
        });

        if (login?.data?.redirect) {
            toast.success("Logging in...");
        } else {
            toast.error("Something went wrong!");
        }
    };

    return (
        <div className="min-h-screen bg-[#FAF6F0] text-[#2D2D2D] flex antialiased selection:bg-[#E05320]/20">

            {/* ================= LEFT SIDE: UNIQUE LIGHT CULINARY ARTISTRY ================= */}
            <div className="hidden lg:flex lg:w-5/12 relative bg-[#F4EDE4] text-[#2D2D2D] flex-col justify-between p-12 overflow-hidden border-r border-[#E5DEC9]">
                {/* Visual Backdrop (Bright & Fresh Culinary Aesthetic) */}
                <div className="absolute inset-0 opacity-25 mix-blend-multiply">
                    <Image
                        src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1000&auto=format&fit=crop"
                        alt="Fresh Ingredients"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Branding Top */}
                {/* <div className="relative z-20">
                    <Link href="/" className="inline-block">
                        <h2 className="text-2xl font-black tracking-tight text-[#2D2D2D]">
                            <span className="text-[#E05320]">RecipeMaster</span> AI
                        </h2>
                    </Link>
                </div> */}

                {/* Main Premium Card Component inside Sidebar */}
                <div className="relative z-20 my-auto bg-white/80 backdrop-blur-md border border-white rounded-3xl p-8 shadow-xl shadow-[#E05320]/5 max-w-sm space-y-6">
                    <div className="flex gap-1 text-[#FFB800]">
                        <StarFill className="size-4" />
                        <StarFill className="size-4" />
                        <StarFill className="size-4" />
                        <StarFill className="size-4" />
                        <StarFill className="size-4" />
                    </div>
                    <blockquote className="text-xl font-bold italic text-[#2D2D2D] leading-relaxed">
                        &quot;This AI doesn&apos;t just give recipes, it understands flavors. It changed how I cook at home completely!&quot;
                    </blockquote>
                    <div className="flex items-center gap-3 pt-2">
                        <div className="w-10 h-10 rounded-full relative overflow-hidden bg-gray-200">
                            <Image
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                                alt="Chef User"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-[#2D2D2D]">Sarah Jenkins</h4>
                            <p className="text-xs text-[#6B7280] font-medium">Professional Pastry Chef</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Line */}
                <div className="relative z-20 border-t border-[#E5DEC9] pt-6 flex items-center justify-between text-xs font-semibold text-[#6B7280]">
                    <span className="tracking-wide">Elevate Your Everyday Meals</span>
                    <span>© RecipeMaster AI</span>
                </div>
            </div>

            {/* ================= RIGHT SIDE: FRESH MINIMALIST REGISTER FORM ================= */}
            <div className="w-full lg:w-7/12 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20 pt-28 pb-12 bg-[#FAF6F0] overflow-y-auto">
                <div className="w-full max-w-md space-y-6 sm:space-y-8">

                    {/* Header Block */}
                    <div className="text-center lg:text-left space-y-2">
                        <span className="inline-block bg-[#E05320]/10 text-[#E05320] text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-md">
                            Free Instant Access
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">Create Account</h3>
                        <p className="text-sm text-[#6B7280] font-medium">
                            Enter your details below to kickstart your AI cooking journey.
                        </p>
                    </div>

                    {/* Google Register Button */}
                    <button
                        type="button"
                        onClick={handleGoogleRegister}
                        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-[#F4EDE4] text-[#2D2D2D] border border-[#E5DEC9] rounded-2xl transition-all font-bold active:scale-[0.98] py-4 shadow-sm cursor-pointer text-sm sm:text-base hover:border-[#E05320]/40"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
                        </svg>
                        <span>Sign up with Google</span>
                    </button>

                    {/* Divider */}
                    <div className="relative flex py-1 items-center">
                        <div className="flex-grow border-t border-[#E5DEC9]"></div>
                        <span className="flex-shrink mx-4 text-xs font-bold text-[#8C826E] uppercase tracking-widest">Or setup email</span>
                        <div className="flex-grow border-t border-[#E5DEC9]"></div>
                    </div>

                    {/* Register Form */}
                    <form className="space-y-4 sm:space-y-5" onSubmit={handleFormSubmit}>

                        {/* Full Name */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider">
                                Full Name
                            </label>
                            <div className="relative">
                                <Person className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C826E] size-5" />
                                <input
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-[#E5DEC9] rounded-2xl py-3.5 pl-12 pr-4 text-[#2D2D2D] placeholder-gray-400 font-medium transition-all focus:outline-none focus:ring-4 focus:ring-[#E05320]/5 focus:border-[#E05320] text-sm sm:text-base"
                                    placeholder="Chef John Doe"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider">
                                Email Address
                            </label>
                            <div className="relative">
                                <Envelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C826E] size-5" />
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-[#E5DEC9] rounded-2xl py-3.5 pl-12 pr-4 text-[#2D2D2D] placeholder-gray-400 font-medium transition-all focus:outline-none focus:ring-4 focus:ring-[#E05320]/5 focus:border-[#E05320] text-sm sm:text-base"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C826E] size-5" />
                                <input
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-[#E5DEC9] rounded-2xl py-3.5 pl-12 pr-12 text-[#2D2D2D] placeholder-gray-400 font-medium transition-all focus:outline-none focus:ring-4 focus:ring-[#E05320]/5 focus:border-[#E05320] text-sm sm:text-base"
                                    placeholder="••••••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C826E] hover:text-[#E05320] focus:outline-none cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeSlash className="size-5" /> : <Eye className="size-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Profile Image URL */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider">
                                Profile Image URL <span className="text-gray-400 font-normal lowercase">(optional)</span>
                            </label>
                            <div className="relative">
                                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C826E] size-5" />
                                <input
                                    name="image"
                                    type="text"
                                    value={formData.image}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-[#E5DEC9] rounded-2xl py-3.5 pl-12 pr-4 text-[#2D2D2D] placeholder-gray-400 font-medium transition-all focus:outline-none focus:ring-4 focus:ring-[#E05320]/5 focus:border-[#E05320] text-sm sm:text-base"
                                    placeholder="https://images.com/your-avatar.jpg"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full bg-[#E05320] hover:bg-[#c24113] text-white font-bold py-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-[#E05320]/20 flex items-center justify-center gap-2 group cursor-pointer text-sm sm:text-base"
                            >
                                <span>Get Started Instantly</span>
                                <ArrowRight className="size-4 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>

                    {/* Footer Auth Switch Links */}
                    <div className="text-center pt-2">
                        <p className="text-sm text-[#6B7280] font-medium">
                            Already have an account?{' '}
                            <Link className="text-[#E05320] font-bold hover:underline" href="/auth/login">
                                Sign In here
                            </Link>
                        </p>
                    </div>

                    {/* Safety Footnotes */}
                    <div className="pt-6 border-t border-[#E5DEC9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold tracking-wider text-[#8C826E] uppercase">
                        <div className="flex items-center gap-4">
                            <a className="hover:text-[#E05320] transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-[#E05320] transition-colors" href="#">Terms of Use</a>
                        </div>
                        <div className="flex items-center gap-1 text-[#4CAF50]">
                            <ShieldCheck className="size-4" />
                            <span>100% Encrypted</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Global Typography Setup */}
            <style jsx global>{`
                body {
                    font-family: 'Outfit', sans-serif;
                    background-color: #FAF6F0;
                }
            `}</style>
        </div>
    );
}