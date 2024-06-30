import { HTMLAttributes, useEffect, useState } from "react";
import { artMockData } from "@/mocks/art-mock";
import { musicMockData } from "@/mocks/music-mock";
import { pfpMockData } from "@/mocks/pfp-mock";
import { UseNavCategory } from "@/app/page";
import Image from "next/image";


interface CarouselSectionProps extends HTMLAttributes<HTMLDivElement> {
  slideIndex: number;
}


export const Carousel : React.FunctionComponent<CarouselSectionProps> = ({slideIndex,className, children}:any) =>{

    let {category, setCategory} = UseNavCategory();

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
        <div className=" h-full transition-all" style={{"transform":`translateX(${slideIndex*-100}vw)`}}>
            {mockData.map((obj)=>{
                return(
                    <div className="flex flex-col w-full h-full justify-evenly items-center" key ={obj.id}>
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