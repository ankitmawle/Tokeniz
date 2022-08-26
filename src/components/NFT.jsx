import React, { useState } from 'react';
import styles from "../style";
import NFT_Card from "./NFT_Card";

const NFT = () => 
{
  const [NFTdata, setNFTs] = useState([{
    "img":"https://ipfs.moralis.io:2053/ipfs/QmQ7MvUEJ98D2ePZTreoWR9XMWnDsHjHtCMC1sJrjZp2Ww",
    "name" : "No Tokeniz Found in your wallet",
    "description":'Do not have a tokeniz yet, Click here and mint one of your own',
    "link": "/app/Mint",
    "visibility": "invisible"
  }]);
  async function loadNFTs(){
    var data= await _loadNFTS();
    if(data.length==0){
      setNFTs([{
        "img":"https://ipfs.moralis.io:2053/ipfs/QmQ7MvUEJ98D2ePZTreoWR9XMWnDsHjHtCMC1sJrjZp2Ww",
        "name" : "No Tokeniz Found in your wallet",
        "description":'Do not have a tokeniz yet, Click here and mint one of your own',
        "visibility": "invisible",
        "link": "/app/Mint",
      }]);
    }
    else{
      setNFTs(data);
    }
  }  
  
  return(
  <section id="clients" onLoad={loadNFTs} className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 onClick={loadNFTs} className={styles.heading2}>
        Your Tokeniz<br className="sm:block hidden" /> 
      </h2>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {NFTdata.map((card) => <NFT_Card key={card.id} {...card} />)}
    </div>
  </section>
);}

export default NFT;
