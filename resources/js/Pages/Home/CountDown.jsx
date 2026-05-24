import { useEffect, useState } from 'react';

const timeFormat = (number) => {
    return String(number).padStart(2, '0');
};

const targetDate = new Date('2026-10-21T00:00:00').getTime();

const calculateDate = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    if (difference <= 0) {
        return { days: 0, hours: 0, mins: 0, secs: 0 };
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((difference / (1000 * 60)) % 60);
    const secs = Math.floor((difference / 1000) % 60);
    return {
        days,
        hours,
        mins,
        secs,
    };
};

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateDate());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateDate());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="flex flex-col text-white">
            <div className="flex w-[198px] justify-between">
                <p className="text-center text-[20px] font-normal leading-[150%] tracking-[0%]">
                    {timeFormat(timeLeft.days)}
                </p>
                <p className="text-center text-[20px] font-normal leading-[150%] tracking-[0%]">
                    :
                </p>
                <p className="text-center text-[20px] font-normal leading-[150%] tracking-[0%]">
                    {timeFormat(timeLeft.hours)}
                </p>
                <p className="text-center text-[20px] font-normal leading-[150%] tracking-[0%]">
                    :
                </p>
                <p className="text-center text-[20px] font-normal leading-[150%] tracking-[0%]">
                    {timeFormat(timeLeft.mins)}
                </p>
                <p className="text-center text-[20px] font-normal leading-[150%] tracking-[0%]">
                    :
                </p>
                <p className="text-center text-[20px] font-normal leading-[150%] tracking-[0%]">
                    {timeFormat(timeLeft.secs)}
                </p>
            </div>
            <div className="flex w-[198px] justify-between">
                <p className="text-[12px] leading-[100%] text-[#FFFFFF90]">
                    DAYS
                </p>
                <p className="text-[12px] leading-[100%] text-[#FFFFFF90]">
                    HOURS
                </p>
                <p className="text-[12px] leading-[100%] text-[#FFFFFF90]">
                    MINS
                </p>
                <p className="text-[12px] leading-[100%] text-[#FFFFFF90]">
                    SECS
                </p>
            </div>
        </div>
    );
};

export default CountDown;
