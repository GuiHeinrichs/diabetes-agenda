'use client'
import React, {useState} from 'react'
import Calendar from './Calendar'

export default function Header() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <header className='flex bg-[--secondary] items-center justify-center w-full'>
      <Calendar onSelectDate={setSelectedDate} selected={selectedDate}/>
    </header>
  )
}
