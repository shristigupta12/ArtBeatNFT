'use client'
import { ReactElement, useContext, useState } from "react"
import { Button } from "../ui/button"
import Image from "next/image"
import Web3 from "web3"
import { MetaMaskInpageProvider } from "@metamask/providers";
import { useToast } from '@/components/ui/use-toast'
import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { ConnectWalletButton } from "../ui/connect-wallet-btn"

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
        <nav>
            <div className="flex text-neutral-100 shadow-md shadow-neutral-800 items-center justify-between py-3 px-5 md:px-32 ml-20">
                <div className="flex items-center">
                    <span>
                        <Image src="/orange.png" alt="logo" width="35" height="35" />
                    </span>
                    <span className="text -neutral-100 font-bold">ArtBeatNFT</span>
                </div>
                <div>
                    <ul className="flex text-neutral-100 gap-5 md:gap-20 ">
                        <li className={`cursor-pointer hover:text-orange-400`} >Buy</li>
                        <li className={`cursor-pointer hover:text-orange-400`} >Sell</li>
                        <li className={`cursor-pointer hover:text-orange-400`} >Create</li>
                    </ul>
                </div>
                {/* <Button className="bg-orange-500 hover:bg-orange-400" size="sm" onClick={connectWalletHandler}>
                    {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
                </Button> */}
                <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
                    <ConnectWalletButton />
                </MetaMaskProvider>
            </div>
        </nav>
    )
}
