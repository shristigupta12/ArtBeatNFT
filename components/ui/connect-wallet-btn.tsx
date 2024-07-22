"use client";

import Link from "next/link";



import { Button } from "../ui/button"
import { useToast } from '@/components/ui/use-toast'
import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { formatAddress } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account } = useSDK();
  const { toast } = useToast();
  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      if (err instanceof Error && err.message.includes("User rejected the request")) {
        console.error("No accounts found", err);
    } else {
        toast({
            title: "Please install MetaMask!",
            description: "",
            });
        
    }
    }
  };

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  return (
    <div className="relative">
      {connected ? (
        <Popover>
          <PopoverTrigger>
            <Button>{formatAddress(account)}</Button>
          </PopoverTrigger>
          <PopoverContent className="mt-2 w-44 bg-gray-100 border rounded-md shadow-lg right-0 z-10 top-10">
            <button
              onClick={disconnect}
              className="flex gap-1 items-center bg-gray-700 p-3 rounded-xl opacity-50 cursor-pointer"
            >
              Disconnect
            </button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button disabled={connecting} className="flex gap-1 h-full items-center bg-gray-700 p-3 rounded-xl opacity-50 cursor-pointer" onClick={connect}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-briefcase" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" />
              <path d="M3 13a20 20 0 0 0 18 0" />
          </svg>
          Login
        </Button>
      )}
    </div>
  );
};