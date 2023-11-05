"use client"
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Detail from "@/app/sections/Banner";
import MyFooter from "@/app/sections/Footer"

export default function Page() {

    return(
        <>
       
        <header className='py-2 shadow-md shadow-gray-600'>
                <nav className='flex container mx-auto justify-between items-center'>
                <Image src={logo} alt="logo" width="100" height="100" />
                <div>
                    <input type="text" placeholder='Searching' />
                </div>
                </nav>   
            </header>

        <main>
            <Detail/>
        </main>

        <footer>
            <MyFooter/>
        </footer>
        </>
    )
}