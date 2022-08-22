import React from "react";
import {coin, tokenizAdmin} from "../assets"
import styles, { layout } from "../style";

const My=()=>{

    return(
    <>
        <section  className={layout.sectionReverse}>
         <h2 className={styles.heading2}>
            Unpack your NFTs Here <br className="sm:block hidden" /> 
        </h2>
        </section>

        <section id="nfts" className="min-h-[100vh]">
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[300px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <h3 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          Please provide us with details to get back your tokens
        </h3>
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
          <label class="relative block p-3 border-2 border-gray-200 rounded-lg" for="name">
          <input
            class="text-black  w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
            id="unpackID"
            type="number"
            placeholder="0"
          />

          <span class="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
            Tokeniz ID
          </span>
        </label>
        </p>
        <button onClick={unpack} class="inline-block p-[2px] rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring" >
        <span class="block px-8 py-3 text-sm font-medium bg-white rounded-sm hover:bg-transparent">
          Unpack
        </span>
        </button>
       
      </div>

        </section>
    </>
    )
}
export default My;