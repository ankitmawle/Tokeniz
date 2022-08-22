import React from "react"
import styles from "../style";
import { Chrono } from "react-chrono";

const Timeline = () => {
  const items = [{
    title: "August 2022",
    cardTitle: "  Tokeniz Contract Dev  ",
    
    
  },
{
    title: "September 2022",
    cardTitle: "  Tokeniz Coin Contract Dev  ",
  },
  {
    title: " October 2022",
    cardTitle: "  Tokeniz ICO  ",
    
  },
  {
    title: "November 2022",
    cardTitle: "  Main net Launch  ",
    
  },
  {
    title: "December2022",
    cardTitle: "  Tokeniz Market place Launch  ",
    
  },
  {
    title: " January 2023",
    cardTitle: "Tokeniz Launch Pad Launch",
    
  },
  {
    title: " 2023",
    cardTitle: "Much more to come",
    
  },
];

  return (
    <section id="Timeline">
      <h2 className={styles.heading2}>
        Roadmap?<br className="sm:block hidden" /> 
      </h2>
      <br />
        <div style={{ width: "100%", height: "70vh" }}>
            <Chrono items={items} cardHeight="50px" theme={{
                primary: '#063970',
                secondary: 'white',
                cardBgColor: 'linear-gradient( 157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29% );',
                cardForeColor: 'black',
                titleColor: 'black',
                titleColorActive: 'black',
            }} enableOutline scrollable={{ scrollbar: true }} slideShow mode="VERTICAL_ALTERNATING"/>
        </div>
    </section>
  )

}
export default Timeline;