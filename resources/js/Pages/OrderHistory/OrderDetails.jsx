import Breadcrumb from '@/Components/Breadcrumb';
import AccountLayout from '@/Components/Layout/AccountLayout';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head, router } from '@inertiajs/react';

export default function Orderdetails({order, user, address}) {
    console.log(user);
    console.log(address);
    console.log(order);
    const steps = ['Order received', 'Processing', 'On the way', 'Delivered'];
    const currentStep = 1;
    const headers = ['PRODUCT', 'PRICE', 'QUANTITY', 'SUBTOTAL'];
    const products = [
        {
            image: '/images/redcapsicum.png',
            name: 'Red Capsicum',
            price: '$14.00',
            quantity: 'x5',
            subtotal: '$70.00',
        },
        {
            image: '/images/greencapsicum.png',
            name: 'Green Capsicum',
            price: '$14.00',
            quantity: 'x2',
            subtotal: '$28.00',
        },
        {
            image: '/images/greenchill.png',
            name: 'Green Chill',
            price: '$14.00',
            quantity: 'x2',
            subtotal: '$28.00',
        },
    ];

    const calculateDiscount = () => {
        return order.order_item[0].product.discount * 100;
    }

    const handleTotal = () => {
        return +((1 - order.order_item[0].product.discount) * order.total_price).toFixed(2);
    }
    return (
        <>
            <MainLayout>
                <Head title="Order Details" />
                <Breadcrumb
                    items={[
                        {
                            label: 'Account',
                            href: '/account',
                        },
                        {
                            label: 'Order History',
                            href: '/orders',
                        },
                        {
                            label: 'Order Details',
                        },
                    ]}
                    backgroundImage="/images/breadcrumbs.png"
                />
                <AccountLayout>
                    <div className="overflow-hidden rounded-lg border border-[#E5E5E5] bg-white">
                        {/* Header */}
                        <div className="flex flex-col gap-4 rounded-t-lg border-b border-[#E5E5E5] p-6 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-xl font-medium leading-[150%] text-[#1A1A1A]">
                                    Order Details
                                </h3>
                                <p className="text-[14px] font-normal leading-[150%] text-[#4D4D4D]">
                                    {' '}
                                    • {order.order_date}
                                </p>
                                <span className="text-[14px] font-normal leading-[150%] text-[#4D4D4D]">
                                    {' '}
                                    • {order.order_item.length} Products
                                </span>
                            </div>
                            <button
                                onClick={() => router.visit('/orders')}
                                className="text-base font-medium leading-[150%] text-[#00B207]"
                            >
                                Back to List
                            </button>
                        </div>
                        {/* Main */}
                        <div className="grid grid-cols-1 border-b border-[#E5E5E5] lg:grid-cols-3">
                            {/* Billing Address */}
                            <div className="border-[#E5E5E5] p-6 lg:border-r">
                                <p className="text-xs font-medium uppercase leading-[100%] text-[#999999]">
                                    Billing Address
                                </p>
                                <h3 className="mt-4 text-base font-normal leading-[150%] text-[#1A1A1A]">
                                    {user.name}
                                </h3>
                                <p className="mt-2 text-[14px] font-normal leading-[150%] text-[#666666]">
                                    {address.address_text}
                                </p>
                                <div className="mt-4">
                                    <span className="text-xs font-medium uppercase leading-[100%] text-[#999999]">
                                        Email
                                    </span>
                                    <p className="text-[14px] font-normal leading-[150%] text-[#1A1A1A]">
                                        {user.email}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <span className="text-xs font-medium uppercase leading-[100%] text-[#999999]">
                                        phone
                                    </span>
                                    <p className="text-[14px] font-normal leading-[150%] text-[#1A1A1A]">
                                        {user.phonenumber}
                                    </p>
                                </div>
                            </div>
                            {/* Shipping Address */}
                            <div className="border-t border-[#E5E5E5] p-6 lg:border-r lg:border-t-0">
                                <p className="text-xs font-medium uppercase leading-[100%] text-[#999999]">
                                    Shipping Address
                                </p>
                                <h3 className="mt-4 text-base font-normal leading-[150%] text-[#1A1A1A]">
                                    {user.name}
                                </h3>
                                <p className="mt-2 text-[14px] font-normal leading-[150%] text-[#666666]">
                                    {order.shipping_address.text}
                                </p>
                                <div className="mt-4">
                                    <span className="text-xs font-medium uppercase leading-[100%] text-[#999999]">
                                        Email
                                    </span>
                                    <p className="text-[14px] font-normal leading-[150%] text-[#1A1A1A]">
                                        {user.email}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <span className="text-xs font-medium uppercase leading-[100%] text-[#999999]">
                                        phone
                                    </span>
                                    <p className="text-[14px] font-normal leading-[150%] text-[#1A1A1A]">
                                        {user.phonenumber}
                                    </p>
                                </div>
                            </div>
                            {/* Summary Card */}
                            <div className="">
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    <div className="border-b p-4 sm:border-r">
                                        <p className="text-xs font-medium uppercase leading-[100%] text-[#999999]">
                                            Order Id
                                        </p>
                                        <p className="mt-2 text-[14px] font-normal leading-[150%] text-[#1A1A1A]">
                                            #{order.id}
                                        </p>
                                    </div>
                                    <div className="border-b p-4">
                                        <p className="text-xs font-medium uppercase leading-[100%] text-[#999999]">
                                            Payment Method
                                        </p>
                                        <p className="mt-2 text-[14px] font-normal leading-[150%] text-[#1A1A1A]">
                                            {order.payment_method}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="">
                                        <div className="flex justify-between border-b border-[#E5E5E5] p-3">
                                            <span className="text-[14px] font-normal leading-[150%] text-[#666666]">
                                                Subtotal:
                                            </span>
                                            <span className="text-[14px] font-medium leading-[150%] text-[#1A1A1A]">
                                                {order.total_price}
                                            </span>
                                        </div>

                                        <div className="flex justify-between border-b border-[#E5E5E5] p-3">
                                            <span className="text-[14px] font-normal leading-[150%] text-[#666666]">
                                                Discount:
                                            </span>
                                            <span className="text-[14px] font-medium leading-[150%] text-[#1A1A1A]">
                                                % {calculateDiscount()}
                                            </span>
                                        </div>

                                        <div className="flex justify-between border-b border-[#E5E5E5] p-3">
                                            <span className="text-[14px] font-normal leading-[150%] text-[#666666]">
                                                Shipping:
                                            </span>
                                            <span className="text-[14px] font-medium leading-[150%] text-[#1A1A1A]">
                                                Free
                                            </span>
                                        </div>

                                        <div className="flex justify-between p-3">
                                            <span className="text-lg font-normal leading-[150%] text-[#1A1A1A]">
                                                Total
                                            </span>
                                            <span className="text-lg font-semibold leading-[150%] text-[#2C742F]">
                                                $ {handleTotal()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Progress Tracker */}
                        <div className="border-b border-[#E5E5E5] px-8 py-10">
                            <div className="grid grid-cols-4">
                                {steps.map((step, index) => {
                                    const isCompleted = index < currentStep;
                                    const isCurrent = index === currentStep;

                                    return (
                                        <div
                                            key={index}
                                            className="relative flex flex-1 flex-col items-center"
                                        >
                                            {/* Line */}
                                            {index !== steps.length - 1 && (
                                                <div
                                                    className={`absolute left-1/2 top-5 h-[8px] w-full ${
                                                        index < currentStep
                                                            ? 'bg-[#20B526]'
                                                            : 'bg-[#E5E5E5]'
                                                    }`}
                                                />
                                            )}

                                            {/* Circle */}
                                            <div
                                                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                                                    isCompleted
                                                        ? 'bg-[#00B207] text-white'
                                                        : isCurrent
                                                          ? 'bg-[#00B207] text-white'
                                                          : 'border-2 border-dashed border-[#20B526] bg-white text-[#20B526]'
                                                }`}
                                            >
                                                {isCompleted ? (
                                                    <svg
                                                        className="h-4 w-4"
                                                        fill="none"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M16 5L8 13L4 9"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                ) : (
                                                    String(index + 1).padStart(
                                                        2,
                                                        '0',
                                                    )
                                                )}
                                            </div>

                                            {/* Label */}
                                            <span
                                                className={`mt-3 text-center text-sm font-medium leading-[150%] ${
                                                    isCompleted || isCurrent
                                                        ? 'text-[#2C742F]'
                                                        : 'text-[#999999]'
                                                }`}
                                            >
                                                {step}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Product */}
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[700px]">
                                <thead className="bg-[#F2F2F2]">
                                    <tr>
                                        {headers.map((header) => (
                                            <th
                                                key={header}
                                                className="p-4 text-left text-xs font-medium uppercase leading-[100%] text-[#4D4D4D]"
                                            >
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.order_item.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="border-b"
                                        >
                                            <td className="p-4">
                                                <div className="flex items-center gap-4 text-sm font-medium leading-[150%] text-[#1A1A1A]">
                                                    <img
                                                        src={item.product.images[0].image_url}
                                                        alt={item.product.name}
                                                        className="h-16 w-16"
                                                    />
                                                    {item.product.name}
                                                </div>
                                            </td>
                                            <td className="px-4 py-5 text-sm font-normal leading-[150%] text-[#1A1A1A]">
                                                {item.product.price}
                                            </td>
                                            <td className="px-4 py-5 text-sm font-normal leading-[150%] text-[#1A1A1A]">
                                                {item.product.quantity}
                                            </td>
                                            <td className="px-4 py-5 text-sm font-medium leading-[150%] text-[#1A1A1A]">
                                                {item.product.price}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </AccountLayout>
            </MainLayout>
        </>
    );
}
