'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Eye, EyeSlash, Envelope, Lock, ArrowRight, ShieldCheck } from "@gravity-ui/icons";
import Image from 'next/image';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const { error } = await authClient.signIn.email({
            email: formData?.email,
            password: formData?.password,
            callbackURL: "/"
        });

        if (!error) {
            toast.success("Login successful");
        } else {
            toast.error("Invalid email or password");
        }
    };

    const handleGoogleLogin = async () => {
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
        <div className="min-h-screen bg-[#FFF8F0] text-[#2D2D2D] flex antialiased selection:bg-[#FF7A00]/20">
            {/* Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />

            {/* ================= LEFT SIDE: PREMIUM IMAGERY & BRANDING ================= */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-[#2D2D2D] text-white flex-col justify-between p-12 overflow-hidden">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <Image 
                        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop" 
                        alt="Culinary Background"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/60 to-transparent z-10" />

                {/* Top Logo */}
                {/* <div className="relative z-20">
                    <Link href="/" className="inline-block">
                        <h2 className="text-2xl font-black tracking-tight text-white">
                            <span className="text-[#FF7A00]">RecipeMaster</span> AI
                        </h2>
                    </Link>
                </div> */}

                {/* Content / Heading */}
                <div className="relative z-20 max-w-md space-y-4 my-auto">
                    <span className="bg-[#FF7A00] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        AI Culinary Companion
                    </span>
                    <h1 className="text-4xl xl:text-5xl font-black tracking-tight leading-tight">
                        Unlock the Secret to <span className="text-[#FF7A00]">Perfect Cookings</span>.
                    </h1>
                    <p className="text-gray-300 text-base leading-relaxed">
                        Discover hyper-personalized recipes, smart meal plans, and intelligent culinary advice tailored just for your taste.
                    </p>
                </div>

                {/* Bottom Stats / Footer */}
                <div className="relative z-20 flex items-center justify-between border-t border-white/10 pt-6">
                    <div className="flex gap-8">
                        <div>
                            <p className="text-2xl font-black text-[#FF7A00]">10k+</p>
                            <p className="text-xs text-gray-400 font-medium">AI Recipes Generated</p>
                        </div>
                        <div>
                            <p className="text-2xl font-black text-[#4CAF50]">4.9★</p>
                            <p className="text-xs text-gray-400 font-medium">Chef Ratings</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400">© RecipeMaster AI</p>
                </div>
            </div>

            {/* ================= RIGHT SIDE: LOGIN FORM ================= */}
            {/* pt-24 বা pt-28 ক্লাসটি মোবাইল ডিভাইসে ফিক্সড ন্যাভবারের নিচে ফর্মটিকে নামিয়ে আনবে */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20 pt-28 pb-12 bg-[#FFF8F0] overflow-y-auto">
                <div className="w-full max-w-md space-y-6 sm:space-y-8 bg-white border border-[#E5E7EB] rounded-3xl shadow-xl shadow-[#FF7A00]/5 p-6 sm:p-10">
                    
                    {/* Header */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-2xl sm:text-3xl font-black text-[#2D2D2D] tracking-tight">Welcome Back</h3>
                        <p className="text-sm text-[#6B7280] mt-1.5 font-medium">
                            Log in to cook something extraordinary today.
                        </p>
                    </div>

                    {/* Google Login Button */}
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-[#FFF8F0] text-[#2D2D2D] border border-[#E5E7EB] rounded-xl transition-all font-bold active:scale-[0.98] py-3.5 shadow-sm hover:border-[#FF7A00]/40 cursor-pointer text-sm sm:text-base"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
                        </svg>
                        <span>Continue with Google</span>
                    </button>

                    {/* Divider Line */}
                    <div className="relative flex py-1 items-center">
                        <div className="flex-grow border-t border-[#E5E7EB]"></div>
                        <span className="flex-shrink mx-3 text-[11px] font-bold text-[#6B7280] uppercase tracking-widest">Or login with email</span>
                        <div className="flex-grow border-t border-[#E5E7EB]"></div>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-4 sm:space-y-5" onSubmit={handleLogin}>
                        {/* Email Input Field */}
                        <div className="space-y-1.5">
                            <label className="block text-[11px] font-bold text-[#2D2D2D] uppercase tracking-wider">
                                Email Address
                            </label>
                            <div className="relative">
                                <Envelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] size-5" />
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#FFF8F0]/40 border border-[#E5E7EB] rounded-xl py-3.5 pl-12 pr-4 text-[#2D2D2D] placeholder-gray-400 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/10 focus:border-[#FF7A00] focus:bg-white text-sm sm:text-base"
                                    placeholder="chef.john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input Field */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center">
                                <label className="block text-[11px] font-bold text-[#2D2D2D] uppercase tracking-wider">
                                    Password
                                </label> 
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] size-5" />
                                <input
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-[#FFF8F0]/40 border border-[#E5E7EB] rounded-xl py-3.5 pl-12 pr-12 text-[#2D2D2D] placeholder-gray-400 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/10 focus:border-[#FF7A00] focus:bg-white text-sm sm:text-base"
                                    placeholder="••••••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#FF7A00] focus:outline-none cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeSlash className="size-5" /> : <Eye className="size-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full bg-[#FF7A00] hover:bg-[#e66e00] text-white font-bold py-3.5 sm:py-4 rounded-xl transition-all active:scale-[0.98] shadow-md shadow-[#FF7A00]/10 flex items-center justify-center gap-2 group cursor-pointer text-sm sm:text-base"
                            >
                                <span>Login to Kitchen</span>
                                <ArrowRight className="size-4 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>

                    {/* Footer Links */}
                    <div className="text-center pt-1">
                        <p className="text-sm text-[#6B7280] font-medium">
                            New to RecipeMaster?{' '}
                            <Link className="text-[#FF7A00] font-bold hover:underline" href="/auth/register">
                                Create Account
                            </Link>
                        </p>
                    </div>

                    {/* Safety Badges */}
                    <div className="pt-5 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold tracking-wider text-[#6B7280] uppercase">
                        <div className="flex items-center gap-4">
                            <a className="hover:text-[#FF7A00] transition-colors" href="#">Privacy</a>
                            <a className="hover:text-[#FF7A00] transition-colors" href="#">Terms</a>
                        </div>
                        <div className="flex items-center gap-1 text-[#4CAF50]">
                            <ShieldCheck className="size-4" />
                            <span>100% Secure Access</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Global Typography Setup */}
            <style jsx global>{`
                body {
                    font-family: 'Outfit', sans-serif;
                    background-color: #FFF8F0;
                }
            `}</style>
        </div>
    );
}