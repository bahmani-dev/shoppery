import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function ProfileModal({ user, onClose, onSave }) {
    const [formData, setFormData] = useState({
        name: user.name,
        role: user.role,
        img: user.profile_image,
    });

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

   const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        setFormData((prev) => ({
            ...prev,
            img: imageUrl,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        router.put('/dashboardUpdate', formData, {
            onSuccess: () => {
                console.log("sent");
                toast.success('Account updated successfully');
            },
            onFinish: () => {
            },
        });
    };

    return (
        // layout
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >
            {/* Modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white shadow-xl"
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-4">
                    <h2 className="text-xl font-semibold text-[#1A1A1A]">
                        Edit Profile
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl text-gray-500 transition hover:text-black"
                    >
                        ×
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="space-y-5 p-6">
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e)=>{
                                handleChange('name', e.target.value)
                            }}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#00B207]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Role
                        </label>

                        <input
                            type="text"
                            name="role"
                            disabled
                            value={formData.role}
                            className="w-full cursor-not-allowed rounded-lg border bg-gray-100 px-4 py-3 text-gray-500"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <label className="block text-sm font-medium">
                            Profile Photo
                        </label>

                        <label
                            htmlFor="profile-image"
                            className="group relative cursor-pointer"
                        >
                            <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-[#00B207]">
                                <img
                                    src={formData.img}
                                    alt="Profile Preview"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition group-hover:opacity-100">
                                <span className="text-sm font-medium text-white">
                                    Change
                                </span>
                            </div>
                        </label>

                        <input
                            id="profile-image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </div>
                    {/* Footer */}
                    <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-full border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-full bg-[#00B207] px-6 py-3 font-medium text-white transition hover:bg-[#009b06]"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
