import React from 'react'
import Sorch from '../../assets/icons/sorch'
import Eys from '../../assets/icons/eys'
import Like from '../../assets/icons/like'
import Strategy from '../../assets/icons/strategy'
import Korzinka from '../../assets/icons/korzinka'
import logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <div className='w-[90%] mx-auto'>
      <header className='flex flex-wrap items-center h-auto py-4 justify-between'>
        <div className='w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0'>
          <img src={logo} alt="Logo" className='w-32 h-auto' />
        </div>

        <div className='hidden md:flex flex-col lg:flex-row items-center gap-5'>
          <p className='text-sm lg:text-base'>+7 (812) 660-50-54</p>
          <p className='text-sm lg:text-base'>+7 (812) 660-50-54</p>
          <p className='text-sm lg:text-base'>Пн-вс: с 10:00 до 21:00</p>
        </div>

        <div className='flex flex-1 justify-center md:justify-end items-center gap-4'>
          <div className='flex items-center border rounded-lg overflow-hidden'>
            <Sorch className='px-2' />
            <input 
              type="text" 
              placeholder='Поиск' 
              className='p-2 focus:outline-none w-28 md:w-auto'
            />
          </div>

          <div className='hidden md:flex items-center gap-4'>
            <Eys />
            <Like />
            <Strategy />
            <Korzinka />
          </div>

          <button className='bg-[#2A5275] p-3 rounded-lg border-none text-white text-sm'>
            Войти
          </button>
        </div>
      </header>
    </div>
  )
}
