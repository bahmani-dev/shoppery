import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import ProductCard from '../Shop/ProductCard';

const products = [
    {
        id: 1,
        image: '/images/Home/Products/Fruits/apple.png',
        title: 'Green Apple',
        price: '$14.99',
        oldPrice: '$20.00',
        stock: false,
    },
    {
        id: 2,
        image: '/images/Home/Products/Veges/cabbage.png',
        title: 'Chanise Cabbage',
        price: '$14.99',
        stock: true,
    },
    {
        id: 3,
        image: '/images/Home/Products/Veges/capsicum.png',
        title: 'Green Capsicum',
        price: '$14.99',
        stock: true,
    },
    {
        id: 4,
        image: '/images/Home/Products/Veges/ladiesFinger.png',
        title: 'Ladies Finger',
        price: '$14.99',
        stock: true,
    },
];

const IntroducingProducts = () => {
    return (
        <AnimatedSection className="relative z-10">
            <section className="container relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20">
                <div className="flex justify-center gap-6 lg:justify-between">
                    <h1 className="text-[25px] font-semibold leading-[120%] tracking-[0%] text-[#1A1A1A] md:text-[30px] lg:text-[35px] xl:text-[40px]">
                        Featured Products
                    </h1>
                    <button className="flex items-center gap-2 text-[14px] font-medium leading-[150%] tracking-[0%] text-[#00B207] lg:text-[16px]">
                        View All{' '}
                        <div>
                            <img src="/images/Home/Category/arrow.png" alt="" />
                        </div>
                    </button>
                </div>
                <div className="flex flex-wrap justify-center gap-6 xl:justify-between">
                    {products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        );
                    })}
                </div>
            </section>
            <div className="absolute bottom-7 left-0">
                <img src="/images/Home/Products/sideDesign.png" alt="" />
            </div>
            <div className="absolute bottom-[-40px] left-[200px]">
                <img src="/images/Home/Products/leaf.png" alt="" />
            </div>
        </AnimatedSection>
    );
};

export default IntroducingProducts;
