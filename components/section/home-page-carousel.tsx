import { ViewContainer } from "../layout/view-container"
// import { Carousel } from "../ui/homeCarousel"

import { UseSubNavCategory } from "@/app/page";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import { HTMLAttributes, useEffect, useState } from "react";
import { artMockData } from "@/mocks/art-mock";
import { musicMockData } from "@/mocks/music-mock";
import { pfpMockData } from "@/mocks/pfp-mock";
import Image from "next/image";



// export const CarouselSection : React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = () => {
//     let {category, setCategory} = UseNavCategory();

    // const [slideIndex, setSlideIndex] = useState<number>(0);

    // const handleClick = (direction:string)=>{
    //     if(direction=="left"){
    //         console.log("left button clicked");
    //         setSlideIndex(slideIndex>0 ? slideIndex-1 : 3)
    //     }else{
    //         console.log("right button clicked");
    //         setSlideIndex(slideIndex<4 ? slideIndex+1 : 0)
    //     }
    // }



    // return(
    //     <section> 
    //         <ViewContainer className=" w-full text-white flex justify-between relative items-start">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-left-filled cursor-pointer absolute top-0 bottom-0  m-auto" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" stroke-width="0" fill="currentColor" onClick={()=>handleClick("left")}/>
                </svg>

                <Carousel slideIndex={slideIndex}/>

                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-right-filled cursor-pointer absolute top-0  bottom-0 m-auto right-0" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" stroke-width="0" fill="currentColor" onClick={()=>handleClick("right")}/>
                </svg> */}
//             </ViewContainer>
//         </section>
//     )
// }

export const CarouselSection : React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = () => {
    let {category, setCategory} = UseSubNavCategory();
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
        <section> 
            <ViewContainer className=" h-[84vh] text-white flex justify-between relative items-start">
            <Carousel>
                <CarouselContent>
                    {mockData.map((obj)=>{
                        return(
                            <CarouselItem key ={obj.id} className="flex gap-2 justify-center">
                                <Image src={obj.imageLink} width={370} height={20} alt="nftImage" className="h-4/6" />
                                <div className="nft-details text-white flex flex-col gap-6 items-center justify-center h-4/5">
                                    <div className="flex flex-col gap-3 items-center">
                                        <div className=" text-6xl font-semibold ">{obj.name}</div>
                                        <div>by <span className="italic text-xl">{obj.username}</span></div>
                                    </div>
                                    <div className="text-md text-orange-400">{obj.numberOfItems} items | {obj.price} eth</div>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
            </ViewContainer>
        </section>
    )
}