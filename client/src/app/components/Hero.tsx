'use client'
import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'

export default function Hero() {
  return (
    <div className='flex justify-center mt-4 w-full h-auto text-white'>
        <Card period='Tarde' actionType='Glicose' actionValue={4} colorBase='yellow'/>
    </div>
  )
}
