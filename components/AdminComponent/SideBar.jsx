import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Link from 'next/link'

export const SideBar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} alt="Logo" width={120} className="cursor-pointer" />
      </div>

      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0 space-y-4">
          {/* Each button */}
          <div className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Link href="/admin/addProduct">
              <Image src={assets.add_icon} alt="Admin" width={30} />
            </Link>
            <p>Add Blogs</p>
          </div>

          <div className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Link href="/admin/blogList">
              <Image src={assets.blog_icon} alt="Admin" width={30} />
            </Link>
            <p>Blogs List</p>
          </div>

          <div className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Link href="/admin/subscriptions">
              <Image src={assets.email_icon} alt="Admin" width={30} />
            </Link>
            <p>Subscription</p>
          </div>
        </div>
      </div>
    </div>
  )
}
