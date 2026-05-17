import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <MainLayout>
            <Head title="About" />

            <div className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold">About Us</h1>
            </div>
        </MainLayout>
    );
}
