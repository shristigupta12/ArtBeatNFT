'use client'
import { ReactElement, useContext } from "react"
import { Button } from "../ui/button"
import Image from "next/image"
import { useNavCategory } from "@/app/page"

export const Navbar : React.FunctionComponent = () => {

    let {category, setCategory} = useNavCategory();

    function handleClick(e: any) {
        setCategory(e.currentTarget.textContent || "");
    }

    return(
        <nav>
            <div className="flex text-neutral-100 shadow-md shadow-neutral-800 items-center justify-between    py-3 px-32  ">
                <div className="flex items-center">
                    <span>
                        <Image src="/orange.png" alt="logo" width="35" height="35" />
                    </span>
                    <span className="text-neutral-100 font-bold">ArtBeatNFT</span>
                    </div>
                <div>
                    <ul className="flex text-neutral-100 gap-20 ">
                        <li className="cursor-pointer hover:text-orange-400" onClick={handleClick}>All</li>
                        <li className="cursor-pointer hover:text-orange-400" onClick={handleClick}>Art</li>
                        <li className="cursor-pointer hover:text-orange-400" onClick={handleClick}>Music</li>
                        <li className="cursor-pointer hover:text-orange-400" onClick={handleClick}>PFPs</li>
                    </ul>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-400  ">Connect Wallet</Button>
            </div>
        </nav>
    )
}
