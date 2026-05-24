import { AnimatedSection } from '@/Components/Layout/AnimatedSection';

const partners = [
    {
        id: 1,
        src: '/images/Home/End/1.svg',
        src2: 'images/Home/End/11.png',
    },
    {
        id: 2,
        src: '/images/Home/End/line.svg',
    },
    {
        id: 3,
        src: '/images/Home/End/2.svg',
        src2: 'images/Home/End/22.png',
    },
    {
        id: 4,
        src: '/images/Home/End/line.svg',
    },
    {
        id: 5,
        src: '/images/Home/End/3.svg',
        src2: 'images/Home/End/33.png',
    },
    {
        id: 6,
        src: '/images/Home/End/line.svg',
    },
    {
        id: 7,
        src: '/images/Home/End/4.svg',
        src2: 'images/Home/End/44.png',
    },
    {
        id: 8,
        src: '/images/Home/End/line.svg',
    },
    {
        id: 9,
        src: '/images/Home/End/5.svg',
        src2: 'images/Home/End/55.png',
    },
    {
        id: 10,
        src: '/images/Home/End/line.svg',
    },
    {
        id: 11,
        src: '/images/Home/End/6.svg',
        src2: 'images/Home/End/66.png',
    },
];

const Partners = () => {
    return (
        <AnimatedSection>
            <section className="container mx-auto flex max-w-7xl flex-wrap justify-center gap-5 px-4 py-20 md:justify-between">
                {partners.map((item, index) => {
                    return (
                        <div className="relative" key={item.id}>
                            {index % 2 === 0 && (
                                <div className="group relative">
                                    <img
                                        className="transition-opacity duration-300 group-hover:opacity-0"
                                        src={item.src}
                                        alt=""
                                    />
                                    <img
                                        src={item.src2}
                                        className="absolute left-0 top-0 cursor-pointer opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                        alt=""
                                    />
                                </div>
                            )}
                            {index % 2 === 1 && <img src={item.src} alt="" />}
                        </div>
                    );
                })}
            </section>
        </AnimatedSection>
    );
};

export default Partners;
