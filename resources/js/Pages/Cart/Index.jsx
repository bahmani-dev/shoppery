import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';

export default function Cart() {
    return (
        <MainLayout>
            <Head title="Cart" />

            <div className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold">Cart</h1>
            </div>
        </MainLayout>
    );
}
