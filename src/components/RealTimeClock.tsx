import React, { useEffect, useState } from "react";

function RealTimeClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return <div className="font-bold">Viet Nam: {time.toLocaleTimeString()}</div>;
}

export default RealTimeClock;
