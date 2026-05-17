import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';

export default function Checkout() {
    return (
        <MainLayout>
            <Head title="Checkout" />

            <div className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold">Checkout</h1>
            </div>
        </MainLayout>
    );
}
