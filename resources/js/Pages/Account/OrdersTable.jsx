import { router } from '@inertiajs/react';

export default function OrdersTable({ orders, limit }) {
    const visibleOrders = limit ? orders.slice(0, limit) : orders;
    return (
        <div className="w-full table-fixed">
            <div className="hidden max-h-[500px] overflow-auto md:block">
                <table className="w-full">
                    {/* Head */}
                    <thead className="sticky top-0 z-10 bg-[#F2F2F2]">
                        <tr>
                            <th className="whitespace-nowrap px-3 py-3 text-left text-[12px] font-medium leading-[100%] text-[#4D4D4D] sm:px-6">
                                ORDER ID
                            </th>

                            <th className="px-3 py-3 text-left text-xs font-medium leading-[100%] text-[#4D4D4D] sm:px-6">
                                DATE
                            </th>

                            <th className="px-3 py-3 text-left text-xs font-medium leading-[100%] text-[#4D4D4D] sm:px-6">
                                TOTAL
                            </th>

                            <th className="px-3 py-3 text-left text-xs font-medium leading-[100%] text-[#4D4D4D] sm:px-6">
                                STATUS
                            </th>

                            <th className="px-3 py-3 text-left text-xs font-medium leading-[100%] text-[#4D4D4D] sm:px-6"></th>
                        </tr>
                    </thead>
                    {/* Data or Table */}
                    <tbody>
                        {visibleOrders.map((order) => (
                            <tr key={order.id}>
                                <td className="px-3 py-4 text-[14px] font-normal leading-[150%] text-[#333333] sm:px-6">
                                    {order.id}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-[14px] font-normal leading-[150%] text-[#333333] sm:px-6">
                                    {order.order_date}
                                </td>
                                <td className="font-meduim whitespace-nowrap px-3 py-4 text-[14px] leading-[150%] text-[#333333] sm:px-6">
                                    {order.total_price}
                                </td>
                                <td className="px-3 py-4 text-[14px] font-normal leading-[150%] text-[#333333] sm:px-6">
                                    {order.status}
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            router.visit(`/order-details/${order.id}`)
                                        }
                                        className="whitespace-nowrap text-[14px] font-medium leading-[150%] text-[#00B207]"
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* CARD */}
            <div className="space-y-4 md:hidden">
                {visibleOrders.map((order) => (
                    <div
                        key={order.id}
                        className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md"
                    >
                        <div className="flex items-center justify-between border-b pb-3">
                            <div>
                                <p>Order ID</p>
                                <p className="font-semibold text-gray-900">
                                    {order.id}
                                </p>
                            </div>
                            <span
                                className={`rounded-full px-3 py-1 text-xs font-medium ${
                                    order.status === 'delivered'
                                        ? 'bg-green-100 text-green-700'
                                        : order.status === 'pending'
                                          ? 'bg-yellow-100 text-yellow-700'
                                          : order.status === 'Processing'
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'bg-red-100 text-red-700'
                                }`}
                            >
                                {order.status}
                            </span>
                        </div>
                        <div className="mt-3 space-y-3 text-sm text-gray-700">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Date</span>
                                <span>{order.order_date}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Total</span>
                                <span className="font-medium">
                                    {order.total_price}
                                </span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button 
                            onClick={() =>
                                router.visit(`/order-details/${order.id}`)
                            }
                            className="w-full rounded-lg bg-[#00B207] py-2 text-sm font-medium text-white transition hover:bg-green-700">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
