import Breadcrumb from '@/Components/Breadcrumb';
import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import MainLayout from '@/Components/Layout/MainLayout';
import VegetableSlider from '@/Components/Layout/VegetableSlider';
import { Head } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Counter from './Counter';
import ProductTabs from './ProductTabs';
import RelatedCards from './RelatedCards';

function ProductDetails() {
    const stars = [
        { link: '/images/star.png' },
        { link: '/images/star.png' },
        { link: '/images/star.png' },
        { link: '/images/star.png' },
    ];
    const medias = [
        { link: '/images/facebook.svg' },
        { link: '/images/twitter.svg' },
        { link: '/images/pinterest.svg' },
        { link: '/images/insta.svg' },
    ];
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <AnimatePresence>
                {' '}
                {showPopup && (
                    <>
                        <motion.div
                            onClick={() => setShowPopup(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
                        ></motion.div>
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                stiffness: 130,
                                damping: 18,
                            }}
                            className="fixed right-0 z-[60] h-[100vh] w-[70%] bg-white sm:w-[60%] lg:w-[40%] 2xl:w-[35]"
                        >
                            <div className="px-6">
                                <div className="mt-6 flex h-20 w-full items-center justify-between">
                                    <h1 className="text-[20px] font-medium">
                                        Shopping Card (2)
                                    </h1>
                                    <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => setShowPopup(false)}
                                        className="text-[25px] font-light"
                                    >
                                        x
                                    </motion.button>
                                </div>
                                <div className="flex items-center justify-between pb-2">
                                    <div className="flex items-center">
                                        <img
                                            className="h-[100px] w-[120px]"
                                            src="/images/orange.png"
                                            alt="Oranges"
                                        />
                                        <div>
                                            <p>Fresh Indian Orange</p>
                                            <p className="font-semibold">
                                                <span className="font-normal text-[#808080]">
                                                    1 kg x
                                                </span>{' '}
                                                12.00
                                            </p>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex h-[24px] w-[24px] items-center justify-center rounded-xl border-[1px] border-gray-300 font-light font-semibold text-[#666666]"
                                    >
                                        X
                                    </motion.button>
                                </div>
                                <div className="flex items-center justify-between border-t">
                                    <div className="flex items-center">
                                        <img
                                            className="h-[120px] w-[120px]"
                                            src="/images/apple.png"
                                            alt="Oranges"
                                        />
                                        <div>
                                            <p>Green Apple</p>
                                            <p className="font-semibold">
                                                <span className="font-normal text-[#808080]">
                                                    1 kg x
                                                </span>{' '}
                                                14.00
                                            </p>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex h-[24px] w-[24px] items-center justify-center rounded-xl border-[1px] border-gray-300 font-light font-semibold text-[#666666]"
                                    >
                                        X
                                    </motion.button>
                                </div>
                            </div>
                            <div className="absolute bottom-10 flex w-full flex-col gap-5 px-6">
                                <div className="flex justify-between">
                                    <p>2 Product</p>
                                    <p className="font-bold">$26.00</p>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-[50px] w-[260px] rounded-[43px] bg-[#00B207] font-semibold text-white sm:w-[350px] lg:w-[300px]"
                                    >
                                        Checkout
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-[50px] w-[260px] rounded-[43px] bg-[#56AC591A] font-semibold text-[#00B207] sm:w-[350px] lg:w-[300px]"
                                    >
                                        Go To Cart
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <MainLayout>
                <Breadcrumb
                    items={[
                        {
                            label: 'Catagory',
                            href: '/shop',
                        },
                        {
                            label: 'Vegetables',
                            href: '/vegetables',
                        },
                        {
                            label: 'Chinese Cabbage',
                        },
                    ]}
                    backgroundImage="/images/breadcrumbs.png"
                ></Breadcrumb>
                <Head title="ProductDetails"></Head>
                <AnimatedSection>
                    <div className="mx-10 grid grid-cols-1 lg:mx-12 lg:grid-cols-2 xl:mx-16 2xl:px-[200px]">
                        <div className="flex items-center justify-center xl:justify-end">
                            <div>
                                <VegetableSlider />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center pt-[50px] lg:w-[100%] lg:pt-6">
                            <div className="flex flex-col items-center lg:items-start">
                                <div>
                                    <div className="flex items-center gap-4">
                                        <h1 className="text-[36px] font-semibold">
                                            Chinese Cabbage
                                        </h1>
                                        <div className="flex h-[30px] w-[80px] items-center justify-center rounded-[3px] bg-[#20B52633] text-[#2C742F]">
                                            <p>In Stock</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex items-center gap-[5px]">
                                            {stars.map((image) => (
                                                <div>
                                                    <img
                                                        className=""
                                                        src={image.link}
                                                        alt=""
                                                    />
                                                </div>
                                            ))}
                                            <p className="mt-1 text-[#666666]">
                                                4 Review
                                            </p>
                                        </div>
                                        <p className="mt-1 text-[#666666]">
                                            <span className="font-semibold">
                                                SKU:
                                            </span>{' '}
                                            2,51,594
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 pt-5">
                                        <p className="text-[20px] text-[#B3B3B3]">
                                            $48.00
                                        </p>
                                        <p className="text-[24px] font-medium text-[#2C742F]">
                                            $17.28
                                        </p>
                                        <div className="ml-3 flex h-[30px] w-[70px] items-center justify-center rounded-2xl bg-[#EA4B481A] text-[#EA4B48]">
                                            <p>64% off</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="flex justify-between border-t-[1px] pt-10">
                                    <div>
                                        <p>Brand:</p>
                                        <img src="" alt="" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <p>Share items:</p>
                                        {medias.map((media, index, media2) => (
                                            <motion.div
                                                className="flex h-8 w-8 items-center justify-center rounded-3xl"
                                                whileHover={{
                                                    scale: 1.5,
                                                    background: '#00B207',
                                                }}
                                                transation={{ duration: 0.4 }}
                                                key={index}
                                            >
                                                <img src={media.link} alt="" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-[1px] pb-10 pt-6 text-[#808080]">
                                <p>
                                    Class aptent taciti sociosqu ad litora
                                    torquent per conubia nostra, per inceptos
                                    himenaeos. Nulla nibh diam, blandit vel
                                    consequat nec, ultrices et ipsum. Nulla
                                    varius magna a consequat pulvinar.
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-3 border-b-[1px] pb-5 pt-5">
                                <Counter />
                                <motion.button
                                    onClick={() => setShowPopup(true)}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex h-[50px] w-[300px] items-center justify-center gap-3 rounded-3xl bg-[#00B207] text-white lg:w-[280px]"
                                >
                                    Add to Cart
                                    <img
                                        className="h-4"
                                        w-4
                                        src="/images/add.png"
                                        alt=""
                                    />
                                </motion.button>
                                <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-3xl bg-[#20B5261A]">
                                    <motion.img
                                        className={'h-[20px] w-[20px]'}
                                        src="/images/heart.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="pt-6">
                                <p className="text-[#808080]">
                                    <span className="font-medium text-black">
                                        Category:
                                    </span>{' '}
                                    Vegetables
                                </p>
                                <p className="text-[#808080]">
                                    <span className="font-medium text-black">
                                        Tag:
                                    </span>
                                    Vegetables Healthy{' '}
                                    <span className="border-b-[2px] font-medium text-black">
                                        Chinese
                                    </span>{' '}
                                    Cabbage Green Cabbage
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <div>
                        <ProductTabs />
                    </div>
                </AnimatedSection>
                <AnimatedSection className="pt-10">
                    <div className="flex justify-center pb-8 text-[32px] font-semibold">
                        <h1>Related Products</h1>
                    </div>
                    <RelatedCards />
                </AnimatedSection>
            </MainLayout>
        </>
    );
}

export default ProductDetails;
