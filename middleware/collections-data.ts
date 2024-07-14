// import { NFTCollection } from '@/common/environment-variables';

// const openSeaApiKey = "7d529f3203ae416285f428075c2a47a5";

// // const openSeaApiKey = NFTCollection.OPEN_SEA_KEY;
// // if (!openSeaApiKey) {
// //   throw new Error("OpenSea API key is not defined");
// // }

// interface options {
//     method: string,
//     headers:{
//         accept: string;
//         'x-api-key' : string | undefined;
//     }
// }

// const options = {
//     method: 'GET',
//     headers: {accept: 'application/json', 'x-api-key': openSeaApiKey}
//   };

// async function  NFTCollectionData(collection_slug: string){
  
//   await fetch(`https://api.opensea.io/api/v2/collection/${collection_slug}/nfts`, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


// }



import { NFTCollection } from '@/common/environment-variables';

const openSeaApiKey = process.env.OPENSEA_API_KEY || "7d529f3203ae416285f428075c2a47a5";

// Ensure the API key is defined
if (!openSeaApiKey) {
  throw new Error("OpenSea API key is not defined");
}

interface Options {
  method: string;
  headers: {
    accept: string;
    'x-api-key': string;
  };
}

const options: Options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-api-key': openSeaApiKey,
  },
};

async function NFTCollectionData(collection_slug: string) {
  try {
    const response = await fetch(`https://api.opensea.io/api/v2/collection/${collection_slug}/nfts`, options);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export {NFTCollectionData}