import React from 'react';

export default function Card({ period, actionType, actionValue, colorBase }: { period: string, actionType: string, actionValue: number, colorBase: string }) {
  return (
    <div className='w-full h-auto bg-[#2f3752] max-w-lg rounded-3xl'>
      <div className='grid grid-cols-3 p-4'>
        <div className='flex col-span-1'>
          <h1 className='self-center font-semibold text-lg'>{period}</h1>
          <div className={`h-full border-l border-${colorBase}-400 mx-2`}></div>
        </div>

        <div className='flex flex-col col-span-2'>
          <span className={`text-lg font-bold text-${colorBase}-400`}>{actionType}</span>
          <span className='text-sm'>{actionValue}</span>
        </div>
      </div>
    </div>
  );
}
