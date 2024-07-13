// import Moralis from 'moralis';
// import React from 'react';

// async function NftData(){

//     var response;
//     try {
//     await Moralis.start({
//         apiKey: process.env.MORALIS_API_KEY
//     });

//     response = await Moralis.EvmApi.nft.getNFTContractMetadata({
//         "chain": "0x1",
//         "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
//     });
//     console.log(response?.raw);
//     } catch (e) {
//     console.error(e);
//     }

//     return response;

// }

// export function NftComponent : React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = () => {
//     return(
//         <div>

//         </div>
//     )
// }

import React from 'react';
import Moralis from 'moralis';

async function NftData() {
    try {
        await Moralis.start({
            apiKey: process.env.MORALIS_API_KEY
        });

        const response = await Moralis.EvmApi.nft.getNFTContractMetadata({
            "chain": "0x1",
            "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
        });
        console.log(response?.raw);
        return response; // Return the response from the async function
    } catch (e) {
        console.error(e);
        throw e; // Rethrow the error to propagate it
    }
}

const NftComponent: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = () => {
    // Example usage of NftData within the component
    var response;
    const fetchData = async () => {
        try {
            response = await NftData();
            console.log(response); // Log the response or process it further
        } catch (error) {
            console.error('Error fetching NFT data:', error);
        }
    };

    // Call fetchData on component mount or based on your application logic
    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className='text-white'>{typeof response}</div>
        </div>
    );
};

export default NftComponent;
