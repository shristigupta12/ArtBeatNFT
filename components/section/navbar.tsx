'use client'
import { ReactElement, useContext, useState } from "react"
import { Button } from "../ui/button"
import Image from "next/image"
import Web3 from "web3"
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider
    }
}

export const Navbar: React.FunctionComponent = () => {
    
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [account, setAccount] = useState<string | null>(null);


    const connectWalletHandler = async () => {
        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
            try {
                const accounts: any = await window.ethereum.request({ method: "eth_requestAccounts" });
                setWeb3(new Web3(window.ethereum));
                setAccount(accounts[0]);
                console.log("Connected account:", accounts[0]);
            } catch (error) {
                if (error instanceof Error && error.message.includes("User rejected the request")) {
                    console.error("User rejected the request.");
                } else {
                    console.error("An error occurred:", error);
                }
            }
        } else {
            console.log("Please install MetaMask");
        }
    }

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
                <Button className="bg-orange-500 hover:bg-orange-400" size="sm" onClick={connectWalletHandler}>
                    {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
                </Button>
            </div>
        </nav>
    )
}
