    
'use client';

import { Footer } from 'flowbite-react';
import logo from "@/assets/logo.svg";
import Image from "next/image";
import apple from "@/assets/apple.svg";
import google from "@/assets/google.svg";
import fb from "@/assets/fb.svg";
import instagram from "@/assets/instagram.svg";
import pinterest from "@/assets/pinterest.svg";


export default function MyFooter() {
  return (
    <Footer container className=' bg-black'>
      <div className="w-full">
        <div className="grid w-full justify-center sm:flex sm:justify-center md:flex md:grid-cols-1 ">
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div>
                 <div>
                    <Image src={logo} alt="logo" width="100" height="100" />
                    <p className="text-white mt-4 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates voluptatum dolore ad dolores placeat vitae mollitia, labore molestias eum, tenetur hic sed dignissimos, atque iusto eaque necessitatibus suscipit officiis excepturi!</p>
                </div>
            </div>
            <div className="text-white mx-20 ">
                <ul >
                    <li className="py-2"><p>Tentang Kami</p></li>
                    <li className="py-2"><p>Blog</p></li>
                    <li className="py-2"><p>Layanan</p></li>
                    <li className="py-2"><p>Karir</p></li>
                    <li className="py-2"><p>Pusat Media</p></li>
                </ul>
                </div>
            <div>
            <div>
                <p className="text-white font-bold">Download</p>
                <ul className="flex items-center">
                <li><Image src={google} alt="google" width="180" height="55"/></li>
                <li><Image src={apple} alt="apple" width="180" height="45"/></li>
                </ul>
            </div>
            <div className="mt-10">
                <p className="text-white font-bold">Social Media</p>
                <ul className="flex items-center ml-2 mt-2">
                <li><Image src={fb} alt="fb" width="50" height="50"/></li>
                <li className="mx-8"><Image src={pinterest} alt="pinterest" width="55" height="55"/></li>
                <li><Image src={instagram} alt="instagram" width="55" height="55"/></li>
                </ul>
            </div>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-center">
          <p className='text-white'>Copyright © . All Rights Reserved</p>
        </div>
      </div>
    </Footer>
  );
}
