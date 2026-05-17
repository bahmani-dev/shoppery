import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';

export default function Index() {
    return (
        <MainLayout>
            <Breadcrumb
                items={[
                    {
                        label: 'Category',
                        href: '/shop',
                    },
                    {
                        label: 'Shop',
                    },
                ]}
                backgroundImage="/images/breadcrumbs.png"
            />

            <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
                Shop Content
            </div>
        </MainLayout>
    );
}
