import { useEffect, useState } from 'react';

export default function NewsPopUp() {
    // وضعیت باز بودن modal
    const [open, setOpen] = useState(false);
    useEffect(() => {
        // بعد از 5 ثانیه popup باز شود
        const timer = setTimeout(() => {
            setOpen(true);
        }, 5000);
        // پاک کردن timer
        return () => clearTimeout(timer);
    }, []);
    // اگر بسته بود چیزی render نکن
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            {/* Modal Box */}
            <div className="m-5 flex h-[clamp(646px,50vw,800px)] w-[clamp(350px,50vw,700px)] items-center justify-center overflow-hidden rounded-2xl bg-white shadow-2xl sm:h-[700px] sm:w-[400px] md:h-[400px] md:w-[700px] md:flex-row lg:h-[400px] lg:w-[800px]">
                <div className="md:flex">
                    <img
                        src="/images/BG.png"
                        alt="photo"
                        className="mt-[-44px] h-full w-full md:m-0 md:ml-2 md:w-[400px] md:rounded-[4px] lg:w-[400px]"
                    />
                    <div className="relative top-3 flex flex-col items-center">
                        <h1 className="text-center text-[18px] font-semibold md:mt-[40px] md:text-[33px]">
                            Subcribe to Our <br />
                            Newsletter
                        </h1>
                        <h2 className="p-2 text-center md:text-[17px]">
                            Subscribe to our newlletter and Save your{' '}
                            <span className="text-orange-700">20% money</span>{' '}
                            with discount code today.
                        </h2>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mb-2 mt-5 w-[250px] rounded-[46px] sm:w-[330px] md:w-[300px] lg:w-[350px]"
                        />
                        <button className="mt-3 h-[40px] w-[150px] rounded-[43px] bg-[#00B207] text-white shadow-lg">
                            Subscribe
                        </button>
                        <button
                            className="mt-2 text-red-700 md:hidden"
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </button>
                        <button
                            className="absolute right-6 top-[-20px] mt-2 hidden text-3xl text-black md:block"
                            onClick={() => setOpen(false)}
                        >
                            x
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
