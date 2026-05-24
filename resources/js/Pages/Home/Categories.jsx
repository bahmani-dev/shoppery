import { AnimatedSection } from '@/Components/Layout/AnimatedSection';

const categories = [
    {
        id: 1,
        src: '/images/Home/Category/group/1.png',
        name: 'Vegetables',
        productsNum: '165 Products',
    },
    {
        id: 2,
        src: '/images/Home/Category/group/2.png',
        name: 'Fresh Fruit',
        productsNum: '137 Products',
    },
    {
        id: 3,
        src: '/images/Home/Category/group/3.png',
        name: 'Fish',
        productsNum: '34 Products',
    },
    {
        id: 4,
        src: '/images/Home/Category/group/4.png',
        name: 'Meat',
        productsNum: '165 Products',
    },
    {
        id: 5,
        src: '/images/Home/Category/group/5.png',
        name: 'Water and Drinks',
        productsNum: '48 Products',
    },
    {
        id: 6,
        src: '/images/Home/Category/group/6.png',
        name: 'Snacks',
        productsNum: '165 Products',
    },
];

const Categories = () => {
    return (
        <AnimatedSection className="relative bg-[#F7F7F7]">
            <section className="container mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-20">
                <div className="flex flex-wrap justify-center gap-4 xl:justify-between">
                    <h1 className="text-[25px] font-semibold leading-[120%] tracking-[0%] text-[#1A1A1A] md:text-[30px] lg:text-[35px] xl:text-[40px]">
                        Shop by Top categories
                    </h1>
                    <button className="flex items-center gap-2 text-[14px] font-medium leading-[150%] tracking-[0%] text-[#00B207] lg:text-[16px]">
                        View All{' '}
                        <div>
                            <img src="/images/Home/Category/arrow.png" alt="" />
                        </div>
                    </button>
                </div>
                <div className="relative flex flex-wrap justify-center gap-2">
                    {categories.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="group flex h-[210px] w-[200px] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-[1px] border-[#EDEDED] bg-[#FFFFFF] transition-all duration-300 ease-in-out hover:border-[#2C742F] hover:shadow-[0_0_10px_1px_#20B52652]"
                            >
                                <img src={item.src} alt="icon" />
                                <h2 className="text-[18px] font-medium leading-[150%] text-[#1A1A1A] transition-all ease-in-out group-hover:text-[#2C742F]">
                                    {item.name}
                                </h2>
                                <p className="text-[14px] font-normal leading-[150%] text-[#808080]">
                                    {item.productsNum}
                                </p>
                            </div>
                        );
                    })}

                    <button className="absolute -left-20 top-[82.5px] hidden xl:block">
                        <img src="/images/Home/ArrowL.png" alt="" />
                    </button>
                    <button className="absolute -right-20 top-[82.5px] hidden xl:block">
                        <img src="/images/Home/ArrowR.png" alt="" />
                    </button>
                </div>
            </section>
            <div className="absolute -right-3 bottom-10 hidden lg:block">
                <img src="/images/Home/Category/sideDesign.png" alt="" />
            </div>
            <div className="absolute bottom-1 right-60">
                <img src="/images/Home/Category/leaf.png" alt="" />
            </div>
        </AnimatedSection>
    );
};

export default Categories;
