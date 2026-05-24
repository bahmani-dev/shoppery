import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import { useRef, useState } from 'react';

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        setIsPlaying(false);
        videoRef.current.currentTime = 0;
    };

    return (
        <AnimatedSection className="relative">
            <div className="absolute h-[50%] w-full bg-[#f7f7f7]"></div>
            <section className="container relative z-10 mx-auto max-w-7xl px-4 py-20">
                <div className="relative overflow-hidden rounded-[20px]">
                    <video
                        controls
                        muted
                        playsInline
                        src="/Video/video.mp4"
                        ref={videoRef}
                        onEnded={handleVideoEnd}
                    ></video>
                    <div
                        className={`${isPlaying === true ? 'opacity-0' : 'opacity-100'} absolute inset-0 bg-[#0a3d2e65] transition-all duration-700 ease-in-out`}
                    ></div>
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 text-center text-white">
                        <p
                            className={`${isPlaying === true ? 'opacity-0' : 'opacity-100'} text-[16px] font-normal leading-[100%] transition-all duration-700 ease-in-out`}
                        >
                            VIDEO
                        </p>
                        <h1
                            className={`${isPlaying === true ? 'opacity-0' : 'opacity-100'} text-[26px] font-semibold leading-[120%] transition-all duration-700 ease-in-out md:text-[30px] lg:text-[36px]`}
                        >
                            We’re the Best Organic <br /> Farm in the World
                        </h1>
                        <img
                            onClick={() => {
                                setIsPlaying(true);
                                videoRef.current?.play();
                            }}
                            className={`h-[40px] w-[40px] md:h-[60px] md:w-[60px] xl:h-[83px] xl:w-[83px] ${isPlaying === true ? 'pointer-events-none opacity-0' : 'opacity-100'} cursor-pointer transition-all duration-700 ease-in-out`}
                            src="/Video/play.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
};

export default Video;
