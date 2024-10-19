import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("Dec 24, 2024 08:44:00").getTime();
    const currentTime = new Date().getTime();
    const timeLeft = eventDate - currentTime;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{backgroundImage: `url('https://i.pinimg.com/originals/72/6d/28/726d285763a3ad8bf7c40f7b931937d5.jpg')`,}}></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-red-400">We are coming soon</h1>
        <p className="text-2xl md:text-4xl mb-6">24 Dec 2024 8:44 AM</p>
        <div className="flex justify-center gap-4">
          <div className="bg-white text-black rounded-lg p-4 shadow-lg">
            <p className="text-3xl md:text-5xl font-bold">{timeLeft.days}</p>
            <p className="text-xl md:text-2xl">Days</p>
          </div>
          <div className="bg-white text-black rounded-lg p-4 shadow-lg">
            <p className="text-3xl md:text-5xl font-bold">{timeLeft.hours}</p>
            <p className="text-xl md:text-2xl">Hours</p>
          </div>
          <div className="bg-white text-black rounded-lg p-4 shadow-lg">
            <p className="text-3xl md:text-5xl font-bold">{timeLeft.minutes}</p>
            <p className="text-xl md:text-2xl">Minutes</p>
          </div>
          <div className="bg-white text-black rounded-lg p-4 shadow-lg">
            <p className="text-3xl md:text-5xl font-bold">{timeLeft.seconds}</p>
            <p className="text-xl md:text-2xl">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
