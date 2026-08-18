import Breadcrumb from '@/Components/Breadcrumb';
import AccountLayout from '@/Components/Layout/AccountLayout';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Button from './Button';
import Input from './Input';
import LabelForm from './LabelForm';
import PasswordInput from './PasswordInput';
import {router} from '@inertiajs/react';

export default function Settings({user, addresses}) {
    console.log(user);
    console.log(addresses);





    const [accountLoading, setAccountLoading] = useState(false);
    const [billingLoading, setBillingLoading] = useState(false);
    const [passwordLoading, setPasswordLoading] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    const imageRef = useRef(null);

    const INITIAL_ACCOUNT = {
        firstName: 'Dianne',
        lastName: 'Russell',
        email: 'dianne.russell@gmail.com',
        phone: '(603) 555-0123',
        image: '/images/profileImg.png',
    };

    const INITIAL_BILLING = {
        firstName: 'Dianne',
        lastName: 'Russell',
        companyName: 'Zakirsoft',
        street: '4140 Parl',
        country: 'United States',
        state: 'Washington Dc',
        zipCode: '20033',
        email: 'dianne.russell@gmail.com',
        phone: '(603) 555-0123',
    };
    const [accountData, setAccountData] = useState({
        ...INITIAL_ACCOUNT,
        firstName: user.name,
        lastName: user.lastname,
        email: user.email,
        phone: user.phonenumber,
        image: user.profile_image,
    });

    const [billingData, setBillingData] = useState({
        ...INITIAL_BILLING,
        firstName: user.name,
        lastName: user.lastname,
        street: addresses.address_text,
        country: addresses.country,
        state: addresses.city,
        zipCode: addresses.postal_code,
        email: user.email,
        phone: user.phonenumber,
    });

    const accountChanged = !isEqual(accountData, INITIAL_ACCOUNT);
    const billingChanged = !isEqual(billingData, INITIAL_BILLING);

    const validateAccountForm = () => {
        if (!accountData.firstName.trim()) {
            toast.error('First name is required');
            return false;
        } else if (!accountData.lastName.trim()) {
            toast.error('Last name is required');
            return false;
        } else if (!emailRegex.test(accountData.email)) {
            toast.error('Invalid email');
            return false;
        } else if (!accountData.phone.trim()) {
            toast.error('Phone is required');
            return false;
        } else return true;
    };

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handlePasswordChange = (field, value) => {
        setPasswordData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();

        if (!validatePassword()) {
            return;
        }

        setPasswordLoading(true);

        router.put('/settings/password', {
            currentPassword: passwordData.currentPassword,
            newPassword: passwordData.newPassword,
            confirmPassword: passwordData.confirmPassword,
        }, {
            onSuccess: () => {
                toast.success('Account updated successfully');
            },
            onFinish: () => {
                setPasswordLoading(false);
            },
        });
    };

    const validatePassword = () => {
        if (!passwordData.currentPassword.trim()) {
            toast.error('Current password is required');
            return false;
        }

        if (passwordData.newPassword.length < 8) {
            toast.error('Password must be at least 8 characters');
            return false;
        }

        if (!/[A-Z]/.test(passwordData.newPassword)) {
            toast.error('Password must contain uppercase letter');
            return false;
        }

        if (!/[a-z]/.test(passwordData.newPassword)) {
            toast.error('Password must contain lowercase letter');
            return false;
        }

        if (!/[0-9]/.test(passwordData.newPassword)) {
            toast.error('Password must contain number');
            return false;
        }

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            toast.error('Passwords do not match');
            return false;
        }

        return true;
    };

    const isPasswordValid = Boolean(
        passwordData.currentPassword.trim() &&
        passwordData.newPassword.length >= 8 &&
        /[A-Z]/.test(passwordData.newPassword) &&
        /[a-z]/.test(passwordData.newPassword) &&
        /[0-9]/.test(passwordData.newPassword) &&
        passwordData.newPassword === passwordData.confirmPassword,
    );

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            toast.error('Please select a valid image');
            return;
        }

        if (imageRef.current) {
            URL.revokeObjectURL(imageRef.current);
        }

        const url = URL.createObjectURL(file);
        imageRef.current = url;

        setAccountData((prev) => ({
            ...prev,
            image: url,
        }));

        e.target.value = '';
    };
    const handleAccountSubmit = async (e) => {
        e.preventDefault();

        if (!validateAccountForm()) {
            return;
        }

        setAccountLoading(true);

       router.put('/settings', accountData, {
            onSuccess: () => {
                toast.success('Account updated successfully');
            },
            onFinish: () => {
                setAccountLoading(false);
            },
        });

    };

    const handleAccountChange = (field, value) => {
        setAccountData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleBillingSubmit = async (e) => {
        e.preventDefault();

        if (!billingData.firstName.trim()) {
            return toast.error('First name is required');
        } else if (!billingData.lastName.trim()) {
            return toast.error('Last name is required');
        } else if (!emailRegex.test(billingData.email)) {
            return toast.error('Invalid email');
        } else setBillingLoading(true);

        router.put('/settings/billing', billingData, {
            onSuccess: () => {
                toast.success('Billing address updated successfully');
            },
            onFinish: () => {
                setBillingLoading(false);
            },
        });
    };

    const handleBillingChange = (field, value) => {
        setBillingData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    useEffect(() => {
        return () => {
            if (imageRef.current) {
                URL.revokeObjectURL(imageRef.current);
            }
        };
    }, []);

    return (
        <>
            <MainLayout>
                <Head title="Settings" />
                <Breadcrumb
                    items={[
                        {
                            label: 'Account',
                            href: '/account',
                        },
                        {
                            label: 'Settings',
                        },
                    ]}
                    backgroundImage="/images/breadcrumbs.png"
                />
                <AccountLayout>
                    <Toaster position="top-right" />
                    <div className="mx-auto flex max-w-5xl flex-col gap-4">
                        {/* Account Settings */}
                        <div className="rounded-lg border border-[#E5E5E5] bg-white">
                            <h3 className="border-b border-[#E5E5E5] p-6 text-xl font-medium text-[#1A1A1A]">
                                Account Settings
                            </h3>

                            <div className="grid grid-cols-1 gap-5 py-6 lg:grid-cols-2">
                                {/* Form */}
                                <div className="flex-1">
                                    <form
                                        onSubmit={handleAccountSubmit}
                                        className="flex flex-col gap-4 p-6"
                                    >
                                        <div>
                                            <LabelForm>First Name</LabelForm>

                                            <Input
                                                type="text"
                                                value={accountData.firstName}
                                                onChange={(e) =>
                                                    handleAccountChange(
                                                        'firstName',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <div>
                                            <LabelForm>Last Name</LabelForm>

                                            <Input
                                                type="text"
                                                value={accountData.lastName}
                                                onChange={(e) =>
                                                    handleAccountChange(
                                                        'lastName',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="">
                                            <LabelForm>Email</LabelForm>

                                            <Input
                                                type="email"
                                                value={accountData.email}
                                                onChange={(e) =>
                                                    handleAccountChange(
                                                        'email',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="">
                                            <LabelForm>Phone Number</LabelForm>

                                            <Input
                                                type="tel"
                                                value={accountData.phone}
                                                onChange={(e) =>
                                                    handleAccountChange(
                                                        'phone',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="lg:col-span-3">
                                            <Button
                                                disabled={
                                                    !accountChanged ||
                                                    accountLoading
                                                }
                                            >
                                                {accountLoading
                                                    ? 'Saving...'
                                                    : 'Save Changes'}
                                            </Button>
                                        </div>
                                    </form>
                                </div>

                                {/* Profile Image */}
                                <div className="flex flex-col items-center justify-center">
                                    <div className="h-48 w-48 overflow-hidden rounded-full border border-[#E5E5E5] lg:h-64 lg:w-64">
                                        <img
                                            src={
                                                accountData.image ||
                                                '/images/profileImg.png'
                                            }
                                            alt="Profile"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <input
                                        id="profile-image"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />

                                    <label
                                        htmlFor="profile-image"
                                        className="mt-4 cursor-pointer rounded-full border-2 border-[#00B207] px-5 py-2 text-sm font-medium text-[#00B207] transition hover:bg-[#00B207] hover:text-white"
                                    >
                                        Choose Image
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* Billing Address */}
                        <div className="rounded-lg border border-[#E5E5E5] bg-white">
                            <h3 className="border-b border-[#E5E5E5] p-6 text-xl font-medium">
                                Billing Address
                            </h3>

                            <form
                                onSubmit={handleBillingSubmit}
                                className="grid grid-cols-1 gap-5 p-6 lg:grid-cols-3"
                            >
                                <div>
                                    <LabelForm>First Name</LabelForm>
                                    <Input
                                        type="text"
                                        value={billingData.firstName}
                                        onChange={(e) =>
                                            handleBillingChange(
                                                'firstName',
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>

                                <div>
                                    <LabelForm>Last Name</LabelForm>
                                    <Input
                                        type="text"
                                        value={billingData.lastName}
                                        onChange={(e) =>
                                            handleBillingChange(
                                                'lastName',
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>

                                <div>
                                    <LabelForm>
                                        Company Name (optional)
                                    </LabelForm>
                                    <Input
                                        type="text"
                                        value={billingData.companyName}
                                        onChange={(e) =>
                                            handleBillingChange(
                                                'companyName',
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>

                                <div className="lg:col-span-3">
                                    <LabelForm>Street Address</LabelForm>
                                    <Input
                                        type="text"
                                        value={billingData.street}
                                        onChange={(e) =>
                                            handleBillingChange(
                                                'street',
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>

                                <div>
                                    <LabelForm>Country / Region</LabelForm>
                                    <Input
                                        value={billingData.country}
                                        onChange={(e) =>
                                            handleBillingChange(
                                                'country',
                                                e.target.value,
                                            )
                                        }
                                        type="text"
                                    />
                                </div>

                                <div>
                                    <LabelForm>State</LabelForm>
                                    <Input
                                        value={billingData.state}
                                        onChange={(e) =>
                                            handleBillingChange(
                                                'state',
                                                e.target.value,
                                            )
                                        }
                                        type="text"
                                    />
                                </div>

                                <div>
                                    <LabelForm>Zip Code</LabelForm>
                                    <Input
                                        value={billingData.zipCode}
                                        onChange={(e) =>
                                            handleBillingChange(
                                                'zipCode',
                                                e.target.value,
                                            )
                                        }
                                        type="text"
                                    />
                                </div>

                                <div className="lg:col-span-3">
                                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                        <div>
                                            <LabelForm>Email</LabelForm>
                                            <Input
                                                value={billingData.email}
                                                onChange={(e) =>
                                                    handleBillingChange(
                                                        'email',
                                                        e.target.value,
                                                    )
                                                }
                                                type="email"
                                            />
                                        </div>

                                        <div>
                                            <LabelForm>Phone</LabelForm>
                                            <Input
                                                value={billingData.phone}
                                                onChange={(e) =>
                                                    handleBillingChange(
                                                        'phone',
                                                        e.target.value,
                                                    )
                                                }
                                                type="tel"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Button
                                        disabled={
                                            billingLoading || !billingChanged
                                        }
                                    >
                                        {billingLoading
                                            ? 'Saving...'
                                            : 'Save Changes'}
                                    </Button>
                                </div>
                            </form>
                        </div>
                        {/* Password */}
                        <div className="rounded-lg border border-[#E5E5E5] bg-white">
                            <h3 className="border-b border-[#E5E5E5] p-6 text-xl font-medium text-[#1A1A1A]">
                                Change Password
                            </h3>
                            <form
                                onSubmit={handlePasswordSubmit}
                                className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2"
                            >
                                <div className="md:col-span-2">
                                    <div>
                                        <LabelForm>Current Password</LabelForm>
                                        <PasswordInput
                                            type="password"
                                            value={passwordData.currentPassword}
                                            onChange={(e) =>
                                                handlePasswordChange(
                                                    'currentPassword',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="my-3 grid grid-cols-1 gap-5 md:grid-cols-2">
                                        <div>
                                            <LabelForm>New Password</LabelForm>
                                            <PasswordInput
                                                type="password"
                                                value={passwordData.newPassword}
                                                onChange={(e) =>
                                                    handlePasswordChange(
                                                        'newPassword',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                        <div>
                                            <LabelForm>
                                                Confirm New Password
                                            </LabelForm>
                                            <PasswordInput
                                                type="password"
                                                value={
                                                    passwordData.confirmPassword
                                                }
                                                onChange={(e) =>
                                                    handlePasswordChange(
                                                        'confirmPassword',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <Button
                                            disabled={
                                                passwordLoading ||
                                                !isPasswordValid
                                            }
                                        >
                                            {passwordLoading
                                                ? 'Saving...'
                                                : 'Change Password'}
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </AccountLayout>
            </MainLayout>
        </>
    );
}
