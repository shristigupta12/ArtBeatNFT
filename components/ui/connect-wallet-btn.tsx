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
              className="block w-full pl-2 pr-4 py-2 text-left text-[#F05252] hover:bg-gray-200"
            >
              Disconnect
            </button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button disabled={connecting} className="bg-orange-500 hover:bg-orange-400" size="sm" onClick={connect}>
          Connect Wallet
        </Button>
      )}
    </div>
  );
};