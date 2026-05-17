import NewsletterSection from '../NewsLetter';

export default function Footer() {
    return (
        <>
            <NewsletterSection></NewsletterSection>
            <footer className="bg-[#111111] text-gray-300">
                <div className="container mx-auto px-6 py-14">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
                        <div className="lg:col-span-2">
                            <div className="mb-5 flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                    <span className="text-lg text-white">
                                        🌿
                                    </span>
                                </div>

                                <h2 className="text-3xl font-bold text-white">
                                    Ecobazar
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-gray-500">
                                Morbi cursus porttitor enim lobortis molestie.
                                Duis gravida turpis dui, eget bibendum magna
                                congue nec.
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                                <a
                                    href="tel:+93711463130"
                                    className="border-b border-green-500 pb-1 text-white transition hover:text-green-400"
                                >
                                    (+93) 711 46 3130
                                </a>

                                <span className="text-gray-600">or</span>

                                <a
                                    href="mailto:hi@mohammadbahmani.dev"
                                    className="border-b border-green-500 pb-1 text-white transition hover:text-green-400"
                                >
                                    hi@mohammadbahmani.dev
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-5 text-lg font-semibold text-white">
                                My Account
                            </h3>

                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-green-400"
                                    >
                                        My Account
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-green-400"
                                    >
                                        Order History
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="text-white transition hover:text-green-400"
                                    >
                                        Shopping Cart
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-green-400"
                                    >
                                        Wishlist
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-5 text-lg font-semibold text-white">
                                Helps
                            </h3>

                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-green-400"
                                    >
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-green-400"
                                    >
                                        FAQs
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-green-400"
                                    >
                                        Terms & Condition
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-green-400"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-5 text-lg font-semibold text-white">
                                Categories
                            </h3>

                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-green-400"
                                    >
                                        Fruit & Vegetables
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-green-400"
                                    >
                                        Meat & Fish
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-green-400"
                                    >
                                        Bread & Bakery
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-green-400"
                                    >
                                        Beauty & Health
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-gray-800 pt-6 md:flex-row">
                        <p className="text-sm text-gray-500">
                            Ecobazar eCommerce © 2026. All Rights Reserved
                        </p>

                        <div className="flex items-center gap-3">
                            <div className="rounded bg-white px-3 py-2 text-xs font-semibold text-black">
                                Apple Pay
                            </div>

                            <div className="rounded bg-white px-3 py-2 text-xs font-semibold text-black">
                                VISA
                            </div>

                            <div className="rounded bg-white px-3 py-2 text-xs font-semibold text-black">
                                Discover
                            </div>

                            <div className="rounded bg-white px-3 py-2 text-xs font-semibold text-black">
                                Mastercard
                            </div>

                            <div className="rounded bg-white px-3 py-2 text-xs font-semibold text-black">
                                Secure Payment
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
