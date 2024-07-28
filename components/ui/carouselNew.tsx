import React from "react"
import Image from "next/image"

export const CarouselNew : React.FC<any> = ({num}) => {
    return(
        <Image src={'/home-caraousal-images/music3.jpg'} width={280} height={280} className=" bg-neutral-800 rounded-xl flex items-center justify-center font-bold" alt={num} />
    )
}