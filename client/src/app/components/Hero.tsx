'use client'
import React, { useState, useEffect, useRef } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [periodValue, setPeriodValue] = useState('0');
  const [actionTypeValue, setActionTypeValue] = useState('0');

  const actionValue : any = useRef(null);

  const handleActionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setActionTypeValue(event.target.value);
  };

  return (
    <div className='w-full h-full bg-[--primary]'>
      <div className='flex flex-col justify-start items-center mt-4 w-full h-full text-white'>
        <CiCirclePlus onClick={onOpen} className='text-[--font-secondary] hover:text-[#2e375c] w-40 h-40 mt-28 cursor-pointer'/>
        {/* <Card period='Tarde' actionType='Glicose' actionValue={4} colorBase='yellow-400'/> */}
       <div>
         <p className='text-sm text-[--font-secondary] mt-4'>Adicione sua primeira glicose do dia! 🕺</p>
      </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adição de atividade</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Período</FormLabel>
              <RadioGroup onChange={setPeriodValue} value={periodValue}>
                <div className='flex gap-x-3'>
                  <Radio value='1'>Matutino</Radio>
                  <Radio value='2'>Vespertino</Radio>
                  <Radio value='3'>Noturno</Radio>
                </div>
              </RadioGroup>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Tipo de atividade</FormLabel>
              <Select onChange={handleActionChange} value={actionTypeValue} placeholder='Selecione a atividade'>
                <option value='1'>Glicose</option>
                <option value='2'>Aplicação insulina</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              {actionTypeValue == '1' ? (
                <FormLabel> Valor da glicose </FormLabel>
              ) : (
                <FormLabel> Valor em unidades </FormLabel>
              )}
              
              <Input type='number' ref={actionValue} placeholder='Insira o valor' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant={'ghost'} colorScheme='red' mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme='green'>Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
