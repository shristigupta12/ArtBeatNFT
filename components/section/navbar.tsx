'use client'
import { Button } from "../ui/button"
import Image from "next/image"

export const Navbar : React.FunctionComponent = () => {
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
                        <li className="cursor-pointer hover:text-orange-400 ">All</li>
                        <li className="cursor-pointer hover:text-orange-400">Art</li>
                        <li className="cursor-pointer hover:text-orange-400">Music</li>
                        <li className="cursor-pointer hover:text-orange-400">PFPs</li>
                    </ul>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-400  ">Connect Wallet</Button>
            </div>
        </nav>
    )
}
