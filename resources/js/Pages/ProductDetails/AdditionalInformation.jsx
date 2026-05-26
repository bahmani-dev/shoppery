import { useRef, useState } from 'react';

export default function AdditionalInformation() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const productInfo = [
        {
            label: 'Weight',
            value: '03',
        },
        {
            label: 'Color',
            value: 'Green',
        },
        {
            label: 'Type',
            value: 'Organic',
        },
        {
            label: 'Category',
            value: 'Vegetables',
        },
        {
            label: 'Stock Status',
            value: 'Available (5,413)',
        },
        {
            label: 'Tags',
            value: 'Vegetables, Healthy,Chinese, Cabbage, Green Cabbage',
        },
    ];

    const highlights = [
        {
            icon: '/images/price-tag.png',
            title: '64% Discount',
            desc: 'Save your 64% money with us',
        },
        {
            icon: '/images/leaf.png',
            title: '100% Organic',
            desc: '100% Organic Vegetables',
        },
    ];

    const toggleVideo = () => {
        if (isPlaying) {
            videoRef.current?.pause();
        } else {
            videoRef.current?.play();
        }
    };

    return (
        <>
            <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-8 xl:px-0">
                <div className="grid items-start gap-10 lg:grid-cols-2 xl:gap-x-44">
                    <dl className="space-y-2">
                        {productInfo.map((item) => (
                            <div
                                key={item.label}
                                className="grid grid-cols-[120px_1fr] gap-x-6 pb-4"
                            >
                                <dt className="text-sm font-medium leading-[150%] text-[#1A1A1A] md:text-base lg:text-lg">
                                    {item.label}:
                                </dt>

                                <dd className="break-words text-sm font-normal leading-[150%] text-[#666666] md:text-base">
                                    {item.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                    {/* Video */}
                    <div>
                        <div
                            className="relative cursor-pointer focus:outline-none"
                            onClick={toggleVideo}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    toggleVideo();
                                }
                            }}
                        >
                            <video
                                ref={videoRef}
                                src="/Video/video.mp4"
                                aria-label="Product Video"
                                className="aspect-video w-full rounded-md object-cover"
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                onEnded={() => setIsPlaying(false)}
                            ></video>
                            {/* OverLay */}
                            <div
                                className={`${isPlaying ? 'opacity-0' : 'opacity-100'} absolute inset-0 overflow-hidden rounded-md bg-[#0a3d2e65] transition-all duration-700 ease-in-out`}
                            ></div>
                            {/* Play Button */}
                            <img
                                className={`${isPlaying ? 'pointer-events-none opacity-0' : 'opacity-100'} absolute left-1/2 top-1/2 z-30 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out sm:h-16 sm:w-16`}
                                src="/images/Play.svg"
                                alt="Play Button"
                            />
                        </div>
                        {/* Marketing Cards */}
                        <div className="mt-6 rounded-xl border border-[#E5E5E5] px-5 py-6 shadow-md">
                            <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
                                {highlights.map((highlight) => (
                                    <article
                                        key={highlight.title}
                                        className="flex items-center gap-4"
                                    >
                                        <img
                                            src={highlight.icon}
                                            alt="Related Image"
                                            className="h-10 w-10 shrink-0"
                                        />
                                        <div>
                                            <h3 className="text-sm font-medium text-[#1A1A1A] md:text-base lg:text-lg">
                                                {highlight.title}
                                            </h3>
                                            <p className="text-sm font-normal text-[#808080] md:text-base">
                                                {highlight.desc}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
