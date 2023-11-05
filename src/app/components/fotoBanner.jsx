import {imageUrl} from "@/lib/api";
import Image from "next/image";

export default function MyBanner({
    image,
    popularity,
    overview,
    title
}){
    ''
    return(
        <>
        <div className="w-full h-screen">
            <Image src={imageUrl + image}/>
            <div className="bg-black/30 absolute top-0 left-0 w-full h-screen">
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                    <p>hello</p>
                    <h3>{title}</h3>
                    <p>{popularity} reviews</p>
                    <div>
                        <p>{overview.length > 100 ? overview.slice(0, 100) + "..." : overview}</p>
                    </div>
                    <button className="border-2 bg-[#EB507F]">Watch Trailer</button>
                    <button className="border-2 border-white">Add To Watchlist</button>
                </div>
            </div>
        </div>
        </>
    )

}