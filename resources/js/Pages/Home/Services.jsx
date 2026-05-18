import { AnimatedSection } from '@/Components/Layout/AnimatedSection';

const Service = [
    {
        id: 1,
        src: '/images/Home/Services/Icon1.png',
        title: 'Free Shipping',
        des: 'Free shipping with discount',
    },
    {
        id: 2,
        src: '/images/Home/Services/Icon2.png',
        title: 'Great Support 24/7',
        des: 'Instant access to contact',
    },
    {
        id: 3,
        src: '/images/Home/Services/Icon3.png',
        title: '100% Secure Payment',
        des: 'We ensure your money is safe',
    },
    {
        id: 4,
        src: '/images/Home/Services/Icon4.png',
        title: 'Money-Back Guarantee',
        des: '30 days money-back guarantee',
    },
];

const Services = () => {
    return (
        <AnimatedSection className="relative flex justify-center">
            <section className="container z-10 mx-auto flex justify-center px-4 py-20">
                <div className="flex rounded-[8px] border-[1px] border-[#ccc] bg-white shadow-md">
                    {Service.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="group flex h-[222px] w-[330px] flex-col gap-3 rounded-[8px] border-r-[1px] border-[#ccc] p-8 hover:bg-[#00B207]"
                            >
                                <img
                                    className="h-[70px] w-[70px]"
                                    src={item.src}
                                    alt="icon"
                                />
                                <h2 className="text-lg font-semibold leading-[150%] tracking-[0%] text-[#1A1A1A] group-hover:text-white">
                                    {item.title}
                                </h2>
                                <p className="text-sm font-medium leading-[150%] tracking-[0%] text-[#808080] group-hover:text-white">
                                    {item.des}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </AnimatedSection>
    );
};

export default Services;
