import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import ProductCard from '../Shop/ProductCard';

const products = [
    {
        id: 1,
        image: '/images/Home/Products/Fruits/apple.png',
        title: 'Green Apple',
        price: '$14.99',
        oldPrice: '$20.00',
        stock: true,
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
        image: '/images/Home/Products/Veges/lettuce.png',
        title: 'Green Lettuce',
        price: '$14.99',
        stock: true,
    },
    {
        id: 4,
        image: '/images/Home/Products/Veges/pepper.png',
        title: 'Green Chilli',
        price: '$14.99',
        stock: true,
    },
    {
        id: 5,
        image: '/images/Home/Products/Veges/corn.png',
        title: 'Corn',
        price: '$14.99',
        stock: true,
    },
];

const BestSellerProducts = () => {
    return (
        <AnimatedSection>
            <section className="container mx-auto flex max-w-[1280px] flex-col gap-8 px-4 pb-10">
                <div className="flex justify-center gap-6 xl:justify-between">
                    <h1 className="text-[25px] font-semibold leading-[120%] tracking-[0%] text-[#1A1A1A] md:text-[30px] lg:text-[35px] xl:text-[40px]">
                        Best Seller Products
                    </h1>
                    <button className="flex items-center gap-2 text-[14px] font-medium leading-[150%] tracking-[0%] text-[#00B207] lg:text-[16px]">
                        View All{' '}
                        <div>
                            <img src="/images/Home/Category/arrow.png" alt="" />
                        </div>
                    </button>
                </div>
                <div className="flex flex-wrap justify-center gap-4 2xl:flex-nowrap">
                    {products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        );
                    })}
                </div>
            </section>
        </AnimatedSection>
    );
};

export default BestSellerProducts;
