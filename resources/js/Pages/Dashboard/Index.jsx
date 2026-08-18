import Breadcrumb from '@/Components/Breadcrumb';
import AccountLayout from '@/Components/Layout/AccountLayout';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import Address from '../Account/Address';
import AddressModal from '../Account/AddressModal';
import orders from '../Account/Orders';
import OrdersTable from '../Account/OrdersTable';
import Profile from '../Account/Profile';
import ProfileModal from '../Account/ProfileModel';

export default function Dashboard({userd, addressesd}) {
    const [editProfile, setEditProfile] = useState(false);

    const [user, setUser] = useState({
        name: userd.name,
        role: 'Customer',
        img: userd.profile_image,
    });

    const [address, setAddress] = useState({
        name: userd.name,
        address: addressesd.address_text,
        email: userd.email,
        phone: userd.phonenumber,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <MainLayout>
            <Head title="Dashboard" />
            <Breadcrumb
                items={[
                    {
                        label: 'Account',
                        href: '/account',
                    },
                    {
                        label: 'Dashboard',
                    },
                ]}
                backgroundImage="/images/breadcrumbs.png"
            />

            <AccountLayout>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-4">
                    {' '}
                    <Profile user={user} onEdit={() => setEditProfile(true)} />
                    {editProfile && (
                        <ProfileModal
                            user={user}
                            onClose={() => setEditProfile(false)}
                            onSave={(updatedUser) => {
                                setUser(updatedUser);
                                setEditProfile(false);
                            }}
                        />
                    )}
                    <Address
                        address={address}
                        onEdit={() => setIsModalOpen(true)}
                    />
                    {isModalOpen && (
                        <AddressModal
                            address={address}
                            onClose={() => setIsModalOpen(false)}
                            onSave={(updatedAddress) => {
                                setAddress(updatedAddress);
                                setIsModalOpen(false);
                            }}
                        />
                    )}
                    <div className="mt-6 rounded-lg border border-[#E5E5E5] p-4 sm:col-span-2">
                        <div className="flex items-center justify-between py-4">
                            <h3 className="text-xl font-medium leading-[150%] text-[#1A1A1A]">
                                {' '}
                                Recent Order History
                            </h3>
                            <button
                                onClick={() => router.visit('/orders')}
                                className="font-base font-medium leading-[150%] text-[#00B207]"
                            >
                                View All
                            </button>
                        </div>
                        <OrdersTable orders={orders} limit={6} />
                    </div>
                </div>
            </AccountLayout>
        </MainLayout>
    );
}
