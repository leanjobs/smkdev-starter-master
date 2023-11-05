"use client"
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import gambar1 from "@/assets/gambar1.jpg";
import gambar2 from "@/assets/gambar2.jpg";
import gambar3 from "@/assets/gambar3.jpg";
import gambar4 from "@/assets/gambar4.jpg";
import gambar5 from "@/assets/gambar5.jpg";


export default function MyCarousel() {
  return (
    <div className="max-w-[1700px] h-[780px] w-full m-auto py-16 px-4">
      <Carousel pauseOnHover>
        <Image src={gambar1} alt="..." />
        <Image src={gambar2} alt="..." />
        <Image src={gambar3} alt="..." />
        <Image src={gambar4} alt="..." />
        <Image src={gambar5} alt="..." />
      </Carousel>
    </div>
  );
}
