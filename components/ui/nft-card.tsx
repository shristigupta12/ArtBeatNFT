// import { NFTCollectionData } from "@/middleware/collections-data"
// import Image from "next/image";

// function Card({name, imgUrl}){
//     return(
//         <div>
//             <Image src={imgUrl} width={100} height={100} alt="Nft Image"/>
//             <div>{name}</div>
//         </div>
//     )
// }

// export default function NFTCard() {

//     var data;
//     try {
//         data = NFTCollectionData("kung-fu-art-1");
//         console.log(data);
//     } catch (err) {
//         console.error("Failed to fetch NFT data:", err);
//     }
      

//     return(
//         <div>{ data!=undefined ? <Card name={data.nfts[0].name} imgUrl={data.nfts[0].image_url} /> : <div></div>}</div>
//     )
// }
import { NFTCollectionData } from "@/middleware/collections-data";
import Image from "next/image";

interface CardProps {
  name: string;
  imgUrl: string;
}

function Card({ name, imgUrl }: CardProps) {
  return (
    <div>
      <Image src={imgUrl} width={100} height={100} alt="Nft Image" />
      <div>{name}</div>
    </div>
  );
}

export default function NFTCard() {
  const fetchData = async () => {
    try {
      const data = await NFTCollectionData("kung-fu-art-1");
      console.log(data); // Ensure this logs the correct data structure
      return data; // Return the fetched data
    } catch (err) {
      console.error("Failed to fetch NFT data:", err);
      return null; // Handle error case, maybe return an empty object or null
    }
  };

  return (
    <div>
      {fetchData().then((data) =>
        data ? (
          <Card name={data.nfts[0].name} imgUrl={data.nfts[0].image_url} />
        ) : (
          <div></div>
        )
      )}
    </div>
  );
}
