import Breadcrumb from '@/Components/Breadcrumb';
import AccountLayout from '@/Components/Layout/AccountLayout';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import OrdersTable from '../Account/OrdersTable';

export default function OrderHistory({orderso}) {
    console.log(orderso);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;
    return (
        <>
            <MainLayout>
                <Head title="Order History" />
                <Breadcrumb
                    items={[
                        {
                            label: 'Account',
                            href: '/account',
                        },
                        {
                            label: 'Order History',
                        },
                    ]}
                    backgroundImage="/images/breadcrumbs.png"
                />
                <AccountLayout>
                    <div className="overflow-x-auto rounded-lg border border-[#E5E5E5] p-4">
                        <h2 className="p-4 text-lg font-medium leading-[150%] text-[#1A1A1A]">
                            Order History
                        </h2>
                        <OrdersTable orders={orderso} />
                        <div className="mt-8 flex items-center justify-center gap-2">
                            {/* Previous */}
                            <button
                                disabled={currentPage === 1}
                                onClick={() =>
                                    setCurrentPage((prev) => prev - 1)
                                }
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#666666] transition-all duration-300 hover:border-[#20B526] hover:text-[#20B526] disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                <FaAngleLeft />
                            </button>

                            {/* Pages */}
                            {[1, 2, 3].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${
                                        currentPage === page
                                            ? 'bg-[#20B526] text-white shadow-md'
                                            : 'text-[#666666] hover:bg-[#EDF2EE] hover:text-[#20B526]'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}

                            {/* Next */}
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() =>
                                    setCurrentPage((prev) => prev + 1)
                                }
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#666666] transition-all duration-300 hover:border-[#20B526] hover:text-[#20B526] disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                <FaAngleRight />
                            </button>
                        </div>
                    </div>
                </AccountLayout>
            </MainLayout>
        </>
    );
}
