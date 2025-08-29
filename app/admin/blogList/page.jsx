'use client'

import BlogTableItem from "../../../components/AdminComponent/BlogTableItem"
import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import { toast } from "react-toastify"

const page = () => {
const [blogs, setBlogs] = useState([]); 
const deleteBlog = async (id) => {
    await axios.delete('/api/blog', {
        params: {
            id: id
        }
    });
    toast.success("Blog deleted successfully");
    fetchBlogs();
};

const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
}
useEffect(() => {
    fetchBlogs();
}, []);
  return (
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400">
        <table className="w-full text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">Author name</th>
              <th scope="col" className="px-6 py-3">blog Title</th>
              <th scope="col" className="px-6 py-3">date</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => {
              return <BlogTableItem key={index} id={item._id} title={item.title} author={item.author} deleteblog={deleteBlog} />
            })}
          </tbody>
        </table>

      </div>
      )
}

      export default page