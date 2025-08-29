'use client'
import React, { useEffect, useState, use } from 'react'
import { blog_data,assets } from '@/assets/assets'
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import axios from 'axios';

const page = ({params}) => {
    const[data,setData] = useState(null);
    const { id } = use(params);
    const fetchBlogData = async () =>{
        const response = await axios.get('/api/blog',{
            params:{
                id:id
            }
        })
        setData(response.data);
    }
    useEffect(()=>{
        fetchBlogData();
    },[])
  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-1 lg:px-28'>
        <div className='flex items-center justify-between'>
            <Link href='/'>
            <Image src={assets.logo} alt="" className="w-auto sm:w-[130px]" /></Link>
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">Get started <Image src={assets.arrow} alt="
            "/></button>
        </div>
        <div className="text-center my-24">
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image src={data.author_img} alt="" width={60} height={60}  className='mx-auto mt-6 border border-white rounded-full' />
            <p>{data.author}</p>
        </div>
    </div>
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image src={data.image} alt="" width={1280} height={720} className='border-4 border-white' />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">Step:1 Self reflection and goal setting</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus praesentium? Fuga qui voluptate delectus asperiores! Eos aliquam placeat atque corporis eius in illum laudantium quae ab saepe, architecto velit.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus praesentium? Fuga qui voluptate delectus asperiores! Eos aliquam placeat atque corporis eius in illum laudantium quae ab saepe, architecto velit.</p>
        <h3 className="my-5 text-[18px] font-semibold">Step:1 Self reflection and goal setting</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus praesentium? Fuga qui voluptate delectus asperiores! Eos aliquam placeat atque corporis eius in illum laudantium quae ab saepe, architecto velit.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus praesentium? Fuga qui voluptate delectus asperiores! Eos aliquam placeat atque corporis eius in illum laudantium quae ab saepe, architecto velit.</p>
        <h3 className="my-5 text-[18px] font-semibold">Step:1 Self reflection and goal setting</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus praesentium? Fuga qui voluptate delectus asperiores! Eos aliquam placeat atque corporis eius in illum laudantium quae ab saepe, architecto velit.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus praesentium? Fuga qui voluptate delectus asperiores! Eos aliquam placeat atque corporis eius in illum laudantium quae ab saepe, architecto velit.</p>
        <div className="my-24">
            <p className="text-black font font-semibold">Share this on social media</p>
            <div className="flex">
                <Image src={assets.facebook_icon} alt="" width={30} height={30} className='mx-2 cursor-pointer' />
                <Image src={assets.googleplus_icon} alt="" width={30} height={30} className='mx-2 cursor-pointer' />
                <Image src={assets.twitter_icon} alt="" width={30} height={30} className='mx-2 cursor-pointer' />
            </div>
        </div>
    </div>
    <Footer />
    </>:<></>
  )
}
export default page;

