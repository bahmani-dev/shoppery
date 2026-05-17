import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';

export default function Contact() {
    return (
        <MainLayout>
            <Head title="Contact" />

            <div className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold">Contact Us</h1>
            </div>
        </MainLayout>
    );
}
