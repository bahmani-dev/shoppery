import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import Bannar from './Bannar';
import {usePage} from '@inertiajs/react';
import { useEffect, useState } from 'react';

import DeliveryCard from './DeliveryCard';
import FilterBar from './FilterBar';
import ProductsGrid from './ProductsGrid';

export default function Index({ products = [] }) {
    
    const {props} = usePage();
    const [showToast, setShowToast] = useState(false);
    useEffect(()=>{
        if(props.flash?.message){
            setShowToast(true);
            const timer = setTimeout(()=>{
                setShowToast(false);
            }, 2000);
            return ()=> clearTimeout(timer);
        }
    }, [props.flash?.message])
    
    return (
        <MainLayout className="relative">
            <Head title="Shop" />
            <div className='flex w-full justify-center fixed z-50 top-[250px]'>
                    {showToast && (
                        <div className='h-[200px] w-[400px] flex justify-center items-center bg-green-600 shadow-lg shadow-green-400 text-white px-4 py-2 rounded-lg z-50'>
                            {props.flash?.message}
                        </div>
                    )}
            </div>
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

            <div className="flex flex-col items-center justify-center">
                <Bannar />
                <FilterBar />
                <DeliveryCard />
                <ProductsGrid products={products} />
            </div>
        </MainLayout>
    );
}
