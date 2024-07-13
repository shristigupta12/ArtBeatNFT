import { MoralisNextApi } from "@moralisweb3/next";

if (!process.env.MORALIS_API_KEY) {
    throw new Error("MORALIS_API_KEY is not defined");
}

export default MoralisNextApi({ apiKey: process.env.MORALIS_API_KEY as string });