'use client';
import { Header } from "@/components/Header";
import { Bloglist } from "@/components/Bloglist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Bloglist/>
      <Footer/>
    </>
  );
}
