"use client"
import { useGetMovies } from "@/hooks/useMovie"
import Card from"../components/Card"
import {useSearchParams} from 'next/navigation'
import Link  from "next/link"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { useState } from "react"


export default function ListMovie(){
    const [sortBy, setSortBy] = useState('popularity.desc');
    const params = useSearchParams();
    const data = useGetMovies(sortBy, params.get('page'));
    const currentPage = parseInt(params.get('page') || 1);
    
    return(
        <>
         <div>
            <div className="text-6xl pt-10 pl-2 font-bold pb-5">
                <p>Catagory</p>
            </div>
            <select className="rounded-full bg hover:bg-[#EB507F] p-3 mb-2 mr-5 text-2xl" name="" id="" onChange={(e) => setSortBy(e.target.value)}>
                <option className="bg-white" value="popularity.desc">Popularity desc</option>
                <option className="bg-white" value="popularity.asc">Popularity asc</option>
            </select>
            <select className="rounded-full bg hover:bg-[#EB507F] p-3 mb-2 mr-5 text-2xl" name="" id="" onChange={(e) => setSortBy(e.target.value)}>
                <option className="bg-white" value="revenue.desc">Revenue desc</option>
                <option className="bg-white" value="revenue.asc">Revenue asc</option>
            </select>
        </div>
        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 justify-center sm:justify-around gap-5">
            {data?.results?.map((item, index) => (
                <Link href={`/movie/${item.id}`} key={item.id}>
                    <Card image={item.poster_path} overview={item.overview} id={item.id} popularity={item.popularity} title={item.title}/>
                </Link>
            ))}
        </div>

        <div className="flex justify-center gap-10 ">
                <ul className="flex items-center gap-10 mt-10 mb-10 text-3xl">
                    <li>
                        <Link href={`/?page=${currentPage - 1}`}>
                            <BsArrowLeft/>
                        </Link>
                    </li>
                    {[...Array(6).keys()].map((i) => (
                        <li key={i}>
                            <Link href={`/?page=${i + 1}`}>
                                {i + 1}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href={`/?page=${currentPage + 1}`}>
                            <BsArrowRight/>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}