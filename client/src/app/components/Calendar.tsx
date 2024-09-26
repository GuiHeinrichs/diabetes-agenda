import React, { useState, useEffect } from 'react';
import moment from 'moment';
import DateComponent from './Date';

const Calendar =  ({ onSelectDate, selected } : {onSelectDate: any, selected: any}) => {
  const [dates, setDates] = useState<moment.Moment[]>([]);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [currentMonth, setCurrentMonth] = useState<string>("");

  // get the dates from today to 10 days from now, format them as strings and store them in state
  const getDates = () => {
    const _dates: moment.Moment[] = [];
    for (let i = 0; i < 10; i++) {
      const date = moment().add(i, 'days');
      _dates.push(date);
    }
    setDates(_dates);
  };

  useEffect(() => {
    getDates();
    // Update the current month based on the first date
    setCurrentMonth(moment().format('MMMM YYYY').toUpperCase());
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="flex items-center mt-4">
        <h2 className="text-2xl font-semibold text-white">{currentMonth}</h2>
      </div>
      <div className="w-full p-2">
        <div className="flex space-x-2">
          {dates.map((date, index) => (
            <DateComponent
              key={index}
              date={date.format('YYYY-MM-DD')}
              onSelectDate={onSelectDate}
              selected={selected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
