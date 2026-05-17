import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';

export default function Wishlist() {
    return (
        <MainLayout>
            <Head title="Wishlist" />

            <div className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold">Wishlist</h1>
            </div>
        </MainLayout>
    );
}
