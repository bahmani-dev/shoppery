import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import BestSeller2 from './BestSeller2';
import BestSellerProducts from './BestSellerProducts';
import Categories from './Categories';
import Experience from './Experience';
import Hero from './Hero';
import IntroducingProducts from './IntroducingProducts';
import News from './News';
import Offers from './Offers';
import Services from './Services';
import Testimonials from './Testimonials';
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
            <BestSellerProducts />
            <BestSeller2 />
            <News />
            <Testimonials />
            {/* <NewsPopUp /> */}
        </MainLayout>
    );
}
