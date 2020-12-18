import React, { useEffect } from 'react';
import './Clock.css';

export const Clock: React.FC = () => {
  const [date, setDate] = React.useState(new Date());
  const [dotsEnabled, setDotsEnabled] = React.useState(true);

  useEffect(() => {
    setDate(new Date());
    setTimeout(() => setDotsEnabled(!dotsEnabled), 999);
  }, [dotsEnabled]);

  return (
    <div className="Clock">
      <p className="Clock-hours">{zeroPadding(date.getHours())}</p>
      <span className={ 'Clock-dots ' + (dotsEnabled ? 'enable' : '') }></span>
      <p className="Clock-minutes">{zeroPadding(date.getMinutes())}</p>
    </div>
  );
};

const zeroPadding = (num: number) => {
  return ('0' + num).substr(-2);
};