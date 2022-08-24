Tokeniz Polygon address:- 0xF45F7f9A0C74c7ED0C422258C3F8c6083ce6bA6C

Spheron Deployment link:- https://tokeniz-dist-r09fqf.spheron.app/

Aws Hosted link for non static development environment tests :- http://13.127.139.26:8080/

please note AWS deployment is for development purpose only, and runs only on http

Opensea link:- https://opensea.io/collection/tokeniz

New Video:- https://youtu.be/nuskKijq3y0

Old video(with no audio in demo) link if judges want to verify nothing changed:- https://youtu.be/_Qd3eDLL4PM
## Steps to deploy new Tokeniz Contract
1. Open Remix and copy contracts
2. Compile TokenizAdmin.sol
3. Deploy Proxy.sol  
4. Deploy TokenizAdmin.sol by providing required inputs as input for constructor 
5. Run setOwner function of Proxy contract by providing address of TokenizAdmin as input
6. setMint of TokenizAdmin contract to open minting

## To run local website Version
1. clone the repo 
2. install all dependencies by 
``` console
 npm install 
 ```
3. Run Development env by 
``` console
npm run dev
```
4. Build project for deployment
``` console
npm run build
```
5. Run Built project
``` console
npm run preview
```
6. To host project on static server or spheron run this command

**Windows CMD**
``` console
cd dist && mkdir app && copy index.html app && cd app && mkdir Mint && copy index.html Mint && mkdir My && copy index.html My
 ```
**Ubuntu Terminal**
``` console
cd dist && mkdir app && cp index.html app && cd app && mkdir Mint && cp index.html Mint && mkdir My && cp index.html My
 ```

7. Upload dist folder to shared hosting or upload separately on second git repo and deploy as Vanilla JS on spheron
## Inspiration
There are three stories those inspired us to develop Tokeniz. 
1. Being a Blockchain developer I wanted to give a crypto gift to a friend of mine for her birthday, but after going through various NFT it was evident that she being new to the crypto world it would be harder for her to actually use the NFT for any purpose plus she would have to sell it to someone else to actually make any use of it, So I need something that would be like a **NFT with meta data and stuff as well as will also have some intrinsic value which could be used**. 
2. I had a friend who brought a token on the first day of an 6 month long ICO coin, although people were buying them at 10time the price he brought them after a month or so, but since it was not listed on any dex it was hard for him cash out when he was in need. Although he was will to forgo the tokens for half the price people were buying them for, on P2P market. but some who find found on internet who wanted to buy **couldn't find a base trust point in the transaction to happen**. 
3. I was window  shopping on amazon, and also checking some private online stores selling merchandise, and wondered how many people will onboard on to Web3 if buying crypto beacame **as easy as buying something on Amazon**

## What it does
Tokeniz tries to solve all the above mentioned problems with a single solution. 
1. It provides a platform to **lock multiple ERC20 tokens inside of a contract linked with the NFT** tokens, behaving as a virtual wallet. Once the NFT is transferred the tokens are transferred accordingly. 
2. You can **unpack your tokens anytime** from the NFT or **sell it with tokens or list it at any NFT Market place**. 
3. Each Token is unique and hence users will be able to add their own meta data or images to wish or state purpose of the NFT, **thus making it a perfect gift for any occasions**.
4. Similarly you can also sell unlisted token inside an NFT where the locked amount could be verified on chain Thus **allowing Trustless P2P transaction.**
5. We can also integrate the NFT to unpack automatically on transfer and pack  gas fee coins, which seller can add while minting the NFT which they can sell from their own ecommerce platform, and the transfer can be initiated, thus making getting into web3  similar to buying a eBook. 

## How we built it
1. All contracts were written and deployed using Remix
2. We extended  ERC721 to create Tokeniz Contract
3. Tokeniz contract creates a separate contract to hold packed crypto whenever a new token is minted
4. Every tokens has its separate URI, and users can customize what data they want to showcase on their NFT
5. All NFT data is stored on **IPFS**
6. Frontend is hosted on **Spheron**
7. **AWS** is used for backend data storage
8. **Moralis** was used for major web3 interaction
9. **Sequence** wallet will be used for delegating transaction fees to create a Amazon like hassle free  Marketplace 
10. UI development was done using VITE + React + Tailwind.
Special Thanks to @jsmastry for web-template

## Challenges we ran into
1. Mumbai testnet was mostly down, Used rinkeby for all test purposes
2. Fluence network need more documentations
3. Since this was new concept most of the things were created from scratch 

## Accomplishments that we're proud of
1. We learned a lot of new techniques, and toolings
2. We can now proudly present Tokeniz for any one to use on polygon 
3. Tokeniz is something new and something not available out there 
## What we learned
We learned a lot about upcoming technologies, new initiatives live almost free transaction on tron based on energy, etc.
We also learned that thinking about small things in details can have massive benefits
## What's next for Tokeniz
To develop a market place to sell multiple tokenized assets on cypto space. 