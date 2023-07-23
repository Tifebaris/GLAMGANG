'use client'
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const initialTime = {
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  const calculateTimeRemaining = () => {
    setTimeRemaining((prevState) => {
      const { days, hours, minutes, seconds } = prevState;

      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        // Timer has reached 0, you can perform any action here when the timer ends.
        clearInterval(interval);
        return prevState;
      }

      const totalSeconds = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds - 1;

      const remainingDays = Math.floor(totalSeconds / (24 * 60 * 60));
      const remainingHours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const remainingMinutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const remainingSeconds = totalSeconds % 60;

      return {
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
      };
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = timeRemaining;

  return (
    <div className="bg-red-600 md:h-[200px] text-white py-4">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-center items-center py-6">
          <div className="text-4xl font-bold mb-2 sm:text-4xl md:text-4xl">GlamGang Pop Sales Starts In</div>
          <div className="text-3xl sm:text-3xl md:text-3xl">
            {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;


