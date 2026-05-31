import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Wishlist() {
    const cards = [
        {
            image: '/images/capsicum2.png',
            title: 'Green Capsicum',
            price: '$14.99',
            status: 'In Stock',
            button: 'add to card',
            cross: 'cross',
        },
        {
            image: '/images/cabbage.png',
            title: 'Chinese Cabbage',
            price: '$45.00',
            status: 'In Stock',
            button: 'add to card',
            cross: 'cross',
        },
        {
            image: '/images/mango.png',
            title: 'Sujapuri Mango',
            price: '$09.00',
            status: 'Out of Stock',
            button: 'add to cart',
            cross: 'cross',
        },
    ];
    function StatusBadge({ status }) {
        return (
            <div className="flex items-center justify-start">
                <span
                    className={`h-[30px] rounded px-3 py-1 text-sm ${
                        status === 'In Stock'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                    }`}
                >
                    {status}
                </span>
            </div>
        );
    }
    function Button({ button }) {
        return (
            <a href='/cart'>
            
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-[50px] w-[300px] items-center justify-center gap-3 rounded-3xl bg-[#00B207] text-white md:h-[45px] md:w-[100px] md:text-[12px] lg:h-[50px] lg:w-[150px] lg:text-[14px] xl:w-[200px] ${
                        button === `add to cart`
                            ? `bg-green-700`
                            : `bg-gray-500`
                    }} `}
                >
                    {button}
                </motion.button>
            </a>
        );
    }
    return (
        <MainLayout>
            <Head title="Wishlist" />
            <Breadcrumb
                items={[
                    {
                        label: 'Wishlist',
                    },
                ]}
                backgroundImage="/images/breadcrumbs.png"
            ></Breadcrumb>
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-center text-4xl font-semibold">
                    My Wishlist
                </h1>
                <div className="my-6 hidden rounded-[8px] border md:block">
                    <div className="">
                        <div className="grid h-[40px] grid-cols-4 items-center gap-10 border-b px-6 text-[#808080]">
                            <p>PRODUCT</p>
                            <p>PRICE</p>
                            <p>STOCK STATUS</p>
                            <p></p>
                        </div>
                        <div className="px-6 py-4">
                            {cards.map((card, index) => (
                                <div
                                    className="grid grid-cols-4 items-center justify-between gap-10"
                                    key={index}
                                >
                                    <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-around">
                                        <img
                                            className="h-[100px] w-[100px]"
                                            src={card.image}
                                            alt="Products"
                                        />
                                        <div>
                                            <p className="font-medium">
                                                {card.title}
                                            </p>
                                        </div>
                                    </div>
                                    <p>{card.price}</p>
                                    <StatusBadge status={card.status} />
                                    <div className="flex items-center justify-center gap-4">
                                        <Button
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                            button={card.button}
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex h-[30px] w-[30px] items-center justify-center rounded-3xl border-[1px] border-gray-300 font-light font-semibold text-[#666666]"
                                        >
                                            X
                                        </motion.button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mx-8 my-6 flex flex-col justify-center gap-6 md:hidden">
                    {cards.map((card, index) => (
                        <div key={index} className="rounded-md border p-4">
                            <div>
                                <div className="grid grid-cols-2">
                                    <img
                                        className=""
                                        src={card.image}
                                        alt="Product"
                                    />
                                    <div className="flex flex-col items-start justify-center gap-2">
                                        <h1 className="text-center font-medium">
                                            {card.title}
                                        </h1>
                                        <p className="text-center font-medium">
                                            Price: {card.price}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <p className="font-medium">
                                                Status:
                                            </p>
                                            <StatusBadge status={card.status} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <Button button={card.button} />
                                    <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex h-[30px] w-[30px] items-center justify-center rounded-3xl border-[1px] border-gray-300 font-light font-semibold text-[#666666]"
                                    >
                                        X
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}
