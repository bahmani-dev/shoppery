import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import BestSeller2 from './BestSeller2';
import BestSellerProducts from './BestSellerProducts';
import Categories from './Categories';
import Experience from './Experience';
import Hero from './Hero';
import IntroducingProducts from './IntroducingProducts';
import News from './News';
import NewsPopUp from './NewsPopUp';
import Offers from './Offers';
import Partners from './Partners';
import Services from './Services';
import Testimonials from './Testimonials';
import Trusted from './Trusted';
import Video from './Video';

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
            <Video />
            <Partners />
            <NewsPopUp />
        </MainLayout>
    );
}
