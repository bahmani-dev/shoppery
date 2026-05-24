import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import ShopNowBtn from './ShopNowBtn';

const Trusted = () => {
    return (
        <AnimatedSection className="relative flex justify-center bg-[#F7F7F7]">
            <section className="container mx-auto flex max-w-[1280px] flex-col items-center gap-9 px-4 py-20 lg:flex-row lg:gap-4">
                <div className="relative h-[400px] w-[276px]">
                    <img
                        className="relative z-10"
                        src="/images/Home/Trusted/img1.png"
                        alt=""
                    />
                    <img
                        className="absolute -top-[60px] right-3 z-0"
                        src="/images/Home/Trusted/imgOne1.png"
                        alt=""
                    />
                    <img
                        className="absolute -bottom-[40px] -left-[50px] z-10"
                        src="/images/Home/Trusted/imgOne2.png"
                        alt=""
                    />
                </div>

                <div>
                    <img src="/images/Home/Trusted/img2.png" alt="" />
                </div>
                <div className="relative z-10 flex flex-col justify-between gap-6 md:w-[540px] lg:ml-2">
                    <h1 className="text-[40px] font-semibold leading-[120%] tracking-[0%]">
                        100% Trusted Organic Food Store
                    </h1>
                    <div className="flex gap-4">
                        <img
                            className="h-6 w-6"
                            src="/images/Home/Trusted/check.png"
                            alt=""
                        />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[18px] font-medium leading-[150%] tracking-[0%] text-[#1A1A1A]">
                                Healthy & natural food for lovers of healthy
                                food.
                            </h2>
                            <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#808080]">
                                Ut quis tempus erat. Phasellus euismod bibendum
                                magna non tristique. Pellentesque semper
                                vestibulum elit sed condimentum. Nunc pretium
                                fermentum interdum.{' '}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img
                            className="h-6 w-6"
                            src="/images/Home/Trusted/check.png"
                            alt=""
                        />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[18px] font-medium leading-[150%] tracking-[0%] text-[#1A1A1A]">
                                Every day fresh and quality products for you.
                            </h2>
                            <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#808080]">
                                Maecenas vehicula a justo quis laoreet. Sed in
                                placerat nibh, a posuere ex. Morbi sem neque,
                                aliquam sed orci et, rhoncus lobortis felis. Sed
                                vestibulum nisl sit amet sapien.{' '}
                            </p>
                        </div>
                    </div>
                    <div className="w-[192px]">
                        <ShopNowBtn />
                    </div>
                </div>
            </section>
            <div className="absolute left-0 top-6 hidden xl:block">
                <img src="/images/Home/Trusted/lSideDesign.png" alt="" />
            </div>
            <div className="absolute bottom-6 left-[60px] hidden xl:block">
                <img src="/images/Home/Trusted/lSideDesign2.png" alt="" />
            </div>
            <div className="absolute right-[60px] top-[60px] hidden xl:block">
                <img src="/images/Home/Trusted/rSideDesign.png" alt="" />
            </div>
        </AnimatedSection>
    );
};

export default Trusted;
