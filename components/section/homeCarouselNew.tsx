import { ViewContainer } from "../layout/view-container"
import { CarouselNew } from "../ui/carouselNew"
import React from "react"
import { useState } from "react"


export const HomeCarouselNew : React.FunctionComponent = () => {

    const mockArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // const [slider, setSlider] = useState<number>(0);

    // const handleClickLeft = () => {
    //     setSlider(slider >= 190 ? 0 : slider + 95);
    //   };
      
    //   const handleClickRight = () => {
    //     setSlider(slider <= -190 ? 0 : slider - 95);
    //   };
      


    return(
        <div className="flex items-center w-full px-9  ">
            {/* <div className="arrow-left cursor-pointer text-black bg-slate-50 rounded-[100%] w-7 h-7 flex items-center justify-center" onClick={handleClickLeft}>L</div> */}
            <div className={`px-2 flex gap-3 w-[100vw] overflow-y-hidden overflow-x-scroll`}>
                <div className={`flex gap-3`}>
                    {mockArray.map((obj, index) => (
                        <CarouselNew key={index} num={obj} />
                    ))}
                </div>
            </div>
            {/* <div className="arrow-left cursor-pointer text-black bg-slate-50 rounded-[100%] w-7 h-7 flex items-center justify-center" onClick={handleClickRight}>R</div> */}
        </div>
        
    )
}