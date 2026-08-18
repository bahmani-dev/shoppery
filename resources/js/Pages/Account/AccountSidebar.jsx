import { Link, usePage } from '@inertiajs/react';

export default function AccountSidebar() {
    const { url } = usePage();
    const path = url.split('?')[0];
    const isOrdersActive =
        path === '/orders' || path.startsWith('/order-details');

    const navItems = [
        {
            label: 'Dashboard',
            href: '/dashboard',
            icon: '/images/dashboard.svg',
            activeIcon: '/images/dashboardblack.svg',
        },
        {
            label: 'Order History',
            href: '/orders',
            icon: '/images/order.svg',
            activeIcon: '/images/orderblack.svg',
        },
        {
            label: 'Wishlist',
            href: '/wishlist',
            icon: '/images/wishlist.svg',
            activeIcon: '/images/wishlistBlack.png',
        },
        {
            label: 'Shopping Cart',
            href: '/cart',
            icon: '/images/shopping.svg',
        },
        {
            label: 'Settings',
            href: '/settings',
            icon: '/images/settings.svg',
            activeIcon: '/images/settingsblack.svg',
        },
        {
            label: 'Log-Out',
            href: '/',
            icon: '/images/logout.svg',
        },
    ];
    return (
        <nav className="w-full rounded-lg border border-[#E5E5E5] py-2">
            <h2 className="px-6 py-5 text-xl font-medium leading-[150%] text-[#1A1A1A]">
                Navigation
            </h2>
            {navItems.map((item) => {
                const isActive =
                    item.href === '/'
                        ? path === '/'
                        : item.href === '/orders'
                          ? isOrdersActive
                          : path.startsWith(item.href);
                return (
                    <Link
                        preserveScroll
                        key={item.href}
                        href={item.href}
                        className={`font-base flex items-center gap-3 px-5 py-4 font-normal leading-[150%] text-[#666666] transition-all duration-200 ${
                            isActive
                                ? 'border-l-4 border-l-[#20B526] bg-[#EDF2EE]'
                                : 'hover:bg-gray-100'
                        }`}
                    >
                        <img
                            className='h-[24px] w-[24px]'
                            src={isActive ? item.activeIcon : item.icon}
                            alt=""
                        />
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}
