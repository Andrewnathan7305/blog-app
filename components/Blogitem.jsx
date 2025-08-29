import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Link from 'next/link';

export const Blogitem = ({title,description,category,image,id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
        <Link href={`/blogs/${id}`}>
            <Image src={image} alt='' width={160} height={160} className='border-b border-black'/>
        </Link>
        <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">{category}</p>
        <div className="p-5">
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
            <p className="mb-3 text-small tracking-tight text-gray-700">{description}</p>
            <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center">read more
                <Image src={assets.arrow} alt='' className='ml-2' width={12}/>
            </Link>
        </div>
    </div>
  )
}
