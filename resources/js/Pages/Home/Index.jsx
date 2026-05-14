import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import Hero from './Hero';

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero />
        </MainLayout>
    );
}
