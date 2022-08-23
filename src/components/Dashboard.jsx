import React, {useState}from "react";
import { logobr } from "../assets";
function useForceUpdate(){
    const [value, setValue] =useState(0);
    return ()=>setValue(value=>value+1);
}
const Dashboard = ({ styles, text, id }) => {
    async function login() {
        let user = Moralis.User.current();
        
        if (!user) {
          user = await Moralis.authenticate();
        }
        console.log("logged in user:", user);
        document.getElementById("btn-login").innerText= user.get("ethAddress");
        document.getElementById("btn-logout").style.display= "block";
        
        document.getElementById("btn-login2").innerText= user.get("ethAddress");
        document.getElementById("btn-logout2").style.display= "block";
      }

    async function logOut() {
        await Moralis.User.logOut();
        console.log("logged out");
		
		document.getElementById("btn-logout").style.display= "none";
		document.getElementById("btn-login").innerText= "Connect Wallet";
        
		document.getElementById("btn-logout2").style.display= "none";
		document.getElementById("btn-login2").innerText= "Connect Wallet";
    }

    function openMenu(){
		document.getElementById("Menu").style.display= "block";
    }
    function closeMenu(){
		document.getElementById("Menu").style.display= "none";
    }
    const reload= useForceUpdate();
    return(
        <>
            <header class="bg-gray-900">
            <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                <div class="flex-1 md:flex md:items-center md:gap-12">
                    <a class="block text-teal-300" href="/">
                        <span class="sr-only">Home</span>
                        <img src={logobr} class="h-9"/>

                    </a>
                </div>

                <div class="md:flex md:items-center md:gap-12">
                    <nav class="hidden md:block" aria-labelledby="header-navigation">
                    <h2 class="sr-only" id="header-navigation">Header navigation</h2>

                    <ul class="flex items-center gap-6 text-sm">
                        <li>
                        <a class="text-white transition hover:text-white/75" href="/app/My" onClick={reload}>
                            My Tokeniz
                        </a>
                        </li>

                        <li>
                        <a class="text-white transition hover:text-white/75" href="/app/Mint" onClick={reload}>
                            Mint Tokeniz
                        </a>
                        </li>

                        <li>
                        <a class="text-white transition hover:text-white/75" href="https://opensea.io/collection/tokeniz/">
                            Marketplace
                        </a>
                        </li>

                        <li>
                        <a class="text-white transition hover:text-white/75" href="https://github.com/ankitmawle/Tokeniz/tree/polygon">
                            Documentation
                        </a>
                        </li>

                    </ul>
                    </nav>

                    <div class="flex items-center gap-4">
                        <div class="sm:gap-4 sm:flex">
                            <div  class="hidden ss:flex">
                                <a id="btn-login"
                                class=" overflow-x-auto px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow"
                                onClick={login}
                                >
                                Connect Wallet
                                </a>
                            </div>
                            <div  class="hidden sm:flex">
                            <a id="btn-logout"
                                class="px-5 py-2.5 text-sm font-medium text-white bg-gray-800 rounded-md"
                                onClick={logOut}
                            >
                                Disconnect Wallet
                            </a>
                            </div>
                        </div>

                    <div class="block md:hidden">
                        <button
                        onClick={openMenu}
                        class="p-2 text-white transition bg-gray-800 rounded hover:text-white/75"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <section id="Menu" class="hidden fixed inset-y-0 right-0 z-50 flex">
                <div class="w-screen max-w-sm">
                    <div class="flex flex-col h-full divide-y divide-gray-200 bg-gray-50">
                    <div class="overflow-y-scroll">
                        <header class="flex items-center justify-between h-16 pl-6">
                        <span class="text-sm font-medium tracking-widest uppercase">
                            Options
                        </span>

                        <button 
                            onClick={closeMenu}
                            aria-label="Close menu"
                            class="w-16 h-16 border-l border-gray-200"
                            type="button"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                            </svg>
                        </button>
                        </header>

                        <nav
                        class="flex flex-col text-sm font-medium text-gray-500 border-t border-b border-gray-200 divide-y divide-gray-200"
                        >                            
                            <a id="btn-login2"
                                    class=" overflow-x-auto px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow"
                                    onClick={login}
                                >
                                Connect Wallet
                            </a>
                            <a id="btn-logout2"
                                class="hidden px-5 py-2.5 text-sm font-medium text-white bg-gray-800 rounded-md"
                                onClick={logOut}
                            >
                                Disconnect Wallet
                            </a>
                            <a href="/" class="px-6 py-3"> Home </a>
                            <a href="app/My" class="px-6 py-3"> My Tokeniz </a>
                            <a href="app/Mint" class="flex items-center justify-between px-6 py-3">
                                Mint Tokeniz
                            
                            </a>
                            <a href="https://opensea.io/collection/tokeniz" class="flex items-center justify-between px-6 py-3">
                                Marketplace
                                
                            </a>
                            <a href="https://github.com/ankitmawle/Tokeniz/tree/polygon" class="px-6 py-3"> Documentation </a>
                            <a href="" class="px-6 py-3"> Contact Address<br/>0x... </a>
                            
                        </nav>
                    </div>
                    </div>
                </div>
                </section>

            </header>


        </>
    );
}

export default Dashboard;



