import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);
    const [startTimer, setStartTimer] = useState(false);

    useEffect(() => {
        let timeoutId: number | null = null;

        if (startTimer) {
            timeoutId = setInterval(() => {
                setCount((prev) => prev + 0.01);
            }, 10);
        }

        // Cleanup function to clear the timeout
        return () => {
            if (timeoutId) {
                clearInterval(timeoutId); // Use clearTimeout instead of clearInterval
            }
        };
    }, [startTimer]); // Add startTimer as a dependency

    const startTimerFun = () => {
        setStartTimer(true);
    };

    const stopTimerFun = () => {
        setStartTimer(false); // Stop the timer by setting startTimer to false
    };

    const resetTimerFun = () => {
        setCount(0); // Reset the count to 0
        setStartTimer(false); // Stop the timer
    };

    return (
        <div className='timer-section'>
            <p className='timer-text'>Timer is {count.toFixed(2)}</p>
            <div className='timer-box'>
                <button onClick={startTimerFun}>Start</button>
                <button onClick={stopTimerFun}>Stop</button>
                <button onClick={resetTimerFun}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;
