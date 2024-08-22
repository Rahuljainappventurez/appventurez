import React, { useEffect, useState } from 'react'
import './Clock.css'

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      // Update time every second
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs once on mount
  
    // Format time to display hours, minutes, and seconds
    const formattedTime = time.toLocaleTimeString();
  return (
    <div className="clock-container">
    <div className="clock-box">
      <h2 className="clock-heading">Current Time</h2>
      <p className="clock-time">{formattedTime}</p>
    </div>
  </div>
  )
}

export default Clock