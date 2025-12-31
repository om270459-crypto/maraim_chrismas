import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Countdown.css';

// START DATE: October 14 at 01:38
const START_MONTH = 9;
const START_DAY = 14;
const START_HOUR = 1;
const START_MINUTE = 38;

const Countdown = () => {
  const [time, setTime] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0 });
  const prevTimeRef = useRef({ years: -1, months: -1, days: -1, hours: -1, minutes: -1 });

  const getStartDate = () => {
    const now = new Date();
    let year = now.getFullYear();
    const startCandidate = new Date(year, START_MONTH, START_DAY, START_HOUR, START_MINUTE);
    
    if (startCandidate > now) {
      year -= 1;
    }
    return new Date(year, START_MONTH, START_DAY, START_HOUR, START_MINUTE);
  };

  const calculateElapsed = () => {
    const now = new Date();
    const start = getStartDate();
    
    let d1 = new Date(start);
    let d2 = new Date(now);
    
    let years = d2.getFullYear() - d1.getFullYear();
    let anniversary = new Date(d2.getFullYear(), START_MONTH, START_DAY, START_HOUR, START_MINUTE);
    if (d2 < anniversary) {
      years--;
    }
    
    let dateWithYears = new Date(d1);
    dateWithYears.setFullYear(d1.getFullYear() + years);
    
    let months = (d2.getFullYear() - dateWithYears.getFullYear()) * 12 + (d2.getMonth() - dateWithYears.getMonth());
    if (d2.getDate() < dateWithYears.getDate()) {
      months--;
    }
    
    let dateWithMonths = new Date(dateWithYears);
    dateWithMonths.setMonth(dateWithYears.getMonth() + months);
    
    let diff = d2 - dateWithMonths;
    
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    
    let hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    
    let minutes = Math.floor(diff / (1000 * 60));
    
    return { years, months, days, hours, minutes };
  };

  useEffect(() => {
    const updateTime = () => {
      const newTime = calculateElapsed();
      setTime(newTime);
      prevTimeRef.current = newTime;
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNum = (num) => num.toString().padStart(2, '0');

  const FlipCard = ({ value, label, icon }) => (
    <div className="countdown-segment">
      <div className="countdown-card">
        <div className="top"><span>{formatNum(value)}</span></div>
        <div className="bottom"><span>{formatNum(value)}</span></div>
      </div>
      <div className="countdown-label">
        <i className={icon}></i> {label}
      </div>
    </div>
  );

  return (
    <motion.main
      className="countdown-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="countdown-header">
        <h1>
          <i className="fa-solid fa-heart"></i>
          {' '}We Stayed Together For{' '}
          <i className="fa-solid fa-heart"></i>
        </h1>
      </div>

      <div className="countdown-wrapper">
        <FlipCard value={time.years} label="Years" icon="fa-solid fa-calendar" />
        <div className="countdown-separator">:</div>
        <FlipCard value={time.months} label="Months" icon="fa-solid fa-calendar-days" />
        <div className="countdown-separator">:</div>
        <FlipCard value={time.days} label="Days" icon="fa-solid fa-sun" />
        <div className="countdown-separator">:</div>
        <FlipCard value={time.hours} label="Hours" icon="fa-solid fa-clock" />
        <div className="countdown-separator">:</div>
        <FlipCard value={time.minutes} label="Minutes" icon="fa-solid fa-hourglass-half" />
      </div>

      <div className="countdown-footer">
        <h2>
          <i className="fa-solid fa-infinity"></i>
          {' '}I hope we stay forever{' '}
          <i className="fa-solid fa-infinity"></i>
        </h2>
      </div>
    </motion.main>
  );
};

export default Countdown;
