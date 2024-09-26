import React from 'react'

export default function Card({ title } : { title:string }) {
  return (
    <div className='w-full h-auto bg-[#2f3752] rounded-3xl'>
      <div className='text-[--font-secondary]'>
        <h1>{title}</h1>

      </div>
    </div>
  )
}
