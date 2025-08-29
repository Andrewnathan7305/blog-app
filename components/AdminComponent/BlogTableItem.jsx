import React from 'react'
import Image from 'next/image'
const BlogTableItem = ({ title ,author,deleteblog,id}) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="hidden sm:flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Image src="/author.png" alt="Author Image" width={50} height={50} className="rounded-full" />
                <p>{author?author:"no author"}</p>
            </th>
            <td className="px-6 py-4">
                {title ? title : "No Title"}
            </td>
            <td className="px-6 py-4">
                11 Jan 2004
            </td>
            <td onClick={()=>deleteblog(id)} className="px-6 py-4 cursor-pointer">
                x
            </td>
        </tr>


    )
}

export default BlogTableItem
