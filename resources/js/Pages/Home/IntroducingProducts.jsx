import { AnimatedSection } from '@/Components/Layout/AnimatedSection';

const products = [
    {
        id: 1,
        discount: 'Sale 50%',
        src: '/images/Home/Products/Fruits/apple.png',
        name: 'Green Apple',
        discountPrice: '$14.99',
        price: '$20.00',
        star: 4,
    },
    {
        id: 2,
        src: '/images/Home/Products/Veges/cabbage.png',
        name: 'Chanise Cabbage',
        price: '$14.99',
        star: 4,
    },
    {
        id: 3,
        src: '/images/Home/Products/Veges/capsicum.png',
        name: 'Green Capsicum',
        price: '$14.99',
        star: 4,
    },
    {
        id: 4,
        src: '/images/Home/Products/Veges/ladiesFinger.png',
        name: 'Ladies Finger',
        price: '$14.99',
        star: 4,
    },
    {
        id: 5,
        src: '/images/Home/Products/Fruits/peach.png',
        name: 'Fresh Peach',
        price: '$14.99',
        star: 4,
    },
    {
        id: 6,
        src: '/images/Home/Products/Fruits/orange.png',
        name: 'Orange',
        price: '$14.99',
        star: 4,
    },
    {
        id: 7,
        src: '/images/Home/Products/Veges/tomato.png',
        name: 'Red Tomatos',
        price: '$14.99',
        star: 4,
    },
    {
        id: 8,
        src: '/images/Home/Products/Veges/pepper.png',
        name: 'Pepper',
        price: '$14.99',
        star: 4,
    },
];

const IntroducingProducts = () => {
    return (
        <AnimatedSection className="relative z-10 h-[800px]">
            <section className="container mx-auto px-4 py-20">hello</section>
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
