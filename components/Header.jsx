import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className='py-5 px-4 md:px-12 lg:px-28 '>
        <div className='flex items-center justify-between'>
            <Image src={assets.logo} alt="" className="w-auto sm:w-[130px]" />
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">Get started <Image src={assets.arrow} alt="
            "></Image></button>
        </div>
        <div className="text-center my-8">
          <h1 className="text-3xl sm:text-5xl font-medium ">Latest Blog</h1>
          <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nisi temporibus velit voluptate pariatur deleniti veritatis ab laborum consectetur rerum? Expedita porro sunt cumque adipisci possimus molestias, quaerat ullam omnis.</p>
          <form action="" className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
            <input type="email" placeholder='Enter yout email' className='pl-4 outline-none' />
            <button type="submit"className='border-l py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
          </form>
        </div>

    </div>
  )
}