import { getUserSession } from "@/lib/session";
import Image from "next/image";
import { Mail, User, Shield, MapPin, Calendar } from "lucide-react";

const ProfilePage = async() => {
    const userDetails = await getUserSession();
    
    // Fallback info if some properties are missing
    const user = {
        name: userDetails?.name || "Anonymous User",
        email: userDetails?.email || "No email provided",
        image: userDetails?.image || "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
        role: userDetails?.role || "Food Enthusiast",
        joined: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    };

    return (
        <div className="min-h-screen bg-[#FFF8F0] pt-28 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#2D2D2D] mb-4">
                        My <span className="text-[#FF7A00]">Profile</span>
                    </h1>
                    <p className="text-[#6B7280]">Manage your personal information and preferences.</p>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-[#E5E7EB] overflow-hidden">
                    {/* Cover Banner */}
                    <div className="h-32 md:h-48 bg-gradient-to-r from-[#FF7A00] to-[#ff9e43] relative"></div>

                    <div className="px-6 md:px-12 pb-12 relative -mt-16 md:-mt-20">
                        {/* Avatar */}
                        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
                            <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-white shadow-md bg-white overflow-hidden flex-shrink-0">
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="pb-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">{user.name}</h2>
                                <p className="text-[#FF7A00] font-semibold mt-1 flex items-center gap-1.5">
                                    <Shield size={16} /> {user.role}
                                </p>
                            </div>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-[#FFF8F0] rounded-2xl p-6 border border-[#E5E7EB] flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
                                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-[#FF7A00] shadow-sm">
                                    <User size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">Full Name</p>
                                    <p className="text-[#2D2D2D] font-bold text-lg">{user.name}</p>
                                </div>
                            </div>

                            <div className="bg-[#FFF8F0] rounded-2xl p-6 border border-[#E5E7EB] flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
                                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-[#4CAF50] shadow-sm">
                                    <Mail size={24} />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">Email Address</p>
                                    <p className="text-[#2D2D2D] font-bold text-lg truncate">{user.email}</p>
                                </div>
                            </div>

                            <div className="bg-[#FFF8F0] rounded-2xl p-6 border border-[#E5E7EB] flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
                                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-[#FF7A00] shadow-sm">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">Joined Since</p>
                                    <p className="text-[#2D2D2D] font-bold text-lg">{user.joined}</p>
                                </div>
                            </div>

                            <div className="bg-[#FFF8F0] rounded-2xl p-6 border border-[#E5E7EB] flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
                                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-[#4CAF50] shadow-sm">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">Location</p>
                                    <p className="text-[#2D2D2D] font-bold text-lg">Earth</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;