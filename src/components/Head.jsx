import { useState, useEffect } from "react";
import { close, logobr, menu } from "../assets";
import ButtonCW from "./ButtonCW";
const Head = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
 

 
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logobr} alt="Tokeniz" className="w-[248px] h-[64px]" />

      <ButtonCW id={`btn-login`} styles={`mt-10`}  text={`Connect Wallet`}/>
    </nav>
  );
};

export default Head;
