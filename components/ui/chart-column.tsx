import React from "react"
import Image from "next/image";

interface chartData{
    rank: number;
    image: string;
    name: string;
    floorPrice: string;
    volume: string;
}

interface chartColumnProps{
    col: chartData[];
}

export const ChartColumn : React.FunctionComponent<chartColumnProps> = ({col}) => {
    return(
        <div className=" w-full">
        <div className=" w-full px-3 grid grid-cols-5 pb-2">
            {/* <div className="flex justify-between border-b-[1px] border-neutral-600 text-neutral-400 text-sm pb-2  "> */}
                {/* <div className="flex gap-3"> */}
                    <div className="border-b-[1px] text-start border-neutral-600 text-neutral-400 text-sm ">Rank</div>
                    <div className="border-b-[1px] text-start border-neutral-600 text-neutral-400 text-sm col-span-2 ">Collection</div>
                {/* </div> */}
                {/* <div className="flex gap-7"> */}
                    <div className="border-b-[1px] text-end border-neutral-600 text-neutral-400 text-sm">Floor Price</div>
                    <div className="border-b-[1px] text-end border-neutral-600 text-neutral-400 text-sm">Volume</div>
                {/* </div> */}
            {/* </div> */}
        </div>

            {col.map((data, key)=>(
                <div className=" w-full px-3 grid grid-cols-5 pb-9 items-center" key={key}>
                    <div className="text-start">{data.rank}</div>
                    <div className="grid grid-cols-2 items-center text-start col-span-2">
                        <Image src={'/home-caraousal-images/music1.jpg'} width={70} height={70} alt="{data.image}" className="rounded-xl"/>
                        {/* <div className="w-[70px] h-[70px]  flex justify-center items-center bg-neutral-800 ">
                            
                        </div> */}
                        <div>{data.name}</div>
                    </div>
                    <div className="text-end">{data.floorPrice}</div>
                    <div className="text-end">{data.volume}</div>
                </div>
            ))}

        </div>
    )
}