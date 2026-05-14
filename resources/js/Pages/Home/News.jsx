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
            <div className="bg-white w-[clamp(300px,20vw,700px)] h-[clamp(550px,20vw,800px)] rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl">
               <div>
               <button onClick={() => setOpen(false)}
                className="text-3xl absolute top-[300px] mt-[-100px] right-[50px]">x</button>
                <img src="/images/BG.png" alt="photo" 
                className="w-[300px] mt-[-200px]"/>
                <div className="flex justify-center relative top-3">
                
                <h1 className="text-[18px] font-semibold">Subcribe to Our Newsletter</h1>

                </div>
               </div>
            </div>

        </div>

    );
}