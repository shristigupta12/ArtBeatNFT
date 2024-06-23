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
        <div>
            {mockData.map((obj)=>{
                return(
                    <Image key ={obj.id} src={obj.imageLink} width={200} height={20} alt="nftImage" />
                )
            })}
        </div>
    )
}