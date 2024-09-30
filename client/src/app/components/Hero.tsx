'use client'
import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'
import { CiCirclePlus } from "react-icons/ci";

import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter} from "@nextui-org/modal";

export default function Hero() {
  const [isModalOpen, setModalOpening] = useState(false);

  const handleOnAddClick = () => setModalOpening(!isModalOpen);

  return (
    <div className='w-full h-full'>
      <div className='flex flex-col justify-start items-center mt-4 w-full h-full text-white'>
        <CiCirclePlus className='text-[--font-secondary] hover:text-[#2e375c] w-40 h-40 mt-28 cursor-pointer'/>
        {/* <Card period='Tarde' actionType='Glicose' actionValue={4} colorBase='yellow-400'/> */}
       <div>
         <p className='text-sm text-[--font-secondary] mt-4'>Adicione sua primeira glicose do dia! 🕺</p>
      </div>
      </div>
    </div>
  )
}
