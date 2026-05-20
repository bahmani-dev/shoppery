import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <MainLayout>
            <Head title="404 - Page Not Found" />

            <Breadcrumb
                items={[
                    {
                        label: '404 Error Page',
                        href: '/',
                    },
                ]}
                backgroundImage="/images/breadcrumbs.png"
            ></Breadcrumb>
            <section className="mx-auto flex min-h-screen w-full flex-col items-center justify-center px-4">
                <div className="flex flex-col items-center gap-8">
                    <img
                        src="/images/notfound.png"
                        alt="Not Found Image"
                        className="w-80 sm:w-[400px] md:w-[582px]"
                    />
                    <div className="flex flex-col items-center gap-10">
                        <motion.h2
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="text-[20px] font-semibold leading-[120%] text-[#1A1A1A] sm:text-[30px] md:text-[40px]"
                        >
                            Oops! Page not found
                        </motion.h2>
                        <p className="max-w-[300px] text-center text-base font-normal leading-[120%] text-[#808080] md:max-w-[500px]">
                            Ut consequat ac tortor eu vehicula. Aenean accumsan
                            purus eros. Maecenas sagittis tortor at metus mollis
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                href="/"
                                aria-label="Back to Home"
                                className="rounded-full bg-[#00B207] px-8 py-4 text-sm font-semibold leading-[120%] text-white transition-colors hover:bg-green-700 md:text-base"
                            >
                                Back to Home
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
