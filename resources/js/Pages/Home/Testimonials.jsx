import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import { motion } from 'framer-motion';

const comments = [
    {
        id: 1,
        des: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        src: '/images/Home/Testimonials/img1.png',
        name: 'Robert Fox',
        role: 'Customer',
        star: [
            {
                id: 1,
                src: '/images/Home/Testimonials/star.png',
            },
            {
                id: 2,
                src: '/images/Home/Testimonials/star.png',
            },
            {
                id: 3,
                src: '/images/Home/Testimonials/star.png',
            },
            {
                id: 4,
                src: '/images/Home/Testimonials/star.png',
            },
            {
                id: 5,
                src: '/images/Home/Testimonials/star.png',
            },
        ],
    },
    {
        id: 2,
        des: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        src: '/images/Home/Testimonials/img2.png',
        name: 'Dianne Russell',
        role: 'Customer',
        star: [
            {
                id: 1,
                src: '/images/Home/Testimonials/star.png',
            },
            {
                id: 2,
                src: '/images/Home/Testimonials/star.png',
            },
            {
                id: 3,
                src: '/images/Home/Testimonials/star.png',
            },
            {
                id: 4,
                src: '/images/Home/Testimonials/star.png',
            },
            {
                id: 5,
                src: '/images/Home/Testimonials/star.png',
            },
        ],
    },
    {
        id: 3,
        des: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        src: '/images/Home/Testimonials/img3.png',
        name: 'Eleanor Pena',
        role: 'Customer',
        star: [
            {
                id: 1,
                src: '/images/Home/Testimonials/star.png',
            },
            {
                id: 2,
                src: '/images/Home/Testimonials/star.png',
            },
            {
                id: 3,
                src: '/images/Home/Testimonials/star.png',
            },
            {
                id: 4,
                src: '/images/Home/Testimonials/star.png',
            },
            {
                id: 5,
                src: '/images/Home/Testimonials/star.png',
            },
        ],
    },
];

const Testimonials = () => {
    return (
        <AnimatedSection className="relative bg-[#F7F7F7]">
            <section className="container relative z-10 mx-auto flex max-w-7xl flex-col gap-[50px] px-4 py-20">
                <div className="flex items-center justify-center xl:justify-between">
                    <div>
                        <h3 className="text-[16px] font-normal leading-[120%] tracking-[0%] text-[#00B207]">
                            TESTIMONIALS
                        </h3>
                        <h1 className="text-[30px] font-semibold leading-[120%] tracking-[0%] text-[#1A1A1A] md:text-[35px] lg:text-[40px]">
                            What Our Customer Says
                        </h1>
                    </div>
                    <div className="hidden gap-2 xl:flex">
                        <div className="group flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border-[1px] border-[#E5E5E5] transition duration-150 ease-in-out hover:bg-[#00B207]">
                            <img
                                className="group-hover:invert"
                                src="/images/Home/Testimonials/rSide.png"
                                alt=""
                            />
                        </div>
                        <div className="group flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border-[1px] border-[#E5E5E5] transition duration-150 ease-in-out hover:bg-[#00B207]">
                            <img
                                className="group-hover:invert"
                                src="/images/Home/Testimonials/lSide.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    {comments.map((item, indexof) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    delay: (indexof + 1) * 0.2,
                                }}
                                key={item.id}
                                className="flex w-[408px] flex-col gap-5 rounded-lg bg-white p-6"
                            >
                                <img
                                    className="h-[26px] w-8"
                                    src="/images/Home/Testimonials/qoute.png"
                                    alt=""
                                />
                                <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#4D4D4D]">
                                    {item.des}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <img src={item.src} alt="" />
                                        <div>
                                            <p className="text-[16px] font-medium leading-[150%] tracking-[0%] text-[#1A1A1A]">
                                                {item.name}
                                            </p>
                                            <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#999999]">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        {item.star.map((part, index) => {
                                            return (
                                                <motion.div
                                                    key={part.id}
                                                    initial={{
                                                        opacity: 0,
                                                        y: -30,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.7,
                                                        delay:
                                                            (indexof + 1) *
                                                            index *
                                                            0.2,
                                                    }}
                                                >
                                                    <img
                                                        src={part.src}
                                                        alt=""
                                                    />
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
            <div className="absolute bottom-0 left-[180px] hidden xl:block">
                <img src="/images/Home/Testimonials/lLeaf.png" alt="" />
            </div>
            <div className="absolute right-60 top-[150px] hidden xl:block">
                <img src="/images/Home/Testimonials/rLeaf.png" alt="" />
            </div>
            <div className="absolute right-10 top-20 hidden xl:block">
                <img src="/images/Home/Testimonials/rDesign.png" alt="" />
            </div>
        </AnimatedSection>
    );
};

export default Testimonials;
