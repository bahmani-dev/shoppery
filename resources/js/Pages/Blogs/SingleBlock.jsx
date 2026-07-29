import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import { MessageSquare, Tag, User } from 'lucide-react';
import { BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { IoLink } from 'react-icons/io5';
import ShopNowBtn from '../Home/ShopNowBtn';
import CommentSection from './CommentSection';
import Category from '../Blog/Category';

const SingleBlock = () => {
    return (
        <MainLayout>
            <Head title="Blogs" />
            <Breadcrumb
                items={[
                    {
                        label: 'Blog',
                        href: '/blogs',
                    },
                    {
                        label: 'Single Blog',
                        href: '/blogs/singleBlog',
                    },
                ]}
                backgroundImage="/images/Breadcrumbs.png"
            ></Breadcrumb>

            <div className="container mx-auto flex max-w-7xl px-4 py-20 gap-8 flex-col lg:flex-row">
                <div className="rightIs flex max-w-[872px] flex-col gap-5">
                    <div>
                        <img src="/images/SingleBlog/oranges.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2">
                                <Tag color="#00B207" />
                                <p className="text-[11px] lg:text-[13px] xl:text-[14px] font-normal leading-[150%] tracking-[0%]">
                                    Food
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <User color="#00B207" />
                                <p className="text-[11px] lg:text-[13px] xl:text-[14px] font-normal leading-[150%] tracking-[0%]">
                                    By Admind
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MessageSquare color="#00B207" />
                                <p className="text-[11px] lg:text-[13px] xl:text-[14px] font-normal leading-[150%] tracking-[0%]">
                                    65 Comments
                                </p>
                            </div>
                        </div>
                        <h2 className="text-[24px] lg:text-[26px] xl:text-[29px] 2xl:text-[32px] font-medium leading-[140%] tracking-[0%]">
                            Maecenas tempor urna sed quam mollis, a placerat dui
                            fringill Suspendisse.
                        </h2>
                        <div className="flex flex-col gap-3 lg:flex-row justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/images/SingleBlog/profile.png"
                                    alt=""
                                />
                                <div className="flex flex-col">
                                    <p className="text-[16px] font-medium leading-[150%] tracking-[0%]">
                                        Cameron Williamson
                                    </p>
                                    <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#808080]">
                                        4 April, 2021 • 6 min read
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-600 hover:text-white"
                                >
                                    <FaFacebook size={18} />
                                </a>

                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-500 hover:text-white"
                                >
                                    <BsTwitter size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-500 hover:text-white"
                                >
                                    <BsPinterest size={18} />
                                </a>

                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-500 hover:text-white"
                                >
                                    <BsInstagram size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-600 hover:text-white"
                                >
                                    <IoLink size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-5">
                        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[150%] tracking-[0%] text-[#1A1A1A]">
                            Maecenas lacinia felis nec placerat sollicitudin.
                            Quisque placerat dolor at scelerisque imperdiet.
                            Phasellus tristique felis dolor.
                        </p>
                        <p className="text-[16px] font-normal leading-[150%] tracking-[0%] text-[#808080]">
                            Maecenas elementum in risus sed condimentum. Duis
                            convallis ante ac tempus maximus. Fusce malesuada
                            sed velit ut dictum. Morbi faucibus vitae orci at
                            euismod. Integer auctor augue in erat vehicula, quis
                            fermentum ex finibus.
                        </p>
                        <p className="text-[16px] font-normal leading-[150%] tracking-[0%] text-[#808080]">
                            Mauris pretium elit a dui pulvinar, in ornare sapien
                            euismod. Nullam interdum nisl ante, id feugiat quam
                            euismod commodo. Sed ultrices lectus ut iaculis
                            rhoncus. Aenean non dignissim justo, at fermentum
                            turpis. Sed molestie, ligula ut molestie ultrices,
                            tellus ligula viverra neque, malesuada consectetur
                            diam sapien volutpat risus. Quisque eget tortor
                            lobortis, facilisis metus eu, elementum est. Nunc
                            sit amet erat quis ex convallis suscipit. ur
                            ridiculus mus.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-between">
                        <img src="/images/SingleBlog/fruit1.png" alt="" />
                        <img src="/images/SingleBlog/fruit2.png" alt="" />
                    </div>
                    <p className="text-[16px] font-normal leading-[150%] tracking-[0%] text-[#808080]">
                        Sed dictum non nulla eu imperdiet. Duis elit libero,
                        vulputate quis vehicula ut, vestibulum ut mauris. Nullam
                        non felis varius dui rutrum rutrum in a nisi.
                        Suspendisse elementum rutrum lorem sed luctus. Proin
                        iaculis euismod metus non sollicitudin. Duis vel luctus
                        lacus. Nullam faucibus iaculis convallis. In ullamcorper
                        nibh ipsum, eget lacinia eros pulvinar a. Integer
                        accumsan arcu nec faucibus ultricies.
                    </p>
                    <div className="flex h-[250px] min-w-full rounded-[6px] items-center bg-[url(/images/SingleBlog/rec.png)] px-12">
                        <div className="flex items-center gap-16">
                            <div className="flex flex-col gap-2">
                                <p className="text-[14px] font-medium leading-[100%] tracking-[3%] text-[#666666]">
                                    SUMMER SALES
                                </p>
                                <h1 className="mb-4 text-[36px] font-semibold leading-[120%] tracking-[0%] text-white">
                                    Fresh Fruit
                                </h1>
                                <ShopNowBtn />
                            </div>
                            <div className="flex h-[91px] w-[91px] flex-col items-center justify-center rounded-full bg-[#1A1A1A]">
                                <p className="text-[11px] font-medium leading-[110%] tracking-[3%] text-[#B3B3B3]">
                                    UP TO
                                </p>
                                <h2 className="text-[24px] font-semibold leading-[110%] tracking-[0%] text-[#FF8A00]">
                                    56%
                                </h2>
                                <p className="text-[14px] font-normal leading-[110%] tracking-[0%] text-[#B3B3B3]">
                                    Off
                                </p>
                            </div>
                        </div>
                    </div>
                    <CommentSection />
                </div>
                <div className='w-[400px]'>
                    <Category/>
                </div>
            </div>
        </MainLayout>
    );
};

export default SingleBlock;
