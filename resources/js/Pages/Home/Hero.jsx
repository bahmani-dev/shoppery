import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import { useEffect, useState } from 'react';

const Items = [
    {
        id: 1,
        src: '/images/Home/HeroImage1.png',
        welcome: 'Welcome to Shopery',
        title: 'Fresh & Healthy Organic Food',
        des: 'Free shipping on all your order. we deliver, you enjoy',
    },
    {
        id: 2,
        src: '/images/Home/HeroImage2.png',
        welcome: 'Welcome to Shopery',
        title: 'Fresh & Healthy Organic Food',
        des: 'Free shipping on all your order. we deliver, you enjoy',
    },
    {
        id: 3,
        src: '/images/Home/HeroImage3.png',
        welcome: 'Welcome to Shopery',
        title: 'Fresh & Healthy Organic Food',
        des: 'Free shipping on all your order. we deliver, you enjoy',
    },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentItem = Items[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex < Items.length - 1) {
                return prevIndex + 1;
            } else {
                return 0;
            }
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex > 0) {
                return prevIndex - 1;
            } else {
                return Items.length - 1;
            }
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatedSection>
            <section className="container mx-auto px-4 py-20">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    <div className="flex h-[264px] items-center md:h-[364px] lg:h-[464px] xl:h-[564px]">
                        <img
                            src={currentItem.src}
                            alt="hero"
                            className="rounded-2xl"
                        />
                    </div>
                    <div>
                        <p className="mb-4 font-semibold text-green-600">
                            {currentItem.welcome}
                        </p>

                        <h1 className="mb-6 text-5xl font-bold leading-tight">
                            {currentItem.title}
                        </h1>

                        <h2 className="text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px]">
                            Sales up to{' '}
                            <span className="text-[#FF8A00]">30% OFF</span>
                        </h2>

                        <p className="mb-8 text-gray-600">{currentItem.des}</p>

                        <button className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-white">
                            Shop Now{' '}
                            <img src="/images/Home/shopNow.png" alt="" />
                        </button>
                    </div>
                </div>

                <button onClick={handleNext}>next</button>
                <button onClick={handlePrev}>prev</button>
            </section>
        </AnimatedSection>
    );
};

export default Hero;
