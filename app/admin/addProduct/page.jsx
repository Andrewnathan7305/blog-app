'use client'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const page = () => {
  const [image, setImage] = React.useState(false);  
  const [data, setData] = React.useState({
    title: '',
    description: '',
    category: 'Technology',
    author:'alex',
    authorImg:'/author.png',
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value }); 
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form data:', data);
    console.log('Image file:', image);
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', data.title);
    formData.append('description', data.description);       
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);   
    const response = await axios.post('/api/blog', formData);
    if(response.data.success) {
        toast.success(response.data.msg);
        setImage(false);
        setData({
          title: '',
          description: '',
          category: 'Technology',
          author: 'alex',
          authorImg: '/author.png',
        });


    }
    else{
        toast.error("Something went wrong, please try again later");
       
    }
  }
  return (
    <form onSubmit={handleSubmit} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl">Upload thumbnail</p>
      <label htmlFor="image">
        <Image 
          src={!image ? assets.upload_area : URL.createObjectURL(image)} 
          alt="Upload Icon" 
          width={140} 
          height={70} 
          className="mt-4 cursor-pointer" 
        />
      </label>
      <input 
        onChange={(e) => setImage(e.target.files[0])} 
        type="file" 
        id="image" 
        hidden 
      />

      <p className="text-xl mt-4">Blog Title</p>
      <input 
        name="title" 
        onChange={onChangeHandler} 
        value={data.title} 
        type="text" 
        className="w-full border border-black px-2 py-1 mt-2" 
        placeholder="Enter blog title" 
        required 
      />

      <p className="text-xl mt-4">Blog Description</p>
      <textarea 
        name="description" 
        onChange={onChangeHandler} 
        value={data.description} 
        className="w-full border border-black px-2 py-1 mt-2" 
        placeholder="Write content here" 
        required 
      />

      <p className="text-xl mt-4">Blog Category</p>
      <select 
        name="category" 
        onChange={onChangeHandler} 
        value={data.category} 
        className="w-full border border-black px-2 py-1 mt-2" 
        required
      >
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Startup">Startup</option>
      </select>

      <button type="submit" className="bg-black text-white px-4 py-2 mt-4">
        Submit
      </button>
    </form>
  )
}

export default page
