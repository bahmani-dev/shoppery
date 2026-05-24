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
            <section className="container mx-auto max-w-7xl px-4 py-10 md:py-16 lg:py-20">
                <div className="overflow-hidden rounded-lg border border-[#E5E5E5] bg-white shadow-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {Service.map((item, index) => (
                            <div
                                key={item.id}
                                className={`group flex flex-col gap-4 p-6 transition-all duration-300 hover:bg-[#00B207] md:p-8 ${
                                    index !== Service.length - 1
                                        ? 'border-b border-[#E5E5E5] sm:border-b lg:border-b-0 lg:border-r'
                                        : ''
                                } `}
                            >
                                <img
                                    className="h-[60px] w-[60px] object-contain"
                                    src={item.src}
                                    alt={item.title}
                                />

                                <h2 className="text-base font-semibold text-[#1A1A1A] transition-colors group-hover:text-white md:text-lg">
                                    {item.title}
                                </h2>

                                <p className="text-sm text-[#808080] transition-colors group-hover:text-white">
                                    {item.des}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
};

export default Services;
