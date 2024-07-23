'use client'
import { ReactElement, useContext, useState } from "react"
import { Button } from "../ui/button"
import Image from "next/image"
import Web3 from "web3"
import { MetaMaskInpageProvider } from "@metamask/providers";
import { useToast } from '@/components/ui/use-toast'
import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { ConnectWalletButton } from "../ui/connect-wallet-btn"
import { Input } from "../ui/input"

// declare global {
//     interface Window {
//         ethereum?: MetaMaskInpageProvider
//     }
// }

export const Navbar: React.FunctionComponent = () => {
    
    let [web3, setWeb3] = useState<Web3 | null>(null);
    // const [account, setAccount] = useState<string | null>(null);
    const [error, setError] = useState('')
    const { toast } = useToast();

    const { sdk, connected, connecting, account } = useSDK();

    // const connectWalletHandler = async () => {
        // if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
        //     try{
        //         await window.ethereum.request({method: "eth_requestAccounts"});
        //         web3 = new Web3(window.ethereum)
        //     }
        //     catch(err: any){
        //         if (err instanceof Error && err.message.includes("User rejected the request")) {
        //             console.error("User rejected the request.");
                    
                    
        //         } else {
        //             console.error("An error occurred:", err);
                   
        //         }
        //     }
        // } else {
        //     toast({
        //         title: "Please install MetaMask!",
        //         description: "",
        //       });
        // }
    // }

    const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host, // using the host constant defined above
    },
  };

    return (
        <nav className="flex text-neutral-100  items-center justify-between py-3 px-10 font-semibold">
                <div className="flex gap-7 items-center">
                    <div className="flex items-center gap-1 border-r-[1px] border-neutral-500 pr-4  h-8">
                        <span>
                            <Image src="/wand.png" alt="logo" width="25" height="25" />
                        </span>
                        <span className="text -neutral-100 font-bold">ArtBeatNFT</span>
                    </div>
                    <div>
                        <ul className="flex text-neutral-100 gap-2 md:gap-9  ">
                            <li className={`cursor-pointer hover:text-neutral-400`} >Buy</li>
                            <li className={`cursor-pointer hover:text-neutral-400`} >Sell</li>
                            <li className={`cursor-pointer hover:text-neutral-400`} >Create</li>
                        </ul>
                    </div>
                </div>

                <div className="relative">
                    {/* <Input className="bg-white placeholder-neutral-400 search-bar"/> */}
                    <input type="text" placeholder="Search" className="w-96 py-2 px-3 pl-10  text-neutral-50 bg-gray-700 rounded-xl placeholder:text-neutral-50 opacity-50 outline-none  focus:border-[1px] focus:border-neutral-500 font-normal" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search absolute top-[2.2vh] left-2" width="25" height="21" viewBox="0 0 24 24" stroke-width="1.5" stroke="#777879" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                    </svg>
                </div>

                <div className="flex gap-7 items-center">
                    <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
                    <ConnectWalletButton />
                    </MetaMaskProvider>
                    <div className="flex gap-1 items-center bg-gray-700 py-3 px-3 rounded-xl opacity-50 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                    </div>
                    <div className="flex gap-1 items-center bg-gray-700 py-3 px-3 rounded-xl opacity-50 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                    </div>

                </div>
                {/* <Button className="bg-orange-500 hover:bg-orange-400" size="sm" onClick={connectWalletHandler}>
                    {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
                </Button> */}
                

        </nav>
    )
}
