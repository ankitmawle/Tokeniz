import React from "react";

const ButtonCW = ({ styles, text, id }) =>{
  async function login() {
    let user = Moralis.User.current();
    
    if (!user) {
      user = await Moralis.authenticate();
    }
    console.log("logged in user:", user);
    document.getElementById("btn-login").innerText= user.get("ethAddress");
    document.getElementById("btn-logout").style.display= "block";
  }
  return (
  <button onClick={login} id={`${id}`} type="button" className={`max-w-[200px] py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {`${text}`}
  </button>
  );
}
export default ButtonCW;
