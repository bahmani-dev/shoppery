import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head, router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Cart() {
    const [coupon, setCoupon] = useState('');

    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Green Capsicum',
            price: 14.0,
            quantity: 0,

            image: '/images/greencapsicum.png',
        },
        {
            id: 2,
            name: 'Red Capsicum',
            price: 14.0,
            quantity: 0,

            image: '/images/redcapsicum.png',
        },
    ]);

    const increaseQuantity = (id) => {
        setProducts((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item,
            ),
        );
    };
    const decreaseQuantity = (id) => {
        setProducts((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 0
                    ? {
                          ...item,
                          quantity: item.quantity - 1,
                      }
                    : item,
            ),
        );
    };

    const total = products.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0,
    );

    const removeProduct = (id) => {
        setProducts((prev) => prev.filter((item) => item.id !== id));
    };

    const returnToShop = () => {
        router.visit('/shop');
    };
    const proceedToCheckout = () => {
        router.visit('/checkout');
    };
    const updateCart = () => {
        toast.success('Cart Updated Successfully');
    };

    const applyCoupon = () => {
        if (coupon.trim().toUpperCase() === 'SAVE20') {
            toast.success('Coupon Applied Successfully');
        } else if (coupon.trim() === '') {
            toast.error('Please Enter Your Coupon');
        } else {
            toast.error('Invalid Coupon');
        }
    };

    const buttonAnimation = {
        whileHover: { scale: 1.05, y: -2 },
        whileTap: { scale: 0.95 },
        transition: { duration: 0.2 },
    };

    return (
        <MainLayout>
            <Toaster />
            <Head title="Cart" />
            <Breadcrumb
                items={[
                    {
                        label: 'Shopping cart',
                        href: '/cart',
                    },
                ]}
                backgroundImage="/images/breadcrumbs.png"
            ></Breadcrumb>
            {/* Container */}
            <section className="mx-auto max-w-7xl px-4 py-10">
                <h1 className="mb-10 text-center text-2xl font-semibold leading-[120%] text-[#1a1a1a] sm:text-3xl md:text-4xl">
                    My Shopping Cart
                </h1>
                {/* Layout */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Product Table */}
                    <div className="lg:col-span-2">
                        <div className="overflow-hidden rounded-2xl border lg:col-span-2">
                            {/* Header */}
                            <div className="hidden gap-14 border-b bg-gray-50 p-5 md:grid md:grid-cols-5">
                                <p className="text-sm font-medium leading-[120%] tracking-[3%] text-[#808080] md:col-span-2">
                                    PRODUCT
                                </p>
                                <p className="text-sm font-medium leading-[120%] tracking-[3%] text-[#808080]">
                                    PRICE
                                </p>
                                <p className="text-sm font-medium leading-[120%] tracking-[3%] text-[#808080]">
                                    QUANTITY
                                </p>
                                <p className="text-sm font-medium leading-[120%] tracking-[3%] text-[#808080]">
                                    SUBTOTAL
                                </p>
                            </div>
                            {/* Product Row */}
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex flex-col gap-6 border-b p-4 md:grid md:grid-cols-5 md:items-center"
                                >
                                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:col-span-2">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-24 w-24 object-contain sm:h-32 sm:w-32"
                                        />
                                        <h3 className="font-medium leading-[150%] text-[#1A1A1A] sm:text-lg">
                                            {product.name}
                                        </h3>
                                    </div>
                                    <div className="flex justify-between p-3">
                                        <p className="text-sm font-medium leading-[120%] tracking-[3%] text-[#808080] md:hidden">
                                            Price
                                        </p>
                                        <p className="font-normal leading-[150%] text-[#1A1A1A]">
                                            ${product.price.toFixed(2)}
                                        </p>
                                    </div>
                                    <div className="flex justify-between p-3">
                                        <p className="text-sm font-medium leading-[120%] tracking-[3%] text-[#808080] md:hidden">
                                            Quantity
                                        </p>
                                        <div className="flex w-fit items-center gap-2 rounded-full border px-3 py-2">
                                            {' '}
                                            <motion.button
                                                whileHover={{
                                                    scale: 1.15,
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                onClick={() =>
                                                    decreaseQuantity(product.id)
                                                }
                                            >
                                                <img
                                                    src="/images/Minus.svg"
                                                    alt="minus"
                                                    className="w-8 transition-opacity hover:brightness-90"
                                                />
                                            </motion.button>
                                            <p>{product.quantity}</p>
                                            <motion.button
                                                whileHover={{
                                                    scale: 1.15,
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                onClick={() =>
                                                    increaseQuantity(product.id)
                                                }
                                            >
                                                <img
                                                    src="/images/Plus.svg"
                                                    alt="plus"
                                                    className="w-8 transition-opacity hover:brightness-90"
                                                />
                                            </motion.button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between p-3">
                                        <p className="text-sm font-medium leading-[120%] tracking-[3%] text-[#808080] md:hidden">
                                            Subtotal
                                        </p>
                                        <div className="flex items-center gap-6 md:ml-6">
                                            {' '}
                                            <p className="font-normal leading-[150%] text-[#1A1A1A]">
                                                $
                                                {(
                                                    product.quantity *
                                                    product.price
                                                ).toFixed(2)}
                                            </p>
                                            <motion.button
                                                whileHover={{
                                                    scale: 1.2,
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                onClick={() =>
                                                    removeProduct(product.id)
                                                }
                                                className="shrink-0"
                                            >
                                                <img
                                                    src="/images/remove.svg"
                                                    alt="remove"
                                                    className="w-6 shrink-0 transition-opacity hover:brightness-50"
                                                />
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row">
                                <motion.button
                                    onClick={returnToShop}
                                    className="rounded-full bg-[#F2F2F2] px-8 py-3 text-sm font-semibold leading-[120%] text-[#4D4D4D] transition-colors hover:bg-gray-200"
                                    {...buttonAnimation}
                                >
                                    Return to Shop
                                </motion.button>

                                <motion.button
                                    {...buttonAnimation}
                                    onClick={updateCart}
                                    className="rounded-full bg-[#F2F2F2] px-8 py-3 text-sm font-semibold leading-[120%] text-[#4D4D4D] transition-colors hover:bg-gray-200"
                                >
                                    Update Cart
                                </motion.button>
                            </div>
                        </div>
                        {/* Coupon Section */}
                        <div className="mt-5 flex flex-col items-center gap-6 rounded-2xl border p-6 md:flex-row md:justify-between lg:flex-row lg:items-center lg:justify-between">
                            <h2 className="my-5 text-xl font-medium leading-[120%] text-[1a1a1a]">
                                Coupon Code
                            </h2>
                            <div className="relative flex flex-1 flex-col gap-5 md:block">
                                {' '}
                                <input
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                    type="text"
                                    placeholder="Enter Code"
                                    className="w-full rounded-full border px-6 py-4 pr-44 font-normal leading-[120%] text-[#999999]"
                                />
                                <motion.button
                                    {...buttonAnimation}
                                    onClick={applyCoupon}
                                    className="rounded-full bg-[#333333] px-10 py-3 text-xl font-semibold text-white transition-colors hover:bg-[#171717] md:absolute md:right-0 md:top-0"
                                >
                                    Apply Coupon
                                </motion.button>
                            </div>
                        </div>
                    </div>
                    {/* Summary Card */}
                    <div className="h-fit rounded-2xl border p-6">
                        <h1 className="mb-10 text-left text-xl font-medium leading-[150%] text-[#1A1A1A]">
                            Cart Table
                        </h1>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between border-b p-4">
                                <p className="font-normal leading-[150%] text-[#4D4D4D]">
                                    Subtotal
                                </p>
                                <p className="text-sm font-medium leading-[150%] text-[#1A1A1A]">
                                    ${total.toFixed(2)}
                                </p>
                            </div>
                            <div className="flex items-center justify-between border-b p-4">
                                <p className="font-normal leading-[150%] text-[#4D4D4D]">
                                    Shipping
                                </p>
                                <p className="text-sm font-medium leading-[150%] text-[#1A1A1A]">
                                    Free
                                </p>
                            </div>
                            <div className="flex items-center justify-between border-b p-4">
                                <p className="font-normal leading-[150%] text-[#4D4D4D]">
                                    Total
                                </p>
                                <p className="text-sm font-semibold leading-[150%] text-[#1A1A1A]">
                                    ${total.toFixed(2)}
                                </p>
                            </div>
                            <motion.button
                                {...buttonAnimation}
                                onClick={proceedToCheckout}
                                className="rounded-full bg-[#00B207] px-10 py-4 font-semibold leading-[120%] text-white transition-colors hover:bg-green-700"
                            >
                                Proceed to Checkout
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
