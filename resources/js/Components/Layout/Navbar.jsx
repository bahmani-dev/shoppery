import { Link } from '@inertiajs/react';
import {
    ChevronDown,
    Heart,
    MapPin,
    Menu,
    Phone,
    Search,
    ShoppingBag,
    X,
} from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

    const menuItems = [
        {
            title: 'Home',
            href: '/',
            links: [
                { name: 'Home 01', href: '/' },
                { name: 'Featured Products', href: '/#featured' },
                { name: 'Popular Categories', href: '/#categories' },
            ],
        },
        {
            title: 'Shop',
            href: '/shop',
            links: [
                { name: 'Shop Grid', href: '/shop' },
                { name: 'Product Details', href: '/product-details' },
                { name: 'Wishlist', href: '/wishlist' },
                { name: 'Cart', href: '/cart' },
            ],
        },
        {
            title: 'Pages',
            href: '#',
            links: [
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Checkout', href: '/checkout' },
                { name: 'Profile', href: '/profile' },
            ],
        },
        {
            title: 'Blog',
            href: '/blogs',
            links: [
                { name: 'Blog Grid', href: '/blogs' },
                { name: 'Latest News', href: '/blogs/latest' },
                { name: 'Organic Foods', href: '/blogs/organic' },
            ],
        },
        {
            title: 'About Us',
            href: '/about',
        },
        {
            title: 'Contact Us',
            href: '/contact',
        },
    ];

    return (
        <>
            <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
                {/* TOP BAR */}
                <div className="hidden bg-[#1F1F1F] lg:block">
                    <div className="mx-auto flex h-[42px] max-w-7xl items-center justify-between px-6">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <MapPin size={15} />

                            <span>Store Location: Kabul, Afghanistan</span>
                        </div>

                        <div className="flex items-center gap-5 text-sm text-gray-300">
                            <button className="flex items-center gap-1 hover:text-white">
                                Eng
                                <ChevronDown size={14} />
                            </button>

                            <button className="flex items-center gap-1 hover:text-white">
                                USD
                                <ChevronDown size={14} />
                            </button>

                            <div className="h-4 w-px bg-gray-600" />

                            <Link href="/login" className="hover:text-white">
                                Sign In
                            </Link>

                            <span>/</span>

                            <Link href="/register" className="hover:text-white">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>

                {/* MIDDLE HEADER */}
                <div className="border-b border-gray-200 bg-[#F7F7F7]">
                    <div className="mx-auto flex h-[90px] max-w-7xl items-center justify-between px-4 lg:px-6">
                        {/* MOBILE MENU */}
                        <button
                            onClick={() => setMobileMenu(true)}
                            className="lg:hidden"
                        >
                            <Menu size={28} />
                        </button>

                        {/* LOGO */}
                        <div className="flex gap-1">
                            <img
                                src="/images/logo.png"
                                className="h-[30px] w-[32px]"
                                alt="logo"
                            />
                            <Link
                                href="/"
                                className="text-3xl font-bold text-[#1A1A1A]"
                            >
                                Ecobazar
                            </Link>
                        </div>

                        {/* SEARCH */}
                        <div className="hidden flex-1 items-center justify-center px-10 lg:flex">
                            <div className="flex w-full max-w-[650px] overflow-hidden rounded-lg border border-gray-300 bg-white">
                                <div className="flex flex-1 items-center px-4">
                                    <Search
                                        size={20}
                                        className="text-gray-400"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full border-none px-3 py-4 outline-none"
                                    />
                                </div>

                                <button className="bg-green-600 px-8 font-semibold text-white transition hover:bg-green-700">
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex items-center gap-5">
                            <Link
                                href="/wishlist"
                                className="relative hover:text-green-600"
                            >
                                <Heart size={28} strokeWidth={1.8} />
                            </Link>

                            <div className="hidden h-7 w-px bg-gray-300 lg:block" />

                            <Link
                                href="/cart"
                                className="relative flex items-center gap-3"
                            >
                                <div className="relative">
                                    <ShoppingBag size={28} strokeWidth={1.8} />

                                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[10px] text-white">
                                        2
                                    </span>
                                </div>

                                <div className="hidden lg:block">
                                    <p className="text-xs text-gray-500">
                                        Shopping cart:
                                    </p>

                                    <p className="font-semibold text-gray-900">
                                        $57.00
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* NAVIGATION */}
                <div className="hidden border-b border-gray-200 bg-white lg:block">
                    <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-6">
                        <nav className="flex items-center gap-10">
                            {menuItems.map((item) => (
                                <div
                                    key={item.title}
                                    className="group relative"
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 font-medium text-gray-700 transition hover:text-green-600"
                                    >
                                        {item.title}

                                        {(item.links || []).length > 0 && (
                                            <ChevronDown size={16} />
                                        )}
                                    </Link>

                                    {(item.links || []).length > 0 && (
                                        <div className="invisible absolute left-0 top-[45px] z-50 w-64 rounded-xl border border-gray-100 bg-white p-3 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                            <div className="flex flex-col">
                                                {item.links.map((link) => (
                                                    <Link
                                                        key={link.name}
                                                        href={link.href}
                                                        className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-green-50 hover:text-green-600"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="flex items-center gap-3">
                            <Phone size={20} className="text-gray-700" />

                            <span className="font-medium text-gray-900">
                                +93 711 46 3130
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU */}
            {/* MOBILE MENU */}
            <div
                className={`fixed inset-0 z-[60] bg-black/40 transition-all duration-300 ${
                    mobileMenu ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                <div
                    className={`absolute left-0 top-0 h-full w-[320px] overflow-y-auto bg-white p-6 transition-transform duration-300 ${
                        mobileMenu ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="mb-8 flex items-center justify-between">
                        <div className="flex gap-1">
                            <img
                                src="/images/logo.png"
                                className="h-[30px] w-[32px]"
                                alt="logo"
                            />
                            <h2 className="text-2xl font-bold text-green-600">
                                Ecobazar
                            </h2>
                        </div>

                        <button onClick={() => setMobileMenu(false)}>
                            <X size={24} />
                        </button>
                    </div>
                    {/* MOBILE SEARCH */}
                    <div className="mb-6">
                        <div className="flex overflow-hidden rounded-lg border border-gray-300">
                            <div className="flex flex-1 items-center px-3">
                                <Search size={18} className="text-gray-400" />

                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full border-none px-3 py-3 text-sm outline-none"
                                />
                            </div>

                            <button className="bg-green-600 px-5 text-sm font-medium text-white">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* LANGUAGE & CURRENCY */}
                    <div className="mb-6 grid grid-cols-2 gap-3">
                        <div className="relative">
                            <button className="flex w-full items-center justify-between rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700">
                                Eng
                                <ChevronDown size={16} />
                            </button>

                            <div className="mt-2 rounded-lg border border-gray-200 bg-white shadow-sm">
                                <button className="w-full px-4 py-3 text-left text-sm hover:bg-gray-100">
                                    English
                                </button>

                                <button className="w-full px-4 py-3 text-left text-sm hover:bg-gray-100">
                                    Persian
                                </button>

                                <button className="w-full px-4 py-3 text-left text-sm hover:bg-gray-100">
                                    Pashto
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <button className="flex w-full items-center justify-between rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700">
                                USD
                                <ChevronDown size={16} />
                            </button>

                            <div className="mt-2 rounded-lg border border-gray-200 bg-white shadow-sm">
                                <button className="w-full px-4 py-3 text-left text-sm hover:bg-gray-100">
                                    USD
                                </button>

                                <button className="w-full px-4 py-3 text-left text-sm hover:bg-gray-100">
                                    AFN
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {menuItems.map((item, index) => {
                            const hasDropdown =
                                item.links && item.links.length > 0;

                            const isOpen = openMobileDropdown === index;

                            return (
                                <div
                                    key={item.title}
                                    className="border-b border-gray-100 py-2"
                                >
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={item.href}
                                            onClick={() => {
                                                if (!hasDropdown) {
                                                    setMobileMenu(false);
                                                }
                                            }}
                                            className="py-3 font-medium text-gray-700 hover:text-green-600"
                                        >
                                            {item.title}
                                        </Link>

                                        {hasDropdown && (
                                            <button
                                                onClick={() =>
                                                    setOpenMobileDropdown(
                                                        isOpen ? null : index,
                                                    )
                                                }
                                                className="p-2"
                                            >
                                                <ChevronDown
                                                    size={18}
                                                    className={`transition-transform duration-300 ${
                                                        isOpen
                                                            ? 'rotate-180'
                                                            : ''
                                                    }`}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {/* DROPDOWN */}
                                    {hasDropdown && (
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${
                                                isOpen
                                                    ? 'max-h-[500px] opacity-100'
                                                    : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <div className="ml-3 mt-2 flex flex-col gap-1 rounded-lg bg-gray-50 p-3">
                                                {item.links.map((link) => (
                                                    <Link
                                                        key={link.name}
                                                        href={link.href}
                                                        onClick={() =>
                                                            setMobileMenu(false)
                                                        }
                                                        className="rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-green-50 hover:text-green-600"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* MOBILE EXTRA LINKS */}
                    <div className="mt-8 border-t border-gray-200 pt-6">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/login"
                                className="font-medium text-gray-700 hover:text-green-600"
                            >
                                Sign In
                            </Link>

                            <Link
                                href="/register"
                                className="font-medium text-gray-700 hover:text-green-600"
                            >
                                Sign Up
                            </Link>

                            <div className="mt-4 flex items-center gap-3">
                                <Phone size={18} className="text-gray-700" />

                                <span className="font-medium text-gray-900">
                                    +93 711 46 3130
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[192px]" />
        </>
    );
}
