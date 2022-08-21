import { apple, nft11, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="AboutUs" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={nft11} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        What is Tokeniz?<br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Tokeniz allows everyone to Mint their NFTs while locking multiple tokens in the NFT contract, this will allow users to gift crypto to anyone in a much better way, plus, various other DeFi integrations scenarios can be explored for example, Allowing Fee Less crypto buying from ecommerce platforms, Trustless P2P transactions, etc.
      <br className="sm:block hidden" />
      Lets Explore the world of Tokeniz
      </p>
      <Button styles={`mt-10`}  text={`Launch App`}/>
      
    </div>
  </section>
);

export default Billing;
