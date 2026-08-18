import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function AddressModal({ address, onClose, onSave }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const [formData, setFormData] = useState(address);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        router.put('/dashboardUpdateAddress', formData, {
            onSuccess: () => {
                console.log("sent");
                toast.success('Account updated successfully');
            },
                onFinish: () => {
            },
        });
    };

    return (
        // Overlay
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >
            {/* Modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl"
            >
                {/* Header */}
                <div className="border-b px-5 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-[#1A1A1A]">
                            Edit Address
                        </h2>

                        <button
                            onClick={onClose}
                            className="text-2xl leading-none text-gray-400 transition hover:text-gray-600"
                        >
                            ×
                        </button>
                    </div>
                </div>
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 p-5 sm:p-6">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Full Name
                        </label>

                        <input
                            type="name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#00B207]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#00B207]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Address
                        </label>

                        <textarea
                            type="text"
                            required
                            value={formData.address}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    address: e.target.value,
                                })
                            }
                            rows={4}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#00B207]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>

                        <input
                            type="phone"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                })
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#00B207]"
                        />
                    </div>
                    {/* Footer */}
                    <div className="flex flex-col-reverse gap-3 border-t p-5 sm:flex-row sm:justify-end">
                        <button
                            onClick={onClose}
                            className="rounded-full border px-6 py-3 font-medium transition hover:bg-gray-200"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-full bg-[#00B207] px-6 py-3 font-medium text-white transition hover:opacity-90"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
