import React, { useState, useEffect } from 'react';

function TimerApp() {
  const [workTime, setWorkTime] = useState(25 * 60); // 1 minute (60 seconds)
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [timeLeft, setTimeLeft] = useState(workTime);

  useEffect(() => {
    let interval;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (isBreak) {
        // Break session is over, switch back to work
        setIsBreak(false);
        setTimeLeft(workTime);
      } else {
        // Work session is over, start the break
        setIsBreak(true);
        setTimeLeft(breakTime);
      }
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, timeLeft, isBreak, workTime, breakTime]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(workTime);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-indigo-800">
      <div className="relative border-8 border-yellow-100 rounded shadow-2xl font-mono text-9xl text-white grid grid-cols-1 gap-x-px mb-4">
        <div className="absolute inset-x-0 -bottom-5 mx-auto flex justify-center">
          <div className="w-3/4 bg-yellow-100 h-5 rounded"></div>
        </div>
        {/* <div className={`relative bg-black p-8 flip-card ${isBreak ? 'flipped' : ''}`}>
          <div className="absolute inset-0 grid grid-rows-2">
            <div className="bg-gradient-to-br from-gray-800 to-black"></div>
            <div className="bg-gradient-to-br from-gray-700 to-black"></div>
          </div>
          <h1 className="text-2xl mb-2 text-white">
            {isBreak ? 'Break Time' : null}
          </h1>
          <span className="relative">
            {formatTime(timeLeft)}
          </span>
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-black"></div>
          </div>
        </div> */}
        <div className={`relative bg-black p-8 flip-card ${isBreak ? 'flipped' : ''}`}>
          <div className="absolute inset-0 grid grid-rows-2">
            <div className="bg-gradient-to-br from-gray-800 to-black"></div>
            <div className="bg-gradient-to-br from-gray-700 to-black"></div>
          </div>
          <h1 className="text-2xl mb-2 text-white">
            {isBreak ? 'Break Time' : null}
          </h1>
          <span className="relative">
            {formatTime(timeLeft)}
          </span>
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-black"></div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <button onClick={startTimer} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
          Start
        </button>
        <button onClick={pauseTimer} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">
          Pause
        </button>
        <button onClick={resetTimer} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
          Reset
        </button>
      </div>
    </div>
  );
}

export default TimerApp;
