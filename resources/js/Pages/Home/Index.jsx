import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import Categories from './Categories';
import Experience from './Experience';
import Hero from './Hero';
import IntroducingProducts from './IntroducingProducts';
import NewsPopUp from './NewsPopUp';
import Offers from './Offers';
import Services from './Services';
import Trusted from './Trusted';

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero />
            <Services />
            <IntroducingProducts />
            <Categories />
            <Trusted />
            <Experience />
            <Offers />
            <NewsPopUp />
        </MainLayout>
    );
}
