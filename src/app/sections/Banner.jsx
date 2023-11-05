"use client"
import { useParams } from "next/navigation";
import { useGetDetailMovies } from "@/hooks/useMovie";
import MyBanner from "@/app/components/fotoBanner";

export default function Detail() {
    
    const params = useParams();
    const data = useGetDetailMovies();

    console.log(data)


    return(
        <>
            
            <p>{params.id}</p>
               {data?.result?.map((item, index) => (
                    <MyBanner image={item.backdrop_path} id={item.id} title={item.title} popularity={item.popularity} overview={item.overview}/>
               ))}
            
        </>
    )
}