'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bars, House, ChartAreaStacked, LayoutCells, FileText, PlusShape, CircleInfo, Persons, ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Button, Drawer, Dropdown, Label, Spinner } from "@heroui/react";
import { useMemo, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { ChefHat } from "lucide-react";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter()

    // Drawer-এর স্টেট কন্ট্রোল
    const [isOpen, setIsOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/auth/login");
                },
            },
        });
    }

    const navLinks = useMemo(() => {
        const links = [
            { label: "Home", href: "/", icon: House },
            { label: "Recipes", href: "/recipes", icon: ChartAreaStacked },
            { label: "Blog", href: "/extras/blog", icon: FileText },
            { label: "About", href: "/extras/about", icon: CircleInfo },
        ];

        if (user) {
            links.push(
                { label: "Add Recipes", href: "/recipes/add", icon: PlusShape },
                { label: "Manage Recipes", href: "/recipes/manage", icon: LayoutCells }
            );
        }
        return links;
    }, [user]);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#FFF8F0]/80 backdrop-blur-xl border-b border-[#E5E7EB] text-[#2D2D2D] shadow-sm">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                    <ChefHat size={24} className="text-[#FF7A00]" />

                    <h2 className="text-[22px] font-black tracking-tight text-[#2D2D2D]">
                        <span className="text-[#FF7A00] transition-colors duration-300 group-hover:text-[#4CAF50]">
                            RecipeMaster
                        </span> AI
                    </h2>
                </Link>

                {/* ================= DESKTOP VIEW ================= */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathName === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={
                                    isActive
                                        ? "text-[#FF7A00] font-bold border-b-2 border-[#FF7A00] pb-1"
                                        : "text-[#6B7280] font-medium hover:text-[#FF7A00] transition-colors duration-300"
                                }
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    {isPending ? (
                        <div className="flex flex-col items-center gap-1">
                            <Spinner size="sm" color="warning" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Loading</span>
                        </div>
                    ) : user ? (
                        <Dropdown>
                            <Dropdown.Trigger className="rounded-full cursor-pointer ring-2 ring-[#FF7A00]/20 hover:ring-[#FF7A00] transition-all">
                                <Avatar>
                                    <Avatar.Image
                                        alt={user?.name || "User Profile"}
                                        src={user?.image || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"}
                                    />
                                    <Avatar.Fallback delayMs={600} className="bg-[#FF7A00] text-white font-bold">RM</Avatar.Fallback>
                                </Avatar>
                            </Dropdown.Trigger>

                            <Dropdown.Popover className="bg-white border border-[#E5E7EB] shadow-xl rounded-2xl p-1">
                                <div className="px-4 pt-3 pb-2 border-b border-[#E5E7EB]/60">
                                    <div className="flex items-center gap-3">
                                        <Avatar size="sm" className="ring-1 ring-[#FF7A00]/30">
                                            <Avatar.Image
                                                alt={user?.name || "User Avatar"}
                                                src={user?.image || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"}
                                            />
                                            <Avatar.Fallback delayMs={600} className="bg-[#FF7A00] text-white">RM</Avatar.Fallback>
                                        </Avatar>
                                        <div className="flex flex-col gap-0">
                                            <p className="text-sm font-bold text-[#2D2D2D] leading-tight">{user?.name}</p>
                                            <p className="text-xs text-[#6B7280] truncate max-w-[150px]">{user?.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <Dropdown.Menu className="p-1">
                                    <Dropdown.Item id="profile" textValue="Profile" className="hover:bg-[#FFF8F0] rounded-lg transition-colors">
                                        <Link href="/profile" className="flex w-full items-center justify-between gap-2 py-1.5 px-1">
                                            <Label className="text-[#2D2D2D] font-semibold cursor-pointer">Profile</Label>
                                            <Persons className="text-[#FF7A00] size-4" />
                                        </Link>
                                    </Dropdown.Item>

                                    <Dropdown.Item id="logout" textValue="Logout" variant="danger" className="hover:bg-red-50 rounded-lg transition-colors">
                                        <div onClick={handleLogout} className="flex w-full items-center justify-between gap-2 py-1.5 px-1 cursor-pointer">
                                            <Label className="text-red-600 font-semibold cursor-pointer">Log Out</Label>
                                            <ArrowRightFromSquare className="size-4 text-red-600" />
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                    ) : (
                        <>
                            <Link href="/auth/login">
                                <button className="px-5 py-2 rounded-xl border-2 border-[#FF7A00] text-[#FF7A00] font-bold hover:bg-[#FF7A00]/5 active:scale-95 transition-all text-sm cursor-pointer">
                                    Login
                                </button>
                            </Link>
                            <Link href="/auth/register">
                                <button className="px-5 py-2.5 rounded-xl bg-[#FF7A00] text-white font-bold hover:bg-[#e66e00] hover:shadow-md hover:shadow-[#FF7A00]/20 active:scale-95 transition-all text-sm cursor-pointer">
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
                </div>

                {/* ================= MOBILE VIEW (HeroUI Drawer) ================= */}
                <div className="md:hidden">
                    <Button
                        isIconOnly
                        onPress={() => setIsOpen(true)}
                        className="bg-white text-[#2D2D2D] border border-[#E5E7EB] hover:bg-[#FFF8F0] min-w-0 p-2 rounded-xl shadow-sm"
                    >
                        <Bars className="size-6 text-[#2D2D2D]" />
                    </Button>

                    {isOpen && (
                        <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
                            <Drawer.Backdrop className="bg-[#2D2D2D]/30 backdrop-blur-sm" />

                            <Drawer.Content
                                placement="left"
                                className="bg-[#FFF8F0] text-[#2D2D2D] border-r border-[#E5E7EB] w-[280px] h-full"
                            >
                                <Drawer.Dialog className="bg-[#FFF8F0] h-full flex flex-col m-0 rounded-none relative">
                                    <Drawer.CloseTrigger
                                        onPress={() => setIsOpen(false)}
                                        className="text-red-500 bg-red-50 hover:bg-red-100 top-4 right-4 absolute z-50 p-1.5 rounded-lg border border-red-100"
                                    />
                                    <Drawer.Header className="border-b border-[#E5E7EB]/60 px-6 py-5">
                                        <Drawer.Heading className="mt-5" onClick={() => setIsOpen(false)}>
                                            {/* <Link href="/">
                                                <h2 className="text-[20px] font-black tracking-tight text-[#2D2D2D]">
                                                    <span className="text-[#FF7A00]">RecipeMaster</span> AI
                                                </h2>
                                            </Link> */}
                                            <Link href="/" className="flex items-center gap-2 whitespace-nowrap">
                                                <ChefHat size={24} className="text-[#FF7A00] shrink-0" />

                                                <h2 className="text-[20px] font-black tracking-tight text-[#2D2D2D] whitespace-nowrap">
                                                    <span className="text-[#FF7A00]">RecipeMaster</span> AI
                                                </h2>
                                            </Link>
                                        </Drawer.Heading>
                                    </Drawer.Header>

                                    <Drawer.Body className="flex flex-col justify-between py-6 px-4 h-full overflow-y-auto bg-[#FFF8F0]">
                                        {/* Mobile Navigation Links */}
                                        <nav className="flex flex-col gap-1.5">
                                            {user && (
                                                <Link
                                                    href="/profile"
                                                    onClick={() => setIsOpen(false)}
                                                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-bold transition-all ${pathName === "/profile"
                                                        ? "bg-[#FF7A00]/10 text-[#FF7A00] border-l-4 border-[#FF7A00]"
                                                        : "text-[#6B7280] hover:bg-white hover:text-[#FF7A00]"
                                                        }`}
                                                >
                                                    <Persons className="size-5" />
                                                    Profile
                                                </Link>
                                            )}

                                            {navLinks.map((link) => {
                                                const isActive = pathName === link.href;
                                                const Icon = link.icon;
                                                return (
                                                    <Link
                                                        key={link.href}
                                                        href={link.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-bold transition-all ${isActive
                                                            ? "bg-[#FF7A00]/10 text-[#FF7A00] border-l-4 border-[#FF7A00]"
                                                            : "text-[#6B7280] hover:bg-white hover:text-[#FF7A00]"
                                                            }`}
                                                    >
                                                        <Icon className="size-5" />
                                                        {link.label}
                                                    </Link>
                                                );
                                            })}
                                        </nav>

                                        {/* Mobile Conditional Auth Buttons */}
                                        <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-[#E5E7EB] bg-[#FFF8F0]">
                                            {user ? (
                                                <button onClick={handleLogout} className="w-full px-6 py-3 rounded-xl border-2 border-red-500 text-red-500 font-bold hover:bg-red-50 active:scale-95 transition-all text-center cursor-pointer">
                                                    Logout
                                                </button>
                                            ) : (
                                                <>
                                                    <Link href="/auth/login" onClick={() => setIsOpen(false)} className="w-full">
                                                        <button className="w-full px-6 py-3 rounded-xl border-2 border-[#FF7A00] text-[#FF7A00] font-bold hover:bg-[#FF7A00]/5 active:scale-95 transition-all text-center cursor-pointer">
                                                            Login
                                                        </button>
                                                    </Link>
                                                    <Link href="/auth/register" onClick={() => setIsOpen(false)} className="w-full">
                                                        <button className="w-full px-6 py-3 rounded-xl bg-[#FF7A00] text-white font-bold hover:bg-[#e66e00] active:scale-95 transition-all text-center cursor-pointer">
                                                            Register
                                                        </button>
                                                    </Link>
                                                </>
                                            )}
                                        </div>
                                    </Drawer.Body>
                                </Drawer.Dialog>
                            </Drawer.Content>
                        </Drawer>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;