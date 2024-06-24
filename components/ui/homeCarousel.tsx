import { HTMLAttributes, useEffect, useState } from "react";
import { artMockData } from "@/mocks/art-mock";
import { musicMockData } from "@/mocks/music-mock";
import { pfpMockData } from "@/mocks/pfp-mock";
import { useNavCategory } from "@/app/page";
import Image from "next/image";


export const Carousel : React.FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({className, children}) =>{

    let {category, setCategory} = useNavCategory();

    let [mockData, setMockData] = useState<Array<homePageCarousal>>(artMockData);
    
    useEffect(()=>{
        switch (category) {
            case "Art":
                setMockData(artMockData);
                break;
            case "Music":
                setMockData(musicMockData);
                break;
            case "PFPs":
                setMockData(pfpMockData);
                break;
        
            default:
                break;
        }
    },[category])
    

    return(
        <div className="w-full flex">
            {mockData.map((obj)=>{
                return(
                    <div className="flex w-full justify-evenly items-center" key ={obj.id}>
                        <Image src={obj.imageLink} width={370} height={20} alt="nftImage" className="h-4/6 " />
                        <div className="nft-details text-white flex flex-col gap-6  text-center">
                            <div className="flex flex-col gap-3">
                                <div className=" text-6xl font-semibold ">{obj.name}</div>
                                <div>by <span className="italic text-xl">{obj.username}</span></div>
                            </div>
                            <div className="text-md text-orange-400">{obj.numberOfItems} items | {obj.price} eth</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}