import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import Bannar from './Bannar';
import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <MainLayout>
            <Head title='Shop' />
            <Breadcrumb
                items={[
                    {
                        label: 'Category',
                        href: '/shop',
                    },
                    {
                        label: 'Vegetables',
                    },
                ]}
                backgroundImage="/images/breadcrumbs.png"
            />

            <div className="flex">
                <Bannar />
            </div>
        </MainLayout>
    );
}
