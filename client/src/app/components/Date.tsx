import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

const DateComponent = ({ date, onSelectDate, selected }: { date: string, onSelectDate: any, selected: any }) => {
  moment.locale('pt-br');

  // Verifica se a data é hoje
  const isToday = moment(date).isSame(moment(), 'day');
  const day = isToday ? 'Hoje' : moment(date).format('ddd'); // 'ddd' agora retornará o dia em português
  
  // Obtém o número do dia
  const dayNumber = moment(date).format('D');

  // Formato da data completa
  const fullDate = moment(date).format('YYYY-MM-DD');

  // Definindo quais dias são fins de semana (agora com formato em português)
  const weekEndDays = ['sáb', 'dom'];
  
  return (
    <button
      onClick={() => onSelectDate(fullDate)}
      className={`flex flex-col items-center hover:bg-[#2e375c] p-3 m-2 rounded-lg 
        ${selected === fullDate ? 'bg-[#2f3752]' : 'bg-transparent'} 
        transition-colors duration-300`}
    >
      <span className={`text-sm ${weekEndDays.includes(day) ? 'text-red-500/50' : 'text-white'}`}>
        {day}
      </span>
      <div className="h-2"></div>
      <span className="text-white text-sm">
        {dayNumber}
      </span>
    </button>
  );
};

export default DateComponent;
