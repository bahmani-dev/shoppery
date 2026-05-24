import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import CountDown from './CountDown';
import ShopNowBtn from './ShopNowBtn';

const Offers = () => {
    return (
        <AnimatedSection className="relative z-0">
            <section className="container mx-auto flex max-w-[1280px] flex-col gap-5 px-4 py-20 md:flex-row">
                {/* Card 1 */}
                <div className="w-full overflow-hidden rounded-[10px]">
                    <div className='flex min-h-[360px] w-full items-center rounded-[10px] bg-[url("/images/Home/Offer/service1.png")] bg-cover bg-center p-6 sm:p-10'>
                        <div className="flex flex-col gap-4 sm:gap-6">
                            <p className="text-[12px] font-medium leading-[100%] tracking-[3%] text-white sm:text-[14px]">
                                100% ORGANIC
                            </p>

                            <h2 className="text-[24px] font-semibold leading-[120%] text-white sm:text-[36px]">
                                Fruit & Vegetable
                            </h2>

                            <p className="text-[13px] text-white sm:text-[14px]">
                                Starting at:{' '}
                                <span className="inline-block rounded-[5px] bg-[#FF8A00] px-2 py-1 text-[14px] sm:text-[16px]">
                                    $11.99
                                </span>
                            </p>

                            <div className="w-[162px]">
                                <ShopNowBtn />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full overflow-hidden rounded-[10px]">
                    <div className='flex min-h-[360px] w-full items-center rounded-[10px] bg-[url("/images/Home/Offer/service2.png")] bg-cover bg-center p-6 sm:p-10'>
                        <div className="flex flex-col gap-4 sm:gap-6">
                            <p className="text-[12px] font-medium leading-[100%] tracking-[3%] text-white sm:text-[14px]">
                                SALE OFF THE WEEK
                            </p>

                            <h2 className="text-[24px] font-semibold leading-[120%] text-white sm:text-[36px]">
                                Sales of the Year
                            </h2>

                            <CountDown />

                            <div className="w-[162px]">
                                <ShopNowBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Decorative elements (kept desktop-only safe) */}
            <div className="absolute -top-[150px] right-0 -z-10 hidden lg:block">
                <img src="/images/Home/Offer/rSideDesign.png" alt="" />
            </div>

            <div className="absolute left-[80px] top-10 hidden lg:block">
                <img src="/images/Home/Offer/lSideDesign.png" alt="" />
            </div>

            <div className="absolute -bottom-[75px] -z-10 hidden lg:block">
                <img src="/images/Home/Offer/lSideBottomDesign.png" alt="" />
            </div>

            <div className="absolute bottom-0 right-[155px] hidden lg:block">
                <img src="/images/Home/Offer/bottomLeaf.png" alt="" />
            </div>
        </AnimatedSection>
    );
};

export default Offers;
