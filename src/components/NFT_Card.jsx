
const NFT_Card = ({ token_Address, token_Id, name, description, img , visibility, link}) => {
  var receiverAddress=""

  async function unpack_NFT(){
    _unpack_NFT(token_Id);
  }

  async function transfer_NFT(){
    _transfer_NFT(token_Id,receiverAddress);
  }

  async function transferAndUnpack_NFT(){
    _transferAndUnpack_NFT(token_Id,receiverAddress);
  }
  
  function update_transferto(e){
    var TransferBtn=document.getElementById(`transferB${token_Id}`);
    var TandUBtn=document.getElementById(`TandunpackB${token_Id}`);
    receiverAddress=e.target.value;
    if(e.target.value!=""|| e.target.value!=null){
      TransferBtn.disabled=false;
      TransferBtn.classList.add("bg-blue-gradient");
      TandUBtn.disabled=false
      TandUBtn.classList.add("bg-blue-gradient");
      TransferBtn.classList.remove("bg-black-gradient");
      TandUBtn.classList.remove("bg-black-gradient");
      TransferBtn.classList.remove("text-white");
      TandUBtn.classList.remove("text-white");
    }
    else{
      TransferBtn.disabled=true;
      TransferBtn.classList.add("bg-black-gradient");
      TandUBtn.disabled=true
      TandUBtn.classList.add("bg-black-gradient");
      TransferBtn.classList.remove("bg-blue-gradient");
      TandUBtn.classList.remove("bg-blue-gradient");
      TransferBtn.classList.add("text-white");
      TandUBtn.classList.add("text-white");
    }
  }
  return(
    <div class="m-4  block p-4 rounded-lg items-center shadow-sm shadow-indigo-100">
    <a href={link}> 
      <div class="flex justify-center">
        <img
        alt="123 Wallaby Avenue, Park Road"
        src={img}
        class="object-cover object-center h-[50vh] rounded-md"
      />
      </div>
    </a>
    <div class="mt-2 " >
      <a href={link}>
      <dl>
        <div  class="flex justify-center">
          <dt class="sr-only">
            Name
          </dt>

          <dd class="font-medium  text-white">
            {name}
          </dd>
        </div>

        <div class="flex justify-center">
          <dt class="sr-only">
            Description
          </dt>

          <dd class={`font-small text-sm text-white`}>
            {description}
          </dd>
        </div>
      </dl>
      </a>
      <dl class={` ${visibility} flex items-center mt-6 space-x-8 text-xs`}>
        <div class="sm:inline-flex sm:items-center sm:shrink-0">
          <button id={`unpackB${token_Id}`} class="sm:ml-3 mt-1.5 sm:mt-0" onClick={unpack_NFT}>
            <dd class="py-4 px-6 font-medium bg-blue-gradient rounded-[10px] outline-none">
              Unpack
            </dd>
          </button>
        </div>
        <div class="sm:inline-flex sm:items-center sm:shrink-0">
          <button id={`transferB${token_Id}`} class="sm:ml-3 text-white bg-black-gradient mt-1.5 sm:mt-0"  disabled onClick={transfer_NFT}>
            <dd class="py-4 px-6 font-medium  rounded-[10px] outline-none">
              Transfer
            </dd>
          </button>
        </div>
        <div class="sm:inline-flex sm:items-center sm:shrink-0">
          <button id= {`TandunpackB${token_Id}`}class="sm:ml-3 text-white bg-black-gradient mt-1.5 sm:mt-0" onClick={transferAndUnpack_NFT} disabled>
            <dd class="py-4 px-6 font-medium  rounded-[10px] outline-none">
              Transfer And Unpack
            </dd>
          </button>
        </div>
      </dl>
      <input type="text" placeholder="Transfer to Address" onChange={update_transferto} class={`m-[2vh] text-black  w-full px-0 pt-3.5 text-sm  border-none focus:ring-0 peer py-4 ox-6 ${visibility}`} />
    </div>
  </div>

  );

}
export default NFT_Card;
