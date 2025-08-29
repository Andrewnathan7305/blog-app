import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://andrewnathan0704:JNkNHFAnn1R4E6zz@cluster0.l6f3pvb.mongodb.net/blog');
    console.log("MongoDB connected successfully");
}