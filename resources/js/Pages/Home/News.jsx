import { useEffect, useState } from "react";

export default function IntroModal() {

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
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

            {/* Modal Box */}
            <div className="bg-white lg:w-[800px] lg:h-[400px] w-[clamp(350px,50vw,700px)] m-5 h-[clamp(646px,50vw,800px)] sm:w-[400px]
            sm:h-[700px] md:h-[400px] md:w-[700px] rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl
            md:flex-row">
               <div className="md:flex">
                <img src="/images/BG.png" alt="photo" 
                className="w-full lg:w-[400px] md:w-[400px] h-full mt-[-44px] md:m-0 md:ml-2 md:rounded-[4px]"/>
                <div className="flex items-center relative top-3 flex-col">
                <h1 className="text-[18px] font-semibold md:mt-[40px] text-center md:text-[33px]">Subcribe to Our <br/>Newsletter</h1>
                <h2 className="p-2 text-center md:text-[17px]">Subscribe to our newlletter and Save your <span className="text-orange-700">20% money</span> with discount code today.</h2>
                <input type="email" className="w-[250px] mt-5 mb-2 rounded-[46px]" />
                <button className="text-white bg-[#00B207] w-[150px] mt-3 shadow-lg h-[40px] rounded-[43px]">Subscribe</button>
                <button className="mt-2 text-red-700 md:hidden" onClick={()=> setOpen(false)}>Close</button>
                   <button className="mt-2 text-red-700 hidden md:block absolute top-[-20px] text-3xl right-6" onClick={()=> setOpen(false)}>x</button>
                </div>
               </div>
            </div>

        </div>

    );
}