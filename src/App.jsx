import styles from "./style";
import { Billing, Business, Footer, Navbar, Testimonials, Hero } from "./components";
import Timeline from "./components/Timeline";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing />
        <Business />
        <Timeline/>
        <Testimonials />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
