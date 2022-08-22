import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import {coin} from "../assets";
import Moralis from "moralis";




const Card = ({ content, name, title, img }) => (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        {content}
      </p>
  
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );

const Mint = () => {
  var linecounter=0;
  const addLine=()=>{
		  linecounter++;
      var inp=document.createElement("input");
      inp.type="text";
	    inp.id="add"+linecounter;
      inp.placeholder="Token Address"
      inp.pattern= "/^0x[a-fA-F0-9]{40}$/"
      inp.className="button button-primary"
      inp.style.width="50%";
      inp.style.color="black";
	    inp.style.backgroundColor="white";
      inp.style.border = "thick solid #008CBA";
      var inp2=document.createElement("input");
      inp2.type="Number";
      
	    inp2.id="amount"+linecounter;
      inp2.placeholder="Amount"
      inp2.style.width="25%";
      inp2.className="button button-primary"
      inp2.style.color="black";	  
	    inp2.style.backgroundColor="white";
      inp2.style.border = "thick solid #0000FF";
	    var btnApprove=document.createElement("input");
	    btnApprove.onclick=function (){
		  approve(this.id)							
	  										}
      btnApprove.id="app"+linecounter;
	    btnApprove.type="button";
      btnApprove.value="Approve Token";
      btnApprove.style.width="25%";
      btnApprove.style.border = "thick solid #008CBA";
      btnApprove.style.color="white";
      btnApprove.className="button button-primary"
      var hr=document.createElement("hr");
      
      var tk= document.getElementById("tokens");
      tk.append(inp);
      tk.append(inp2);
	    tk.append(btnApprove)
      tk.append(hr);

  }



  const editLine=()=>{

  }

  const deleteLine=()=>{

  }

  var loadFile = function(event) {
    var output = document.getElementById('preview');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.style.display="block"
    console.log(output.src)
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
  return(
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Mint Your Own Tokeniz<br className="sm:block hidden" /> 
      </h2>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        Just follow the steps below and get Your Customized Tokeniz Minted
      </p>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          
          
          
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[300px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <h3 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          Please provide us with details to make your Tokeniz Shine Out
        </h3>
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
          <label class="relative block p-3 border-2 border-gray-200 rounded-lg" for="name">
          <input
            class="text-black  w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
            id="name"
            type="text"
            placeholder="Happy Birthday ..."
          />

          <span class="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
            Name of Your Tokeniz
          </span>
        </label>
        </p>
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
          <label class="relative block p-3 border-2 border-gray-200 rounded-lg" for="description">
          <textarea
            class="text-black  w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
            id="description"
            type="text"
            rows="5"
            placeholder="This NFT is to wish you great success in Future"
          />

          <span class="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
            Description
          </span>
        </label>
        </p>

        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
          <label class="relative block p-3 border-2 border-gray-200 rounded-lg" for="fileInput">
          <input
            class="text-black  w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
            id="fileInput"
            type="file"
            accept="image/*"
             onChange={loadFile}
            placeholder="This NFT is to wish you great success in Future"
          />

          <span class="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
            Upload your Digital Art here
          </span>
        </label>
        </p>

        <div className="flex flex-row">
        <img src="" id="preview" alt="preview" className="hidden w-[100%] h-[100%] " />

      </div>
        
      </div>

          
          
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[600px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <h3 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          Add Tokens You want to Pack With your Tokeniz
        </h3>
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
          <label class="relative block p-3 border-2 border-gray-200 rounded-lg" for="matic">
          <input
            class="text-black  w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent text-black border-none focus:ring-0 peer"
            id="matic"
            type="number"
            placeholder="0"
          />

          <span class="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
            Matic Amount to be locked
          </span>
        </label>
        <p class="text-white">Please Note that 2 Matic Will be charged Extra as Fee</p>
        </p> 
        <div id="tokens"></div>
                
        <div class="flex items-center -space-x-4 hover:space-x-1">
          <button
            onClick={addLine}
            class="z-10 block p-4 text-green-700 transition-all bg-green-100 border-2 border-white rounded-full active:bg-green-50 hover:scale-110 focus:outline-none focus:ring"
            type="button"
          >
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>

          <button
            onClick={editLine}
            class="z-20 block p-4 text-blue-700 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
            type="button"
          >
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>

          <button
            onClick={deleteLine}
            class="z-30 block p-4 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
            type="button"
          >
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>


      </div>

   
          
      <div className="flex justify-center flex-col px-10 py-12 rounded-[20px]  max-w-[600px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <h3 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          Lets Mint it
        </h3>
        <button onClick={mintTokeniz} class="inline-block p-[2px] rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring" >
        <span class="block px-8 py-3 text-sm font-medium bg-white rounded-sm hover:bg-transparent">
          Mint
        </span>
        </button>
      </div>


    </div>
  </section>
);
  }
export default Mint;
