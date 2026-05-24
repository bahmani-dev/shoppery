import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ShopNowBtn from './ShopNowBtn';

const Items = [
    {
        id: 1,
        src: '/images/Home/HeroImage1.png',
        welcome: 'Welcome to Shopery',
        title: 'Fresh & Healthy',
        titledown: 'Organic food',
        des: 'Free shipping on all your order. we deliver, you enjoy',
    },
    {
        id: 2,
        src: '/images/Home/HeroImage2.png',
        welcome: 'Welcome to Shopery',
        title: 'Fresh & Healthy',
        titledown: 'Organic food',
        des: 'Free shipping on all your order. we deliver, you enjoy',
    },
    {
        id: 3,
        src: '/images/Home/HeroImage3.png',
        welcome: 'Welcome to Shopery',
        title: 'Fresh & Healthy',
        titledown: 'Organic food',
        des: 'Free shipping on all your order. we deliver, you enjoy',
    },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const currentItem = Items[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            setDirection(1);
            if (prevIndex < Items.length - 1) {
                return prevIndex + 1;
            } else {
                return 0;
            }
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            setDirection(-1);
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
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatedSection>
            <section className="container relative mx-auto px-4 py-20">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    <div className="relative h-[354px] overflow-hidden sm:h-[394px] lg:h-[464px] xl:h-[564px]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(event, info) => {
                                    const swipeThreshold = 100;

                                    if (info.offset.x < -swipeThreshold) {
                                        setDirection(1);
                                        handleNext();
                                    }

                                    if (info.offset.x > swipeThreshold) {
                                        setDirection(-1);
                                        handlePrev();
                                    }
                                }}
                                custom={direction}
                                initial={{
                                    x: direction > 0 ? 100 : -100,
                                    opacity: 0,
                                }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{
                                    x: direction > 0 ? -100 : 100,
                                    opacity: 0,
                                }}
                                transition={{ duration: 0.5 }}
                                key={currentIndex}
                                className="absolute left-0 top-0 flex h-[264px] w-full items-center md:h-[364px] lg:h-[464px] xl:h-[564px]"
                            >
                                <img
                                    src={currentItem.src}
                                    alt="hero"
                                    className="absolute top-0 rounded-2xl"
                                />
                                <img
                                    className="absolute right-0 top-[30px]"
                                    src="/images/Home/off.png"
                                    alt=""
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div>
                        <p className="mb-4 font-semibold text-green-600">
                            {currentItem.welcome}
                        </p>

                        <h1 className="text-5xl font-bold leading-tight">
                            {currentItem.title}
                        </h1>
                        <h1 className="mb-6 text-5xl font-bold leading-tight">
                            {currentItem.titledown}
                        </h1>

                        <h2 className="text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px]">
                            Sales up to{' '}
                            <span className="text-[#FF8A00]">30% OFF</span>
                        </h2>

                        <p className="mb-8 text-gray-600">{currentItem.des}</p>

                        <ShopNowBtn />
                    </div>
                </div>
                <div className="absolute top-[300px] hidden w-full justify-between xl:flex">
                    <button onClick={handlePrev}>
                        <img src="/images/Home/ArrowL.png" alt="" />
                    </button>
                    <button onClick={handleNext}>
                        <img src="/images/Home/ArrowR.png" alt="" />
                    </button>
                </div>

                <div className="mt-10 flex w-full justify-center gap-3 lg:mt-0">
                    {Items.map((item, index) => {
                        return (
                            <motion.button
                                key={item.id}
                                className={
                                    currentIndex === index
                                        ? 'w-10 rounded-full bg-green-500 transition-all duration-500 ease-in-out'
                                        : 'h-3 w-4 rounded-full bg-gray-300 transition-all duration-500 ease-in-out'
                                }
                                onClick={() => {
                                    if (index > currentIndex) {
                                        setDirection(1);
                                    } else {
                                        setDirection(-1);
                                    }

                                    setCurrentIndex(index);
                                }}
                            />
                        );
                    })}
                </div>
            </section>
        </AnimatedSection>
    );
};

export default Hero;
