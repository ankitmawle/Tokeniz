import styles from "./style";
import { Billing, Business, Footer, Head, Testimonials, Hero, Dashboard, Mint, My } from "./components";
import Timeline from "./components/Timeline";

import { useEffect } from "react";

const App = () => {
  useEffect(()=>{
    start();
  })

  async function start(){
		Moralis.enableWeb3();
		let user = Moralis.User.current();
		if(user){
			console.log("logged in user:", user);
			document.getElementById("btn-login").innerText= user.get("ethAddress");
			document.getElementById("btn-logout").style.display= "block";
			
			document.getElementById("btn-login2").innerText= user.get("ethAddress");
			document.getElementById("btn-logout2").style.display= "block";
			const options = {
			address: "0x6f6392F85CDb5a36A68D2388F6e97082D8E3bCeE",
			function_name: "balanceOf",
			abi: ABI,
			params: { who: user.get("ethAddress") },
			};
			const allowance = await Moralis.Web3API.native.runContractFunction(options);
			}
	} 

	if(window.location.pathname.slice(5,7)=="My"){
		return(
		<div className="bg-primary w-full overflow-hidden">
			<div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Dashboard />
				<My />
			</div>
			</div>
		</div>
		);
	}

	else if(window.location.pathname.slice(5,9)=="Mint"){
		return(
		<div className="bg-primary w-full overflow-hidden">
			<div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Dashboard />
				<Mint />
			</div>
			</div>
		</div>
		);
	}

	else{
		return(
		<div className="bg-primary w-full overflow-hidden">
			<div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Dashboard />
				<My />
			</div>
			</div>
		</div>
		);
	}

}
export default App;
