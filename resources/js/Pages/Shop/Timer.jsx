import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } =
          prev;

        seconds++;

        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }

        if (minutes === 60) {
          minutes = 0;
          hours++;
        }

        if (hours === 24) {
          hours = 0;
          days++;
        }

        return {
          days,
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timerData = [
    {
      value: String(time.days).padStart(2, "0"),
      label: "DAYS",
    },
    {
      value: String(time.hours).padStart(2, "0"),
      label: "HRS",
    },
    {
      value: String(time.minutes).padStart(2, "0"),
      label: "MINS",
    },
    {
      value: String(time.seconds).padStart(2, "0"),
      label: "SECS",
    },
  ];

  return (
    <div className="flex gap-2 md:gap-4 absolute">
      {timerData.map((item, index) => (
        <div key={index}>
          <div
            className="
              bg-green-700
              text-white
              w-12
              h-12
              sm:w-12
              sm:h-12
              lg:w-20
              lg:h-20
              md:w-16
              md:h-16
              rounded-xl
              flex
              items-center
              justify-center
              text-xl
              sm:text-2xl
              lg:text-4xl
              md:text-3xl
              font-bold
            "
          >
            {item.value}
          </div>

          <p
            className="
            shadow-orange-50
              text-black
              font-bold
              text-center
              sm:text-white
              mt-2
              text-xs
              sm:text-[13px]
              md:text-[]
            "
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timer;