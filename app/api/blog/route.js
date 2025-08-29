import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";
const fs = require('fs');
//const { NextResponse } = require("next/erver")
const LoadDB = async () => {
    await connectDB();
} 

LoadDB();

//Fetching blog data
export async function GET(request){
    const BblogId = request.nextUrl.searchParams.get('id');
    if(BblogId){
        const blog = await BlogModel.findById(BblogId);
        return NextResponse.json(blog);
    }
    else{
        const blogs = await BlogModel.find({});
        return NextResponse.json({blogs});
    }
    
}


//Uploading blog data with image
export async function POST(request) {

    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData)
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        author_img: '/author.png',
        image: `${imgUrl}`,
    }
    await BlogModel.create(blogData);
    console.log("Blog data saved successfully", blogData);
    return NextResponse.json({success:true,msg: "Blog data saved successfully"});      

    
}


//Deleting blog data
export async function DELETE(request) {
    const blogId = request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(blogId);
    fs.unlink(`./public${blog.image}`, () => {});
    await BlogModel.findByIdAndDelete(blogId);
    return NextResponse.json({msg: "Blog deleted successfully"});
}
