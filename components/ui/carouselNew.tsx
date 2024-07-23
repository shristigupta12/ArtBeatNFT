import React from "react"

export const CarouselNew : React.FC<any> = ({num}) => {
    return(
        <div className=" w-[280px] h-[280px] bg-white rounded-xl flex items-center justify-center font-bold">
            {num}
        </div>
    )
}