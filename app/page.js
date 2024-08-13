'use client'

import Bloglist from "@/Components/Bloglist";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
     <>
     <ToastContainer theme="dark"/>
     <Header/>
     <Bloglist/>
     <Footer/>
     </>
  )
}
