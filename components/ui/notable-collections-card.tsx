import React from "react"
import Image from "next/image"

export const NotableCollectionsCard : React.FunctionComponent = () => {
    return(
        <div className=" flex flex-col w-[244px]">
            <Image src={'/home-caraousal-images/pfp1.jpg'} width={244} height={162} alt="image" className=" rounded-t-xl"/>

            <div className="w-full bg-neutral-800 rounded-b-xl text-white flex flex-col p-4 gap-2">
                <div className="font-bold">Rabbit</div>

                <div className="flex w-full justify-between">
                    <div className="flex w-full flex-col">
                        <div className=" text-neutral-400 text-sm">Floor</div>
                        <div className="font-bold">1.2 ETH</div>
                    </div>
                    <div className="flex w-full flex-col">
                        <div className=" text-neutral-400 text-sm">Total Volume</div>
                        <div className="font-bold">2,126 ETH</div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}