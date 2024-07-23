import { ViewContainer } from "../layout/view-container"
import { CarouselNew } from "../ui/carouselNew"
import React from "react"


export const HomeCarouselNew : React.FunctionComponent = () => {

    const mockArray = [1, 2, 3, 4]

    return(
        <div className="flex items-center">
            <div className="arrow-left cursor-pointer text-black bg-slate-50 rounded-[100%] w-7 h-7 flex items-center justify-center">L</div>
            <div className="px-2 flex gap-3 overflow-hidden flex-shrink-0 translate-x-[0px]">  
                {mockArray.map((obj, index)=>(
                    <CarouselNew key={index} num={obj} />
                ))}
            </div>
            <div className="arrow-left cursor-pointer text-black bg-slate-50 rounded-[100%] w-7 h-7 flex items-center justify-center">R</div>
        </div>
        
    )
}