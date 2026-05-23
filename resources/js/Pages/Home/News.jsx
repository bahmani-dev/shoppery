import { AnimatedSection } from '@/Components/Layout/AnimatedSection';

const cards = [
    {
        id: 1,
        src: '/images/Home/News/card1.png',
        date: '18',
        month: 'NOV',
        type: 'Fruit',
        by: 'High Garden',
        comment: '65 Comments',
        des: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
    },
    {
        id: 2,
        src: '/images/Home/News/card2.png',
        date: '23',
        month: 'JAN',
        type: 'Food',
        by: 'Ramsy',
        comment: '65 Comments',
        des: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
    },
    {
        id: 3,
        src: '/images/Home/News/card3.png',
        date: '21',
        month: 'OCT',
        type: 'Salad',
        by: 'High Garden',
        comment: '70 Comments',
        des: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
    },
];

const News = () => {
    return (
        <AnimatedSection className="relative bg-[#F2F2F2]">
            <section className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-20">
                <h3 className="text-[16px] font-normal leading-[120%] tracking-[0%] text-[#00B207]">
                    BLOG
                </h3>
                <h2 className="mb-7 text-[40px] font-semibold leading-[120%] tracking-[0%] text-[#1A1A1A]">
                    Latest News
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {cards.map((item) => {
                        return (
                            <div
                                className="group h-[494px] w-[400px] overflow-hidden rounded-lg shadow-lg"
                                key={item.id}
                            >
                                <div className="relative">
                                    <img src={item.src} alt="" />
                                    <div className="absolute bottom-6 left-6 flex h-[58px] w-[58px] flex-col items-center justify-center rounded-[4px] bg-white">
                                        <p className="text-[20px] font-medium leading-[150%]">
                                            {item.date}
                                        </p>
                                        <p className="text-[12px] font-medium leading-[100%] tracking-[3%] text-[#808080]">
                                            {item.month}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex h-[200px] flex-col justify-center gap-4 bg-white px-5 py-5">
                                    <div className="flex gap-3">
                                        <div className="flex gap-1">
                                            <img
                                                src="/images/Home/News/tag.png"
                                                alt=""
                                            />
                                            <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#4D4D4D]">
                                                {item.type}
                                            </p>
                                        </div>
                                        <div className="flex gap-1">
                                            <img
                                                src="/images/Home/News/by.png"
                                                alt=""
                                            />
                                            <p className="whitespace-nowrap text-[14px] font-normal leading-[150%] tracking-[0%] text-[#4D4D4D]">
                                                {item.by}
                                            </p>
                                        </div>
                                        <div className="flex gap-1">
                                            <img
                                                src="/images/Home/News/comment.png"
                                                alt=""
                                            />
                                            <p className="whitespace-nowrap text-[14px] font-normal leading-[150%] tracking-[0%] text-[#4D4D4D]">
                                                {item.comment}
                                            </p>
                                        </div>
                                    </div>
                                    <h2 className="text-[18px] font-medium leading-[150%] tracking-[0%] text-[#1A1A1A] transition duration-200 ease-linear group-hover:text-[#2C742F]">
                                        {item.des}
                                    </h2>
                                    <button className="flex w-[114px] items-center justify-center gap-2 whitespace-nowrap">
                                        <span className="text-[16px] font-semibold leading-[120%] tracking-[0%] text-[#00B207]">
                                            Read More
                                        </span>{' '}
                                        <div>
                                            <img
                                                src="/images/Home/News/arrow.png"
                                                alt=""
                                            />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <div className="absolute left-0 top-0 hidden h-full w-full 2xl:block">
                <img
                    className="absolute"
                    src="/images/Home/News/r1.png"
                    alt=""
                />
                <img
                    className="absolute left-40"
                    src="/images/Home/News/r2.png"
                    alt=""
                />
                <img
                    className="absolute top-20"
                    src="/images/Home/News/r3.png"
                    alt=""
                />
                <img
                    className="absolute top-[260px]"
                    src="/images/Home/News/r4.png"
                    alt=""
                />
                <img
                    className="absolute left-40 top-[330px]"
                    src="/images/Home/News/r5.png"
                    alt=""
                />
                <img
                    className="absolute left-20 top-[480px]"
                    src="/images/Home/News/r6.png"
                    alt=""
                />
                <img
                    className="absolute bottom-0"
                    src="/images/Home/News/r7.png"
                    alt=""
                />
            </div>
            <div className="absolute right-0 top-0 hidden h-full w-full 2xl:block">
                <img
                    className="absolute right-0 top-0"
                    src="/images/Home/News/l1.png"
                    alt=""
                />
                <img
                    className="absolute right-10 top-0"
                    src="/images/Home/News/l2.png"
                    alt=""
                />
                <img
                    className="absolute right-[260px] top-0"
                    src="/images/Home/News/l3.png"
                    alt=""
                />
                <img
                    className="absolute right-10 top-40"
                    src="/images/Home/News/l4.png"
                    alt=""
                />
                <img
                    className="absolute right-5 top-[300px]"
                    src="/images/Home/News/l5.png"
                    alt=""
                />
                <img
                    className="absolute right-10 top-[580px]"
                    src="/images/Home/News/l6.png"
                    alt=""
                />
            </div>
            <div className="absolute left-[530px] top-[120px] hidden xl:block">
                <img src="/images/Home/News/leaf.png" alt="" />
            </div>
        </AnimatedSection>
    );
};

export default News;
