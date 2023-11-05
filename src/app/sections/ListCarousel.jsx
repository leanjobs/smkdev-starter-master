"use client"

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function MyCarousel() {
  return (
    <div className="max-w-[1700px] h-[780px] w-full m-auto py-16 px-4">
      <Carousel pauseOnHover>
        <Image src='https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg' alt="..." />
        <Image src='https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg' alt="..." />
        <Image src='https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/h56edmERPTkey89SqyKu4hINVNy.jpg' alt="..." />
        <Image src='https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/h56edmERPTkey89SqyKu4hINVNy.jpg' alt="..." />
        <Image src='https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg' alt="..." />
      </Carousel>
    </div>
  );
}
