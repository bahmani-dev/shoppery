import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';

import { AnimatedSection } from '@/Components/Layout/AnimatedSection';


export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />

            <AnimatedSection>
                <section className="container mx-auto px-4 py-20">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div>
                            <p className="mb-4 font-semibold text-green-600">
                                Welcome to Shopery
                            </p>

                            <h1 className="mb-6 text-5xl font-bold leading-tight">
                                Fresh Organic Products Delivered To Your Door
                            </h1>

                            <p className="mb-8 text-gray-600">
                                Start building your modern e-commerce
                                experience.
                            </p>

                            <button className="rounded-full bg-green-600 px-6 py-3 text-white">
                                Shop Now
                            </button>
                        </div>

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e"
                                alt="hero"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </MainLayout>
    );
}
