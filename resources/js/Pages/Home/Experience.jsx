import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const exp = [
    {
        id: 1,
        num: 37,
        plus: '+',
        des: 'Years of Hard Work',
    },
    {
        id: 2,
        num: 500,
        plus: 'k+',
        des: 'Happy Customer',
    },
    {
        id: 3,
        num: 28,
        plus: '',
        des: 'Qualified Team Member',
    },
    {
        id: 4,
        num: 750,
        plus: 'k+',
        des: 'Monthly Orders',
    },
];

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [animateState, setAnimateState] = useState(exp.map(() => 0));
    useEffect(() => {
        if (!isInView) return;
        const duration = 3000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const rawProgress = Math.min(
                (currentTime - startTime) / duration,
                1,
            );
            const progress = 1 - Math.pow(1 - rawProgress, 3);

            const updatedValues = exp.map((item) =>
                Math.floor(progress * item.num),
            );

            setAnimateState(updatedValues);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView]);
    return (
        <AnimatedSection className="relative z-10 bg-[#001009]">
            <section
                ref={ref}
                className="container mx-auto flex flex-wrap justify-center gap-4 px-4 py-20"
            >
                {exp.map((item, index) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.3 }}
                            key={item.id}
                            className="relative z-10 flex h-[174px] w-[312px] flex-col items-center justify-center rounded-lg bg-[#FFFFFF12]"
                        >
                            <h1 className="text-[56px] font-light leading-[120%] tracking-[0%] text-[#00B207]">
                                {animateState[index]}
                                {item.plus}
                            </h1>
                            <p className="text-[18px] font-normal leading-[150%] tracking-[0%] text-[#fff]">
                                {item.des}
                            </p>
                        </motion.div>
                    );
                })}
            </section>
            <div className="absolute left-0 top-5">
                <img src="/images/Home/Experience/lSideDesign.png" alt="" />
            </div>
            <div className="absolute right-0 top-4">
                <img src="/images/Home/Experience/rSideDesign.png" alt="pic" />
            </div>
            <div className="absolute -bottom-3 right-[150px]">
                <img src="/images/Home/Experience/rSideDesign2.png" alt="" />
            </div>
        </AnimatedSection>
    );
};

export default Experience;
